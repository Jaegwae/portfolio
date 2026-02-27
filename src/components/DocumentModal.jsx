import { useEffect, useRef, useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";

// 브라우저 내장 PDF 뷰어의 불필요한 UI(툴바/사이드바 등)를 최소화한다.
// Safari에서 FitH/scrollbar 옵션이 레이아웃을 깨뜨릴 수 있어 최소 파라미터만 유지한다.
// iframe 내장 뷰어를 사용하지 않고 pdf.js로 직접 렌더링해 브라우저별 깨짐을 방지한다.
pdfjs.GlobalWorkerOptions.workerSrc = new URL("pdfjs-dist/build/pdf.worker.min.mjs", import.meta.url).toString();

function DocumentModal({ document, onClose }) {
  // document 객체 유무 자체를 모달 열림 상태로 사용한다.
  const modalOpen = Boolean(document);
  // type이 image면 <img>, 아니면 pdf.js 기반 캔버스로 렌더링.
  const isImageDocument = document?.type === "image";
  // 이미지/PDF를 불러오는 동안 로딩 UI를 표시해 빈 화면처럼 보이지 않게 한다.
  const [isLoading, setIsLoading] = useState(false);
  // PDF 전체 페이지 수.
  const [numPages, setNumPages] = useState(0);
  // 모달 너비에 맞춰 PDF를 반응형 렌더링하기 위한 컨테이너 측정값.
  const pdfWrapRef = useRef(null);
  const [pdfWidth, setPdfWidth] = useState(0);

  useEffect(() => {
    setIsLoading(Boolean(document));
    setNumPages(0);
  }, [document]);

  useEffect(() => {
    if (!modalOpen || isImageDocument) return undefined;
    if (!pdfWrapRef.current) return undefined;

    const updateWidth = () => {
      const next = Math.floor(pdfWrapRef.current.clientWidth - 24);
      setPdfWidth(Math.max(320, next));
    };

    updateWidth();
    if (typeof ResizeObserver === "undefined") return undefined;
    const observer = new ResizeObserver(updateWidth);
    observer.observe(pdfWrapRef.current);
    return () => observer.disconnect();
  }, [modalOpen, isImageDocument]);

  return (
    <div
      className={`modal ${modalOpen ? "open" : ""}`}
      aria-hidden={!modalOpen}
      onClick={(event) => {
        // 어두운 배경(overlay) 클릭 시만 닫히도록 처리한다.
        // 내부 콘텐츠 클릭은 닫히지 않게 currentTarget 비교를 사용.
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <div className="modal-content" role="dialog" aria-modal="true" aria-labelledby="docModalTitle">
        <div className="modal-head">
          <h3 id="docModalTitle">{document?.title || "문서 보기"}</h3>
          <div className="modal-actions">
            {!isImageDocument && numPages > 0 && <span className="pdf-page-status">총 {numPages}페이지</span>}
            <button className="icon-btn" type="button" aria-label="문서 닫기" onClick={onClose}>
              ×
            </button>
          </div>
        </div>
        {isLoading && (
          <div className="modal-loading">
            <p>문서를 불러오는 중...</p>
          </div>
        )}
        {isImageDocument ? (
          <div className="modal-image-wrap">
            <img
              src={document.path}
              alt={document.title || "문서 이미지"}
              className="modal-image"
              // 드래그 저장/우클릭을 최소화해 원본 다운로드 노출을 줄인다.
              draggable="false"
              onContextMenu={(event) => event.preventDefault()}
              onLoad={() => setIsLoading(false)}
              onError={() => setIsLoading(false)}
            />
          </div>
        ) : (
          <div className="modal-pdf-wrap" ref={pdfWrapRef}>
            <Document
              file={document?.path || ""}
              loading=""
              onLoadSuccess={({ numPages: loadedPages }) => {
                setNumPages(loadedPages);
                setIsLoading(false);
              }}
              onLoadError={() => setIsLoading(false)}
              onSourceError={() => setIsLoading(false)}
            >
              {Array.from({ length: numPages }, (_, index) => (
                <Page
                  key={`pdf-page-${index + 1}`}
                  pageNumber={index + 1}
                  width={pdfWidth || 820}
                  renderMode="svg"
                  renderTextLayer={false}
                  renderAnnotationLayer={false}
                />
              ))}
            </Document>
          </div>
        )}
      </div>
    </div>
  );
}

export default DocumentModal;

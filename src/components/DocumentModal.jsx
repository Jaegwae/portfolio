import { useEffect, useState } from "react";

// 브라우저 내장 PDF 뷰어의 불필요한 UI(툴바/사이드바 등)를 최소화한다.
// Safari에서 FitH/scrollbar 옵션이 레이아웃을 깨뜨릴 수 있어 최소 파라미터만 유지한다.
const addPdfViewParam = (path) => `${path}#toolbar=0&navpanes=0`;

function DocumentModal({ document, onClose }) {
  // document 객체 유무 자체를 모달 열림 상태로 사용한다.
  const modalOpen = Boolean(document);
  // type이 image면 <img>, 아니면 <iframe pdf> 렌더링.
  const isImageDocument = document?.type === "image";
  // 모달이 닫힌 상태에서는 안전하게 빈 페이지를 사용한다.
  const iframeSrc = document && !isImageDocument ? addPdfViewParam(document.path) : "about:blank";
  // 이미지/PDF를 불러오는 동안 로딩 UI를 표시해 빈 화면처럼 보이지 않게 한다.
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(Boolean(document));
  }, [document]);

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
          <iframe title="Document Viewer" src={iframeSrc} onLoad={() => setIsLoading(false)} />
        )}
      </div>
    </div>
  );
}

export default DocumentModal;

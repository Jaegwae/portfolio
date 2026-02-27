const addPdfViewParam = (path) => `${path}#view=FitH&toolbar=0&navpanes=0&scrollbar=0`;

function DocumentModal({ document, onClose }) {
  const modalOpen = Boolean(document);
  const isImageDocument = document?.type === "image";
  const iframeSrc = document && !isImageDocument ? addPdfViewParam(document.path) : "about:blank";

  return (
    <div
      className={`modal ${modalOpen ? "open" : ""}`}
      aria-hidden={!modalOpen}
      onClick={(event) => {
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
        {isImageDocument ? (
          <div className="modal-image-wrap">
            <img
              src={document.path}
              alt={document.title || "문서 이미지"}
              className="modal-image"
              draggable="false"
              onContextMenu={(event) => event.preventDefault()}
            />
          </div>
        ) : (
          <iframe title="Document Viewer" src={iframeSrc} />
        )}
      </div>
    </div>
  );
}

export default DocumentModal;

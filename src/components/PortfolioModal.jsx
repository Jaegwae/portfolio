import { getThumbnailPath } from "./portfolioHelpers";

function CloseIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="m6 6 12 12" />
      <path d="M18 6 6 18" />
    </svg>
  );
}

function BackIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M15 6 9 12l6 6" />
    </svg>
  );
}

function EyeIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M2.5 12s3.5-6 9.5-6 9.5 6 9.5 6-3.5 6-9.5 6-9.5-6-9.5-6Z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
}

function DownloadIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 4v10" />
      <path d="m8.5 10.5 3.5 3.5 3.5-3.5" />
      <path d="M5 18h14" />
    </svg>
  );
}

function ArrowUpRightIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M7 17 17 7" />
      <path d="M9 7h8v8" />
    </svg>
  );
}

function PortfolioModal({ item, onClose, onOpenDocument }) {
  if (!item) return null;

  const modalMeta = [
    { label: "Category", value: item.category },
    { label: "Year", value: item.year },
    { label: "Tags", value: item.tags.join(" · ") }
  ];

  return (
    <div
      className="portfolio-modal-overlay"
      onClick={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <div className="portfolio-modal-shell" role="dialog" aria-modal="true" aria-labelledby="portfolioModalTitle">
        <button type="button" className="portfolio-modal-close" aria-label="뒤로가기" onClick={onClose}>
          <span className="portfolio-modal-close__mobile">
            <BackIcon />
            Back
          </span>
          <span className="portfolio-modal-close__desktop" aria-hidden="true">
            <CloseIcon />
          </span>
        </button>

        <div className="portfolio-modal-media">
          <div className="portfolio-modal-media__frame">
            <img src={getThumbnailPath(item.pdfPath)} alt={`${item.title} 프로젝트 대표 이미지`} />
          </div>
        </div>

        <div className="portfolio-modal-content">
          <div>
            <p className="portfolio-modal-content__eyebrow">CASE STUDY — {item.year}</p>
            <h2 id="portfolioModalTitle">{item.title}</h2>
            <p className="portfolio-modal-content__subtitle">{item.subtitle}</p>

            <div className="portfolio-modal-copy">
              <section>
                <h3>Challenge</h3>
                <p>{item.challenge}</p>
              </section>

              <section>
                <h3>Solution</h3>
                <p>{item.solution}</p>
              </section>
            </div>

            <dl className="portfolio-modal-meta">
              {modalMeta.map((entry) => (
                <div key={entry.label}>
                  <dt>{entry.label}</dt>
                  <dd>{entry.value}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="portfolio-modal-actions">
            <button
              type="button"
              className="portfolio-modal-action portfolio-modal-action--primary"
              onClick={() => {
                onOpenDocument(item.title, item.pdfPath);
                onClose();
              }}
            >
              <EyeIcon />
              View PDF
            </button>

            <a className="portfolio-modal-action portfolio-modal-action--secondary" href={item.pdfPath} download>
              <DownloadIcon />
              Download PDF
            </a>

            {item.githubUrl && (
              <a
                className="portfolio-modal-action portfolio-modal-action--secondary"
                href={item.githubUrl}
                target="_blank"
                rel="noreferrer"
              >
                <ArrowUpRightIcon />
                GitHub
              </a>
            )}

            {item.completionCertificate && (
              <button
                type="button"
                className="portfolio-modal-action portfolio-modal-action--secondary"
                onClick={() => {
                  onOpenDocument(
                    item.completionCertificate.title,
                    item.completionCertificate.path,
                    item.completionCertificate.type
                  );
                  onClose();
                }}
              >
                <EyeIcon />
                Completion Certificate
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default PortfolioModal;

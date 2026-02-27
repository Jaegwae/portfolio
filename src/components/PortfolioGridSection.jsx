import { useEffect, useMemo, useState } from "react";

function PortfolioGridSection({ items, onOpenDocument }) {
  const [category, setCategory] = useState("All");
  const [selectedItem, setSelectedItem] = useState(null);
  const thumbnailSrc = (pdfPath) => pdfPath.replace("/items/", "/thumbs/").replace(/\.pdf$/i, ".jpg");

  useEffect(() => {
    if (!selectedItem) return undefined;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [selectedItem]);

  const categories = useMemo(() => ["All", ...Array.from(new Set(items.map((item) => item.category)))], [items]);

  const filteredItems = useMemo(() => {
    if (category === "All") return items;
    return items.filter((item) => item.category === category);
  }, [category, items]);

  return (
    <section id="portfolio-work" className="portfolio-section">
      <header className="portfolio-header fx-reveal" style={{ animationDelay: "80ms" }}>
        <h2>
          SELECTED
          <br />
          <span>WORK_</span>
        </h2>
        <div className="portfolio-filters">
          {categories.map((itemCategory) => (
            <button
              key={itemCategory}
              type="button"
              className={`filter-btn ${category === itemCategory ? "active" : ""}`}
              onClick={() => setCategory(itemCategory)}
            >
              {itemCategory}
            </button>
          ))}
        </div>
      </header>

      <div className="portfolio-grid">
        {filteredItems.map((item, index) => (
          <article key={item.id} className="portfolio-card fx-reveal" style={{ animationDelay: `${index * 70}ms` }}>
            <button type="button" className="portfolio-thumb-wrap" onClick={() => setSelectedItem(item)}>
              <img
                src={thumbnailSrc(item.pdfPath)}
                alt={`${item.title} PDF 첫 페이지 미리보기`}
                className="portfolio-thumb-pdf"
                loading="lazy"
              />
            </button>
            <h3>{item.title}</h3>
            <p>{item.subtitle}</p>
            <div className="portfolio-tag-row">
              {item.tags.map((tag) => (
                <span key={`${item.id}-${tag}`} className="portfolio-tag">
                  {tag}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>

      <div
        className={`modal ${selectedItem ? "open" : ""}`}
        aria-hidden={!selectedItem}
        onClick={(event) => {
          if (event.target === event.currentTarget) setSelectedItem(null);
        }}
      >
        {selectedItem && (
          <div
            className="portfolio-case-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="portfolioCaseTitle"
          >
            <button className="case-close-btn" type="button" onClick={() => setSelectedItem(null)}>
              ×
            </button>
            <div className="case-layout">
              <div className="case-media">
                <img
                  src={thumbnailSrc(selectedItem.pdfPath)}
                  alt={`${selectedItem.title} PDF 첫 페이지`}
                  className="case-pdf-preview"
                />
                <span className="case-label">CASE STUDY</span>
              </div>
              <div className="case-content">
                <h3 id="portfolioCaseTitle" className="case-reveal" style={{ animationDelay: "70ms" }}>
                  {selectedItem.title}
                  <span>_</span>
                </h3>
                <div className="case-chip-row case-reveal" style={{ animationDelay: "140ms" }}>
                  {selectedItem.tags.map((tag) => (
                    <span key={`${selectedItem.id}-case-${tag}`} className="case-chip">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="case-body case-reveal" style={{ animationDelay: "200ms" }}>
                  <div>
                    <h4>THE CHALLENGE</h4>
                    <p>{selectedItem.challenge}</p>
                  </div>
                  <div>
                    <h4>THE SOLUTION</h4>
                    <p>{selectedItem.solution}</p>
                  </div>
                </div>
                <div className="case-foot case-reveal" style={{ animationDelay: "260ms" }}>
                  <div className="action-row">
                    <button
                      className="primary-btn brutal-btn case-action-btn"
                      type="button"
                      onClick={() => {
                        onOpenDocument(selectedItem.title, selectedItem.pdfPath);
                        setSelectedItem(null);
                      }}
                    >
                      PDF 보기
                    </button>
                    <a className="secondary-btn brutal-btn-light case-action-btn" href={selectedItem.pdfPath} download>
                      PDF 다운로드
                    </a>
                    {selectedItem.completionCertificate && (
                      <button
                        className="secondary-btn brutal-btn-light case-action-btn"
                        type="button"
                        onClick={() => {
                          onOpenDocument(
                            selectedItem.completionCertificate.title,
                            selectedItem.completionCertificate.path,
                            selectedItem.completionCertificate.type
                          );
                          setSelectedItem(null);
                        }}
                      >
                        수료증 보기
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default PortfolioGridSection;

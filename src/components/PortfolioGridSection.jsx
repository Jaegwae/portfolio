import { useEffect, useMemo, useState } from "react";

function PortfolioGridSection({ items, onOpenDocument }) {
  // 현재 선택된 카테고리 필터.
  const [category, setCategory] = useState("All");
  // 상세 케이스 모달 상태. null이면 닫힘.
  const [selectedItem, setSelectedItem] = useState(null);

  // 썸네일 규칙:
  // /items/xxx.pdf -> /thumbs/xxx.jpg
  // 포트폴리오 카드/상세 미디어를 동일한 소스 규칙으로 재사용한다.
  const thumbnailSrc = (pdfPath) => pdfPath.replace("/items/", "/thumbs/").replace(/\.pdf$/i, ".jpg");

  // 상세 모달이 열리면 배경 스크롤 잠금.
  // 모달 닫힘/언마운트 시 원래 값으로 복원한다.
  useEffect(() => {
    if (!selectedItem) return undefined;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [selectedItem]);

  // 버튼 라인업용 카테고리 목록 생성.
  // 데이터에서 중복 제거 후 앞에 "All"을 붙인다.
  const categories = useMemo(() => ["All", ...Array.from(new Set(items.map((item) => item.category)))], [items]);

  // 현재 카테고리에 맞는 카드 목록.
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
        {/* 카드 리스트 */}
        {filteredItems.map((item, index) => (
          <article key={item.id} className="portfolio-card fx-reveal" style={{ animationDelay: `${index * 70}ms` }}>
            {/* 썸네일 클릭 시 상세 모달 오픈 */}
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
          // overlay 클릭 닫기
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
                        // PDF 원문은 공용 문서 모달에서 연다.
                        onOpenDocument(selectedItem.title, selectedItem.pdfPath);
                        setSelectedItem(null);
                      }}
                    >
                      PDF 보기
                    </button>
                    <a className="secondary-btn brutal-btn-light case-action-btn" href={selectedItem.pdfPath} download>
                      PDF 다운로드
                    </a>
                    {selectedItem.githubUrl && (
                      <a
                        className="secondary-btn brutal-btn-light case-action-btn"
                        href={selectedItem.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        GitHub 바로가기
                      </a>
                    )}
                    {selectedItem.completionCertificate && (
                      <button
                        className="secondary-btn brutal-btn-light case-action-btn"
                        type="button"
                        onClick={() => {
                          // 특정 프로젝트(높이 예측 모델)에만 수료증 버튼이 노출된다.
                          // 수료증은 이미지 타입으로 열어 다운로드 UI를 최소화한다.
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

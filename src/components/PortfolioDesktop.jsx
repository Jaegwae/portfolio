import { useState } from "react";
import {
  buildPortfolioCardTags,
  buildPortfolioFilters,
  buildExperienceRows,
  buildLanguageRows,
  clipText,
  getThumbnailPath
} from "./portfolioHelpers";

function ArrowLinkIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M7 17 17 7" />
      <path d="M9 7h8v8" />
    </svg>
  );
}

function CertificateIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 3.5 5.5 6v5.8c0 4 2.5 7.5 6.5 8.7 4-1.2 6.5-4.7 6.5-8.7V6L12 3.5Z" />
      <path d="m9.8 12.2 1.6 1.6 3.2-3.6" />
    </svg>
  );
}

function PortfolioDesktop({
  profile,
  heroDetails,
  intro,
  career,
  education,
  stack,
  certifications,
  languageCertificate,
  trainingCertificates,
  militaryRecord,
  portfolioItems,
  activeSection,
  onOpenDocument,
  onOpenPortfolio,
  onScrollToSection
}) {
  const [activeFilter, setActiveFilter] = useState("All");
  const languageRows = buildLanguageRows(languageCertificate);
  const experienceRows = buildExperienceRows(career);
  const filterOptions = buildPortfolioFilters(portfolioItems);
  const showcaseItems =
    activeFilter === "All"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === activeFilter);
  const careerCertificates = career.items?.[0]?.certificates || [];
  const experienceResources = [...careerCertificates];
  const selectFilter = (filter) => setActiveFilter(filter);

  return (
    <div className="portfolio-site portfolio-site--desktop">
      <header className="portfolio-shell__header">
        <div className="portfolio-shell__header-inner">
          <button type="button" className="portfolio-brand" onClick={() => onScrollToSection("home")}>
            KIM.JAEGWAN
          </button>

          <nav className="portfolio-nav" aria-label="Primary">
            <button
              type="button"
              className={activeSection === "home" ? "is-active" : ""}
              onClick={() => onScrollToSection("home")}
            >
              Home
            </button>
            <button
              type="button"
              className={activeSection === "about" ? "is-active" : ""}
              onClick={() => onScrollToSection("about")}
            >
              About
            </button>
            <button
              type="button"
              className={activeSection === "experience" ? "is-active" : ""}
              onClick={() => onScrollToSection("experience")}
            >
              Experience
            </button>
            <button
              type="button"
              className={activeSection === "portfolio" ? "is-active" : ""}
              onClick={() => onScrollToSection("portfolio")}
            >
              Portfolio
            </button>
          </nav>
        </div>
      </header>

      <main className="portfolio-desktop">
        <section id="home" className="portfolio-hero portfolio-section-scroll" data-nav-group="home">
          <div className="portfolio-hero__inner">
            <div className="portfolio-hero__copy">
              <p className="portfolio-eyebrow">{profile.role}</p>
              <h1 className="portfolio-hero__title">
                문제를 구조화해
                <br />
                <span>실행 가능한 가치</span>
                <br />
                로 연결합니다.
              </h1>
              <p className="portfolio-hero__summary">{profile.summary}</p>
              <div className="portfolio-hero__details" aria-label="기본 정보">
                {heroDetails.map((detail) => (
                  <p key={detail.label} className="portfolio-hero__detail">
                    <span>{detail.label}</span>
                    <strong>{detail.value}</strong>
                  </p>
                ))}
              </div>

              <button
                type="button"
                className="portfolio-link-button"
                onClick={() => onScrollToSection("portfolio")}
              >
                <ArrowLinkIcon />
                View Portfolio
              </button>
            </div>

            <div className="portfolio-hero__portrait">
              <img src="/assets/profile.jpg" alt={`${profile.name} 프로필 사진`} />
            </div>
          </div>
        </section>

        <section id="about" className="desktop-intro portfolio-section-scroll" data-nav-group="about">
          <div className="desktop-intro__inner">
            <div className="desktop-intro__header">
              <p className="portfolio-eyebrow">{intro.title}</p>
              <h2>{intro.headline}</h2>
            </div>

            <div className="desktop-intro__body">
              {intro.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>
        </section>

        <section id="education" className="portfolio-band portfolio-section-scroll" data-nav-group="about">
          <div className="portfolio-academic">
            <article className="portfolio-panel portfolio-panel--academic">
              <div className="portfolio-panel__content">
                <div className="portfolio-panel__heading">
                  <h2>Education</h2>
                </div>

                <div className="academic-entry-list">
                  {education.map((item) => (
                    <article key={`${item.title}-${item.period}`} className="academic-entry">
                      <p className="academic-entry__period">{item.period}</p>
                      <h3>{item.title}</h3>
                      <p className="academic-entry__role">{item.role}</p>
                      <p className="academic-entry__summary">{item.summary}</p>
                    </article>
                  ))}
                </div>
              </div>
            </article>

            <article className="portfolio-panel portfolio-panel--certifications">
              <div className="portfolio-panel__heading">
                <h2>Certifications</h2>
              </div>

              <div className="certification-list">
                {certifications.map((certificate) => (
                  <button
                    key={certificate.name}
                    type="button"
                    className="certification-item"
                    onClick={() => onOpenDocument(certificate.title, certificate.path, certificate.type)}
                  >
                    <span className="certification-item__icon" aria-hidden="true">
                      <CertificateIcon />
                    </span>
                    <span className="certification-item__text">
                      <strong>{certificate.name}</strong>
                      <small>{certificate.lines[1]}</small>
                    </span>
                  </button>
                ))}
              </div>

            </article>
          </div>
        </section>

        <section className="portfolio-signals portfolio-section-scroll" data-nav-group="about">
          <div className="portfolio-signals__inner">
            <article className="language-panel">
              <p className="portfolio-eyebrow">Language</p>

              <div className="language-meter-list">
                {languageRows.map((row) => (
                  <div
                    key={row.label}
                    className={`language-meter-row${row.variant ? ` language-meter-row--${row.variant}` : ""}`}
                  >
                    <div className="language-meter-row__head">
                      <strong>{row.label}</strong>
                      {row.value ? <span>{row.value}</span> : null}
                    </div>
                    {typeof row.meter === "number" ? (
                      <div className="language-meter-row__track" aria-hidden="true">
                        <span style={{ width: `${row.meter}%` }} />
                      </div>
                    ) : null}
                  </div>
                ))}
              </div>

              <button
                type="button"
                className="portfolio-inline-text"
                onClick={() =>
                  onOpenDocument(languageCertificate.title, languageCertificate.path, languageCertificate.type)
                }
              >
                TOEIC Speaking 성적표 보기
              </button>
            </article>

            <article className="military-panel">
              <p className="portfolio-eyebrow">Military Service</p>
              <h2>{militaryRecord.status}</h2>
              <p className="military-panel__period">{militaryRecord.period}</p>
              <p className="military-panel__description">
                체계적인 운영, 커뮤니케이션, 현장 대응 경험을 만든 군 복무 기록입니다.
              </p>

              <div className="military-panel__stats">
                <div>
                  <span>복무 형태</span>
                  <strong>만기전역</strong>
                </div>
                <div>
                  <span>증빙 문서</span>
                  <strong>병적증명서</strong>
                </div>
              </div>

              <button
                type="button"
                className="portfolio-inline-text"
                onClick={() =>
                  onOpenDocument(
                    militaryRecord.document.title,
                    militaryRecord.document.path,
                    militaryRecord.document.type
                  )
                }
              >
                병적증명서 보기
              </button>
            </article>
          </div>
        </section>

        <section className="desktop-training portfolio-section-scroll" data-nav-group="about">
          <div className="desktop-training__inner">
            <div className="desktop-training__header">
              <h2>Training</h2>
            </div>

            <div className="desktop-training__grid">
              {trainingCertificates.map((training) => (
                <button
                  key={training.name}
                  type="button"
                  className="desktop-training-card"
                  onClick={() => onOpenDocument(training.title, training.path, training.type)}
                >
                  <small>{training.badge}</small>
                  <strong>{training.name}</strong>
                  <span>{training.lines.join(" · ")}</span>
                  {training.activities?.length ? (
                    <ul className="training-card__activities">
                      {training.activities.map((activity) => (
                        <li key={`${training.name}-${activity}`}>{activity}</li>
                      ))}
                    </ul>
                  ) : null}
                </button>
              ))}
            </div>
          </div>
        </section>

        <section
          id="experience"
          className="portfolio-experience portfolio-section-scroll"
          data-nav-group="experience"
        >
          <div className="portfolio-experience__inner">
            <p className="portfolio-eyebrow">Experience History</p>

            <div className="experience-row-list">
              {experienceRows.map((row, index) => (
                <article
                  key={`${row.title}-${row.period}`}
                  className={`experience-row ${index === experienceRows.length - 1 ? "is-last" : ""}`}
                >
                  <div className="experience-row__period">{row.period}</div>
                  <div className="experience-row__main">
                    <h3>{row.title}</h3>
                    <p className="experience-row__subtitle">{row.subtitle}</p>
                    {(row.descriptions || []).map((description, descriptionIndex) => (
                      <p
                        key={`${row.title}-description-${descriptionIndex}`}
                        className="experience-row__description"
                      >
                        {description}
                      </p>
                    ))}
                  </div>
                  <div className="experience-row__badge">{row.badge}</div>
                </article>
              ))}
            </div>

            <div className="experience-resource-list">
              {experienceResources.map((resource) => (
                <button
                  key={`${resource.title}-${resource.path}`}
                  type="button"
                  className="experience-resource-list__button"
                  onClick={() => onOpenDocument(resource.title, resource.path, resource.type)}
                >
                  {resource.label}
                </button>
              ))}
            </div>
          </div>
        </section>

        <section
          id="portfolio"
          className="portfolio-showcase portfolio-section-scroll"
          data-nav-group="portfolio"
        >
          <div className="portfolio-showcase__inner">
            <div className="portfolio-showcase__header">
              <div className="portfolio-showcase__copy">
                <h2>Portfolio</h2>
                <p>서비스 기획, AI, 데이터 프로젝트를 실제 결과물 중심으로 정리한 작업 모음입니다.</p>
              </div>
            </div>

            <div className="portfolio-filter-row" aria-label="Portfolio filters">
              <button
                type="button"
                className={`portfolio-filter-chip${activeFilter === "All" ? " is-active" : ""}`}
                onClick={() => selectFilter("All")}
              >
                All
              </button>
              {filterOptions.map((filter) => (
                <button
                  key={filter}
                  type="button"
                  className={`portfolio-filter-chip${activeFilter === filter ? " is-active" : ""}`}
                  onClick={() => selectFilter(filter)}
                >
                  {filter}
                </button>
              ))}
            </div>

            <div className="portfolio-card-grid">
              {showcaseItems.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  className="portfolio-card"
                  onClick={() => onOpenPortfolio(item)}
                >
                  <div className="portfolio-card__media">
                    <img src={getThumbnailPath(item.pdfPath)} alt={`${item.title} 프로젝트 썸네일`} />
                  </div>
                  <div className="portfolio-card__tags" aria-label={`${item.title} tags`}>
                    {buildPortfolioCardTags(item).map((tag) => (
                      <span key={`${item.id}-${tag}`} className="portfolio-card__tag">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3>{item.title}</h3>
                  <p>{clipText(item.subtitle, 68)}</p>
                </button>
              ))}
            </div>
            {showcaseItems.length === 0 ? (
              <p className="portfolio-showcase__empty">선택한 태그에 해당하는 프로젝트가 없습니다.</p>
            ) : null}
          </div>
        </section>
      </main>

      <footer
        id="contact"
        className="portfolio-footer portfolio-section-scroll"
        data-nav-group="contact"
      >
        <div className="portfolio-footer__inner">
          <p>© 2026 KIM JAEGWAN PORTFOLIO. ALL RIGHTS RESERVED.</p>
          <span>Based in Seoul, KR</span>
        </div>
      </footer>
    </div>
  );
}

export default PortfolioDesktop;

import { useState } from "react";
import {
  buildPortfolioCardTags,
  buildPortfolioFilters,
  buildExperienceRows,
  buildLanguageRows,
  clipText,
  getThumbnailPath
} from "./portfolioHelpers";

function ArrowUpRightIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M7 17 17 7" />
      <path d="M9 7h8v8" />
    </svg>
  );
}

function GridIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <rect x="4" y="4" width="6" height="6" rx="1" />
      <rect x="14" y="4" width="6" height="6" rx="1" />
      <rect x="4" y="14" width="6" height="6" rx="1" />
      <rect x="14" y="14" width="6" height="6" rx="1" />
    </svg>
  );
}

function HomeIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M5 11.5 12 6l7 5.5" />
      <path d="M7 10.8V18h10v-7.2" />
    </svg>
  );
}

function AboutIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M6 5h12v14H6z" />
      <path d="M9 9h6" />
      <path d="M9 13h6" />
    </svg>
  );
}

function FolderIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M4 8h6l2 2h8v8H4z" />
      <path d="M4 8V6h6l2 2" />
    </svg>
  );
}

function ExperienceIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M4 8h16v10H4z" />
      <path d="M9 8V6h6v2" />
    </svg>
  );
}

function PortfolioMobile({
  profile,
  heroDetails,
  intro,
  career,
  education,
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
  const filteredPortfolioItems =
    activeFilter === "All"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === activeFilter);
  const careerCertificates = career.items?.[0]?.certificates || [];
  const selectFilter = (filter) => setActiveFilter(filter);

  return (
    <div className="portfolio-site portfolio-site--mobile">
      <header className="mobile-topbar">
        <button type="button" className="mobile-topbar__title" onClick={() => onScrollToSection("home")}>
          KIM.JAEGWAN
        </button>
      </header>

      <main className="mobile-main">
        <section id="home" className="mobile-hero portfolio-section-scroll" data-nav-group="home">
          <p className="portfolio-eyebrow">{profile.role}</p>
          <h1 className="mobile-hero__title">
            문제를 구조화해
            <br />
            실행 가능한 가치로
            <br />
            연결합니다.
          </h1>
          <p className="mobile-hero__summary">{intro.paragraphs?.[0] || profile.summary}</p>
          <div className="portfolio-hero__details portfolio-hero__details--mobile" aria-label="기본 정보">
            {heroDetails.map((detail) => (
              <p key={detail.label} className="portfolio-hero__detail">
                <span>{detail.label}</span>
                <strong>{detail.value}</strong>
              </p>
            ))}
          </div>

          <div className="mobile-hero__portrait">
            <img src="/assets/profile.jpg" alt={`${profile.name} 프로필 사진`} />
          </div>

          <button
            type="button"
            className="portfolio-link-button portfolio-link-button--mobile"
            onClick={() => onScrollToSection("portfolio")}
          >
            <ArrowUpRightIcon />
            View Portfolio
          </button>

        </section>

        <section
          id="about"
          className="mobile-section mobile-section--intro portfolio-section-scroll"
          data-nav-group="about"
        >
          <div className="mobile-section__heading">
            <h2>{intro.title}</h2>
          </div>

          <div className="mobile-intro">
            <p className="mobile-intro__headline">{intro.headline}</p>
            <div className="mobile-intro__body">
              {intro.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>
        </section>

        <section
          id="education"
          className="mobile-section mobile-section--strong portfolio-section-scroll"
          data-nav-group="about"
        >
          <div className="mobile-section__heading">
            <h2>Education</h2>
          </div>

          <div className="mobile-timeline">
            {education.map((item) => (
              <article key={`${item.title}-${item.period}`} className="mobile-timeline__item">
                <span className="mobile-timeline__marker" aria-hidden="true" />
                <div className="mobile-timeline__content">
                  <h3>{item.title}</h3>
                  <p className="mobile-timeline__period">{item.period}</p>
                  <p className="mobile-timeline__role">{item.role}</p>
                  <p className="mobile-timeline__summary">{item.summary}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section
          className="mobile-section mobile-section--surface portfolio-section-scroll"
          data-nav-group="about"
        >
          <div className="mobile-section__heading">
            <h2>Certifications</h2>
          </div>

          <article className="mobile-card">
            <div className="mobile-certification-list mobile-certification-list--compact">
              {certifications.map((certificate) => (
                <button
                  key={certificate.name}
                  type="button"
                  className="mobile-certification-item"
                  onClick={() => onOpenDocument(certificate.title, certificate.path, certificate.type)}
                >
                  <span>{certificate.name}</span>
                  <small>{certificate.lines[1]}</small>
                </button>
              ))}
            </div>
          </article>
        </section>

        <section
          className="mobile-section mobile-section--strong portfolio-section-scroll"
          data-nav-group="about"
        >
          <div className="mobile-section__heading">
            <h2>Language</h2>
          </div>

          <article className="mobile-card">
            <div className="mobile-language-list">
              {languageRows.map((row) => (
                <div
                  key={row.label}
                  className={`mobile-language-list__row${row.variant ? ` mobile-language-list__row--${row.variant}` : ""}`}
                >
                  <div className="mobile-language-list__head">
                    <strong>{row.label}</strong>
                    {row.value ? <span>{row.value}</span> : null}
                  </div>
                  {typeof row.meter === "number" ? (
                    <div className="mobile-language-list__track" aria-hidden="true">
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
              성적표 보기
            </button>
          </article>
        </section>

        <section
          className="mobile-section mobile-section--surface portfolio-section-scroll"
          data-nav-group="about"
        >
          <div className="mobile-section__heading">
            <h2>Military Service</h2>
          </div>

          <article className="mobile-card">
            <p className="mobile-card__title">{militaryRecord.status}</p>
            <p className="mobile-card__text">{militaryRecord.period}</p>
            <p className="mobile-card__text">병적증명서와 함께 복무 이력을 확인할 수 있습니다.</p>
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
        </section>

        <section
          className="mobile-section mobile-section--strong portfolio-section-scroll"
          data-nav-group="about"
        >
          <div className="mobile-section__heading">
            <h2>Training</h2>
          </div>

          <div className="mobile-training-list">
            {trainingCertificates.map((training) => (
              <button
                key={training.name}
                type="button"
                className="mobile-training-card"
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
        </section>

        <section
          id="experience"
          className="mobile-section mobile-section--surface portfolio-section-scroll"
          data-nav-group="experience"
        >
          <div className="mobile-section__heading">
            <h2>Experience History</h2>
          </div>

          <div className="mobile-experience-list">
            {experienceRows.map((row, index) => (
              <article key={`${row.title}-${row.period}`} className="mobile-experience-item">
                <div className="mobile-experience-item__rail" aria-hidden="true">
                  <span className={`mobile-experience-item__dot ${index === 0 ? "is-active" : ""}`} />
                  {index < experienceRows.length - 1 && <span className="mobile-experience-item__line" />}
                </div>

                <div className="mobile-experience-item__content">
                  <h3>{row.title}</h3>
                  <p className="mobile-experience-item__subtitle">{row.subtitle}</p>
                  <p className="mobile-experience-item__period">{row.period}</p>
                  {(row.descriptions || []).map((description, descriptionIndex) => (
                    <p
                      key={`${row.title}-mobile-description-${descriptionIndex}`}
                      className="mobile-experience-item__description"
                    >
                      {description}
                    </p>
                  ))}
                </div>
              </article>
            ))}
          </div>

          <div className="mobile-record-link-list">
            {careerCertificates.map((certificate) => (
              <button
                key={certificate.path}
                type="button"
                className="mobile-record-link-list__button"
                onClick={() => onOpenDocument(certificate.title, certificate.path, certificate.type)}
              >
                {certificate.label}
              </button>
            ))}
          </div>
        </section>

        <section
          id="portfolio"
          className="mobile-section mobile-section--strong portfolio-section-scroll"
          data-nav-group="portfolio"
        >
          <div className="mobile-section__heading mobile-section__heading--split">
            <div>
              <h2>Portfolio</h2>
              <p>Selected Works</p>
            </div>
            <span className="mobile-section__icon" aria-hidden="true">
              <GridIcon />
            </span>
          </div>

          <div className="portfolio-filter-row portfolio-filter-row--mobile" aria-label="Portfolio filters">
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

          <div className="mobile-project-list">
            {filteredPortfolioItems.map((item) => (
              <button
                key={item.id}
                type="button"
                className="mobile-project-card"
                onClick={() => onOpenPortfolio(item)}
              >
                <div className="mobile-project-card__media">
                  <img src={getThumbnailPath(item.pdfPath)} alt={`${item.title} 프로젝트 썸네일`} />
                </div>
                <div className="mobile-project-card__body">
                  <div>
                    <div className="portfolio-card__tags portfolio-card__tags--mobile" aria-label={`${item.title} tags`}>
                      {buildPortfolioCardTags(item).map((tag) => (
                        <span key={`${item.id}-${tag}`} className="portfolio-card__tag">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <h3>{item.title}</h3>
                    <p>{clipText(item.subtitle, 74)}</p>
                  </div>
                  <ArrowUpRightIcon />
                </div>
              </button>
            ))}
          </div>
          {filteredPortfolioItems.length === 0 ? (
            <p className="portfolio-showcase__empty portfolio-showcase__empty--mobile">
              선택한 태그에 해당하는 프로젝트가 없습니다.
            </p>
          ) : null}
        </section>

        <footer
          id="contact"
          className="mobile-footer portfolio-section-scroll"
          data-nav-group="contact"
        >
          <p>© 2026 KIM JAEGWAN PORTFOLIO</p>
        </footer>
      </main>

      <nav className="mobile-bottom-nav" aria-label="Primary">
        <button
          type="button"
          className={activeSection === "home" ? "is-active" : ""}
          onClick={() => onScrollToSection("home")}
        >
          <HomeIcon />
          <span>Home</span>
        </button>
        <button
          type="button"
          className={activeSection === "about" ? "is-active" : ""}
          onClick={() => onScrollToSection("about")}
        >
          <AboutIcon />
          <span>About</span>
        </button>
        <button
          type="button"
          className={activeSection === "experience" ? "is-active" : ""}
          onClick={() => onScrollToSection("experience")}
        >
          <ExperienceIcon />
          <span>Experience</span>
        </button>
        <button
          type="button"
          className={activeSection === "portfolio" ? "is-active" : ""}
          onClick={() => onScrollToSection("portfolio")}
        >
          <FolderIcon />
          <span>Portfolio</span>
        </button>
      </nav>
    </div>
  );
}

export default PortfolioMobile;

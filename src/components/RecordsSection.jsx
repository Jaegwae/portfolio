function RecordsSection({ profileContent, onOpenDocument }) {
  const career = profileContent.career;

  return (
    // 자기소개(긴 본문) 전용 섹션.
    // 구조를 단순하게 유지해 읽기 흐름에 집중하도록 구성했다.
    <section id="records" className="records-section">
      <header className="records-header fx-reveal" style={{ animationDelay: "80ms" }}>
        <h2>
          PROFILE
          <br />
          <span>RECORDS_</span>
        </h2>
      </header>

      <div className="records-grid">
        <article className="records-card records-intro-card fx-reveal" style={{ animationDelay: "150ms" }}>
          {/* 제목/헤드라인/본문은 data/siteData.js에서 관리한다. */}
          <h3>{profileContent.intro.title}</h3>
          <p className="records-intro-headline">{profileContent.intro.headline}</p>
          <div className="records-paragraphs">
            {/* 문단별로 애니메이션 지연값을 다르게 줘서 순차적으로 나타나게 한다. */}
            {profileContent.intro.paragraphs.map((paragraph, index) => (
              <p key={paragraph} style={{ animationDelay: `${220 + index * 70}ms` }}>
                {paragraph}
              </p>
            ))}
          </div>
        </article>

        <article className="records-card records-career-card fx-reveal" style={{ animationDelay: "220ms" }}>
          <div className="career-header">
            <h3>{career.title}</h3>
            <span className="career-emphasis">{career.emphasis}</span>
          </div>

          {career.items.map((item) => (
            <section key={`${item.company}-${item.period}`} className="career-item-block">
              <div className="career-item-top">
                <h4>{item.company}</h4>
                <p>{item.period}</p>
              </div>
              <p className="career-item-meta">
                고용형태: {item.employmentType} · 담당업무: {item.role}
              </p>

              <div className="career-paragraphs">
                {item.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>

              <div className="action-row">
                {item.certificates.map((certificate) => (
                  <button
                    key={certificate.title}
                    className="secondary-btn brutal-btn-light"
                    type="button"
                    onClick={() => onOpenDocument(certificate.title, certificate.path, certificate.type)}
                  >
                    {certificate.label}
                  </button>
                ))}
              </div>
            </section>
          ))}
        </article>
      </div>
    </section>
  );
}

export default RecordsSection;

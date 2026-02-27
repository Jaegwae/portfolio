function RecordsSection({ profileContent }) {
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
      </div>
    </section>
  );
}

export default RecordsSection;

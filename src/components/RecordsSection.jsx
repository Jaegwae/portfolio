function RecordsSection({ profileContent }) {
  return (
    <section id="records" className="records-section">
      <header className="records-header fx-reveal" style={{ animationDelay: "80ms" }}>
        <h2>
          PROFILE
          <br />
          <span>RECORDS_</span>
        </h2>
        <p>자기소개를 본문으로 확인할 수 있습니다.</p>
      </header>

      <div className="records-grid">
        <article className="records-card records-intro-card fx-reveal" style={{ animationDelay: "150ms" }}>
          <h3>{profileContent.intro.title}</h3>
          <p className="records-intro-headline">{profileContent.intro.headline}</p>
          <div className="records-paragraphs">
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

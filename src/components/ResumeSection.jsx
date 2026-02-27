function ResumeSection({ profile, experience, stack, certificates, militaryRecord, onOpenDocument }) {
  const [firstName, ...restNames] = profile.displayName.split(" ");
  const hasRestName = restNames.join(" ").trim().length > 0;
  const formatBirthDateWithAge = (birthDateText) => {
    const matched = birthDateText.match(/^(\d{4})\.(\d{2})\.(\d{2})$/);
    if (!matched) return birthDateText;

    const [, yearText, monthText, dayText] = matched;
    const year = Number(yearText);
    const month = Number(monthText);
    const day = Number(dayText);
    const today = new Date();
    let age = today.getFullYear() - year;
    const birthdayPassed =
      today.getMonth() + 1 > month || (today.getMonth() + 1 === month && today.getDate() >= day);

    if (!birthdayPassed) age -= 1;

    return `${birthDateText} (만 ${age}세)`;
  };

  return (
    <section id="landing" className="resume-shell">
      <div className="resume-layout">
        <aside className="resume-left-pane fx-reveal" style={{ animationDelay: "60ms" }}>
          <div className="portrait-wrap">
            <img src="/assets/profile.jpg" alt="김재관 프로필 사진" />
            <span className="corner corner-top-left" />
            <span className="corner corner-bottom-right" />
          </div>
          <h2 className="resume-name">
            {firstName}
            {hasRestName && (
              <>
                <br />
                <span>{restNames.join(" ")}</span>
              </>
            )}
          </h2>
          <p className="resume-role">// {profile.role}</p>
          <p className="resume-summary">{profile.summary}</p>
          <dl className="resume-meta">
            {profile.details.map((detail) => (
              <div key={detail.label} className="resume-meta-row">
                <dt>{detail.label}</dt>
                <dd>{detail.label === "생년월일" ? formatBirthDateWithAge(detail.value) : detail.value}</dd>
              </div>
            ))}
          </dl>
          <p className="resume-signature">{profile.name} · SEOUL, KR</p>
        </aside>

        <div className="resume-right-pane">
          <article id="education" className="resume-panel fx-reveal" style={{ animationDelay: "120ms" }}>
            <h3 className="resume-panel-title">
              <span className="title-bar" />
              EDUCATION
            </h3>
            <div className="resume-timeline">
              {experience.map((item) => (
                <div key={item.title} className="timeline-item">
                  <span className="timeline-dot" />
                  <div className="timeline-head">
                    <h4>{item.title}</h4>
                  </div>
                  <p className="timeline-role">{item.role}</p>
                  <p className="timeline-period">{item.period}</p>
                  <p className="timeline-summary">{item.summary}</p>
                </div>
              ))}
            </div>
          </article>

          <article id="stack" className="resume-panel fx-reveal" style={{ animationDelay: "180ms" }}>
            <h3 className="resume-panel-title">
              <span className="title-bar" />
              TECH STACK
            </h3>
            <div className="stack-wrap">
              {stack.map((item) => (
                <span key={item.name} className="stack-chip">
                  <i className="stack-dot" style={{ backgroundColor: item.color }} />
                  {item.name}
                </span>
              ))}
            </div>
          </article>

          <article id="certificates" className="resume-panel fx-reveal" style={{ animationDelay: "240ms" }}>
            <h3 className="resume-panel-title">
              <span className="title-bar" />
              CERTIFICATES
            </h3>
            <div className="certificate-grid">
              {certificates.map((certificate, index) => (
                <article
                  key={certificate.name}
                  className="certificate-card fx-reveal"
                  style={{ animationDelay: `${280 + index * 60}ms` }}
                >
                  <p className="certificate-badge">{certificate.badge}</p>
                  <h4>{certificate.name}</h4>
                  {certificate.lines.map((line) => (
                    <p key={`${certificate.name}-${line}`}>{line}</p>
                  ))}
                  <div className="action-row">
                    <button
                      className="secondary-btn brutal-btn-light"
                      type="button"
                      onClick={() => onOpenDocument(certificate.title, certificate.path, certificate.type)}
                    >
                      합격증 보기
                    </button>
                  </div>
                </article>
              ))}
            </div>
            <article className="military-record-wrap" id="military-service">
              <p className="certificate-badge">{militaryRecord.title}</p>
              <h4 className="military-status">{militaryRecord.status}</h4>
              <p className="military-period">복무기간: {militaryRecord.period}</p>
              <ul className="military-note-list">
                {militaryRecord.notes.map((note) => (
                  <li key={note}>{note}</li>
                ))}
              </ul>
              <div className="action-row">
                <button
                  className="secondary-btn brutal-btn-light"
                  type="button"
                  onClick={() =>
                    onOpenDocument(militaryRecord.document.title, militaryRecord.document.path, militaryRecord.document.type)
                  }
                >
                  병적증명서 보기
                </button>
              </div>
            </article>
          </article>
        </div>
      </div>
    </section>
  );
}

export default ResumeSection;

function ResumeSection({ profile, experience, stack, certificates, militaryRecord, onOpenDocument }) {
  // 이름이 2단 이상(영문 이름 등)일 때 줄바꿈 처리를 위한 분리.
  const [firstName, ...restNames] = profile.displayName.split(" ");
  const hasRestName = restNames.join(" ").trim().length > 0;

  // YYYY.MM.DD 형식의 생년월일을 받아 "만 나이"를 계산해 함께 표시한다.
  // 잘못된 포맷은 그대로 반환해 데이터 손상을 방지한다.
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
        {/* 좌측: 프로필 고정 정보 블록 */}
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
            {/* 기본 메타 정보 렌더링: 생년월일만 만 나이 후처리 */}
            {profile.details.map((detail) => (
              <div key={detail.label} className="resume-meta-row">
                <dt>{detail.label}</dt>
                <dd>{detail.label === "생년월일" ? formatBirthDateWithAge(detail.value) : detail.value}</dd>
              </div>
            ))}
          </dl>
          <p className="resume-signature">{profile.name} · SEOUL, KR</p>
        </aside>

        {/* 우측: 학력/스택/자격증 + 병역 블록 */}
        <div className="resume-right-pane">
          <article id="education" className="resume-panel fx-reveal" style={{ animationDelay: "120ms" }}>
            <h3 className="resume-panel-title">
              <span className="title-bar" />
              EDUCATION
            </h3>
            <div className="resume-timeline">
              {/* 학력 타임라인 */}
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
              {/* 기술 스택 배지 */}
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
              {/* 자격증 카드: 문서는 이미지로 모달 열기 */}
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
                      // type을 함께 넘겨서 DocumentModal이 이미지/PDF 모드를 분기한다.
                      onClick={() => onOpenDocument(certificate.title, certificate.path, certificate.type)}
                    >
                      합격증 보기
                    </button>
                  </div>
                </article>
              ))}
            </div>

            {/* 병역 정보는 자격증 아래에 별도 카드로 배치 */}
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

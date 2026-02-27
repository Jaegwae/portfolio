function AppHeader() {
  // 상단 네비게이션 컴포넌트.
  // 현재 App.jsx에서 헤더를 제거한 상태라 기본 렌더에는 포함되지 않는다.
  // 필요 시 App.jsx에 다시 import/렌더링해서 즉시 재사용할 수 있다.
  return (
    <header className="site-header">
      <p className="logo">PORTFOLIO_V2.0</p>
      <nav>
        <a href="#landing">HOME</a>
        <a href="#education">EDUCATION</a>
        <a href="#records">RECORDS</a>
        <a href="#stack">STACK</a>
        <a href="#portfolio-work">WORKS</a>
        <a href="#certificates">CERTIFICATES</a>
      </nav>
    </header>
  );
}

export default AppHeader;

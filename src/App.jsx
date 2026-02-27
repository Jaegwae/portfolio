import { useEffect, useState } from "react";
import DocumentModal from "./components/DocumentModal";
import PortfolioGridSection from "./components/PortfolioGridSection";
import RecordsSection from "./components/RecordsSection";
import ResumeSection from "./components/ResumeSection";
import {
  CERTIFICATES,
  EXPERIENCE,
  MILITARY_RECORD,
  PORTFOLIO_ITEMS,
  PROFILE,
  PROFILE_CONTENT,
  STACK
} from "./data/siteData";

function App() {
  // 문서 모달 상태:
  // - null: 닫힘
  // - 객체: 열림 (title, path, type)
  const [openedDocument, setOpenedDocument] = useState(null);
  const modalOpen = Boolean(openedDocument);

  // 모달이 열리면 배경 스크롤을 잠그고, 닫히면 원복한다.
  // 상세 모달과 문서 모달의 UX 일관성을 위해 body overflow를 직접 제어한다.
  useEffect(() => {
    document.body.style.overflow = modalOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [modalOpen]);

  // ESC 키로 문서 모달을 닫을 수 있도록 전역 키 이벤트를 연결한다.
  // modalOpen이 false일 때는 리스너를 등록하지 않아 불필요한 이벤트를 줄인다.
  useEffect(() => {
    if (!modalOpen) return undefined;

    const handleEscape = (event) => {
      if (event.key !== "Escape") return;
      setOpenedDocument(null);
    };

    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [modalOpen]);

  // 섹션 컴포넌트에서 문서 열기 동작을 공통으로 쓰기 위한 래퍼.
  // type 기본값은 pdf이며, 이미지 문서는 명시적으로 "image"를 넘긴다.
  const openDocument = (title, path, type = "pdf") => setOpenedDocument({ title, path, type });

  return (
    <>
      <main>
        {/* 랜딩(이력/학력/기술스택/자격증/병역) */}
        <ResumeSection
          profile={PROFILE}
          experience={EXPERIENCE}
          stack={STACK}
          certificates={CERTIFICATES}
          militaryRecord={MILITARY_RECORD}
          onOpenDocument={openDocument}
        />
        {/* 자기소개 본문 */}
        <RecordsSection profileContent={PROFILE_CONTENT} />
        {/* 프로젝트 목록 + 상세 케이스 모달 */}
        <PortfolioGridSection items={PORTFOLIO_ITEMS} onOpenDocument={openDocument} />
      </main>

      {/* PDF/이미지 공용 뷰어 모달 */}
      <DocumentModal document={openedDocument} onClose={() => setOpenedDocument(null)} />
    </>
  );
}

export default App;

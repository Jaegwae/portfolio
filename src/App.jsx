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
  const [openedDocument, setOpenedDocument] = useState(null);
  const modalOpen = Boolean(openedDocument);

  useEffect(() => {
    document.body.style.overflow = modalOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [modalOpen]);

  useEffect(() => {
    if (!modalOpen) return undefined;

    const handleEscape = (event) => {
      if (event.key !== "Escape") return;
      setOpenedDocument(null);
    };

    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [modalOpen]);

  const openDocument = (title, path, type = "pdf") => setOpenedDocument({ title, path, type });

  return (
    <>
      <main>
        <ResumeSection
          profile={PROFILE}
          experience={EXPERIENCE}
          stack={STACK}
          certificates={CERTIFICATES}
          militaryRecord={MILITARY_RECORD}
          onOpenDocument={openDocument}
        />
        <RecordsSection profileContent={PROFILE_CONTENT} />
        <PortfolioGridSection items={PORTFOLIO_ITEMS} onOpenDocument={openDocument} />
      </main>

      <DocumentModal document={openedDocument} onClose={() => setOpenedDocument(null)} />
    </>
  );
}

export default App;

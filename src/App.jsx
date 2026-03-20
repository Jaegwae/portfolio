import { useEffect, useMemo, useState } from "react";
import DocumentModal from "./components/DocumentModal";
import PortfolioDesktop from "./components/PortfolioDesktop";
import PortfolioMobile from "./components/PortfolioMobile";
import PortfolioModal from "./components/PortfolioModal";
import {
  CERTIFICATES,
  EXPERIENCE,
  LANGUAGE_CERTIFICATE,
  MILITARY_RECORD,
  PORTFOLIO_ITEMS,
  PROFILE,
  PROFILE_CONTENT,
  STACK,
  TRAINING_CERTIFICATES
} from "./data/siteData";

const MOBILE_BREAKPOINT = 860;
const THEME_STORAGE_KEY = "portfolio-theme";

const getInitialTheme = () => {
  if (typeof window === "undefined") return "light";
  const storedTheme = window.localStorage.getItem(THEME_STORAGE_KEY);
  return storedTheme === "dark" ? "dark" : "light";
};

const getInitialViewportMode = () => {
  if (typeof window === "undefined") return false;
  return window.innerWidth <= MOBILE_BREAKPOINT;
};

const getInternationalAge = (birthDate) => {
  const matched = birthDate.match(/^(\d{4})\.(\d{2})\.(\d{2})$/);
  if (!matched) return null;

  const [, year, month, day] = matched.map(Number);
  const today = new Date();
  let age = today.getFullYear() - year;
  const hasHadBirthday =
    today.getMonth() + 1 > month || (today.getMonth() + 1 === month && today.getDate() >= day);

  if (!hasHadBirthday) {
    age -= 1;
  }

  return age;
};

function App() {
  const [theme, setTheme] = useState(getInitialTheme);
  const [isMobile, setIsMobile] = useState(getInitialViewportMode);
  const [openedDocument, setOpenedDocument] = useState(null);
  const [selectedPortfolioItem, setSelectedPortfolioItem] = useState(null);
  const [activeSection, setActiveSection] = useState("home");

  const modalOpen = Boolean(openedDocument) || Boolean(selectedPortfolioItem);

  const heroDetails = useMemo(
    () =>
      PROFILE.details.map((detail) => {
        if (detail.label !== "생년월일") return detail;

        const age = getInternationalAge(detail.value);
        return {
          ...detail,
          value: age === null ? detail.value : `${detail.value} (만 ${age}세)`
        };
      }),
    []
  );

  useEffect(() => {
    const mediaQuery = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT}px)`);
    const handleChange = (event) => setIsMobile(event.matches);

    setIsMobile(mediaQuery.matches);

    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener("change", handleChange);
      return () => mediaQuery.removeEventListener("change", handleChange);
    }

    mediaQuery.addListener(handleChange);
    return () => mediaQuery.removeListener(handleChange);
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    window.localStorage.setItem(THEME_STORAGE_KEY, theme);
  }, [theme]);

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = modalOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [modalOpen]);

  useEffect(() => {
    if (!modalOpen) return undefined;

    const handleEscape = (event) => {
      if (event.key !== "Escape") return;

      if (openedDocument) {
        setOpenedDocument(null);
        return;
      }

      setSelectedPortfolioItem(null);
    };

    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [modalOpen, openedDocument]);

  useEffect(() => {
    let frameId = null;

    const updateActiveSection = () => {
      frameId = null;

      const sections = Array.from(
        document.querySelectorAll(".portfolio-section-scroll[data-nav-group]")
      );

      if (!sections.length) return;

      const offset = isMobile ? 96 : 108;
      let nextSection = sections[0].dataset.navGroup || "home";

      sections.forEach((section) => {
        const top = section.getBoundingClientRect().top;
        if (top - offset <= 0) {
          nextSection = section.dataset.navGroup || nextSection;
        }
      });

      setActiveSection(nextSection);
    };

    const requestUpdate = () => {
      if (frameId !== null) return;
      frameId = window.requestAnimationFrame(updateActiveSection);
    };

    requestUpdate();

    window.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", requestUpdate);

    return () => {
      if (frameId !== null) {
        window.cancelAnimationFrame(frameId);
      }
      window.removeEventListener("scroll", requestUpdate);
      window.removeEventListener("resize", requestUpdate);
    };
  }, [isMobile]);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (!section) return;

    section.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  };

  const openDocument = (title, path, type = "pdf") => {
    if (type !== "image") {
      window.open(path, "_blank", "noopener,noreferrer");
      return;
    }

    setOpenedDocument({ title, path, type });
  };

  const layoutProps = {
    profile: PROFILE,
    heroDetails,
    intro: PROFILE_CONTENT.intro,
    career: PROFILE_CONTENT.career,
    education: EXPERIENCE,
    stack: STACK,
    certifications: CERTIFICATES,
    languageCertificate: LANGUAGE_CERTIFICATE,
    trainingCertificates: TRAINING_CERTIFICATES,
    militaryRecord: MILITARY_RECORD,
    portfolioItems: PORTFOLIO_ITEMS,
    activeSection,
    onOpenDocument: openDocument,
    onOpenPortfolio: setSelectedPortfolioItem,
    onScrollToSection: scrollToSection
  };

  return (
    <>
      <button
        type="button"
        className="theme-toggle-btn"
        onClick={() => setTheme((currentTheme) => (currentTheme === "dark" ? "light" : "dark"))}
        aria-label={theme === "dark" ? "라이트 모드로 변경" : "다크 모드로 변경"}
      >
        {theme === "dark" ? "LIGHT" : "DARK"}
      </button>

      {isMobile ? <PortfolioMobile {...layoutProps} /> : <PortfolioDesktop {...layoutProps} />}

      <PortfolioModal
        item={selectedPortfolioItem}
        onClose={() => setSelectedPortfolioItem(null)}
        onOpenDocument={openDocument}
      />
      <DocumentModal document={openedDocument} onClose={() => setOpenedDocument(null)} />
    </>
  );
}

export default App;

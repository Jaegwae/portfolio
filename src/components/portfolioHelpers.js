export const getThumbnailPath = (pdfPath) =>
  pdfPath.replace("/items/", "/thumbs/").replace(/\.pdf$/i, ".jpg");

const PORTFOLIO_FILTER_ORDER_COMPACT = ["Service", "AI", "Data", "Community"];

export const buildPortfolioFilters = (portfolioItems = []) =>
  PORTFOLIO_FILTER_ORDER_COMPACT.filter((filter) =>
    portfolioItems.some((item) => item.category === filter)
  );

export const buildPortfolioCardTags = (item) => (item?.tags?.length ? item.tags : [item.category]).filter(Boolean);

const findLineValue = (lines = [], prefix) => {
  const matched = lines.find((line) => line.startsWith(`${prefix} :`));
  if (!matched) return "";

  return matched.split(" : ").slice(1).join(" : ").trim();
};

const stripLinePrefix = (line = "") => {
  const segments = line.split(" : ");
  return segments.length > 1 ? segments.slice(1).join(" : ").trim() : line.trim();
};

const normalizePeriod = (value = "") => value.replace(/\s*~\s*/g, " — ");

const parseDottedDate = (value = "") => {
  const matched = value.match(/^(\d{4})\.(\d{2})\.(\d{2})$/);
  if (!matched) return null;

  const [, year, month, day] = matched;
  return new Date(Number(year), Number(month) - 1, Number(day));
};

const getDateProgress = (startValue = "", endValue = "") => {
  const startDate = parseDottedDate(startValue);
  const endDate = parseDottedDate(endValue);

  if (!startDate || !endDate || endDate <= startDate) return 0;

  const now = new Date();
  const total = endDate.getTime() - startDate.getTime();
  const elapsed = now.getTime() - startDate.getTime();

  return Math.max(0, Math.min(100, Math.round((elapsed / total) * 100)));
};

export const clipText = (value = "", maxLength = 120) => {
  if (value.length <= maxLength) return value;

  const clipped = value.slice(0, maxLength).trim();
  const safeBoundary = clipped.lastIndexOf(" ");

  return `${(safeBoundary > 0 ? clipped.slice(0, safeBoundary) : clipped).trim()}…`;
};

export const buildLanguageRows = (languageCertificate) => {
  const score = Number.parseInt(findLineValue(languageCertificate?.lines, "점수"), 10);
  const grade = findLineValue(languageCertificate?.lines, "등급");
  const testDate = findLineValue(languageCertificate?.lines, "응시일");
  const validityEnd = findLineValue(languageCertificate?.lines, "유효기간");
  const validityRange =
    testDate && validityEnd ? `${testDate} ~ ${validityEnd}` : validityEnd || testDate || "Verified";
  const scoreMeter = Number.isNaN(score) ? 78 : Math.min(90, Math.max(74, Math.round(score / 2)));
  const validityMeter = getDateProgress(testDate, validityEnd);

  return [
    {
      label: "TOEIC Speaking",
      value: "",
      meter: null,
      variant: "heading"
    },
    {
      label: "English",
      value: grade || "Working Proficiency",
      meter: scoreMeter
    },
    {
      label: "유효기간",
      value: validityRange,
      meter: validityRange === "Verified" ? 0 : validityMeter
    }
  ];
};

export const buildExperienceRows = (career) => {
  const rows = [];
  const careerItem = career?.items?.[0];

  if (careerItem) {
    rows.push({
      period: normalizePeriod(careerItem.period),
      title: careerItem.company,
      subtitle: careerItem.role,
      descriptions: (careerItem.paragraphs || []).filter(Boolean),
      badge: careerItem.employmentType || "Experience"
    });
  }

  return rows;
};

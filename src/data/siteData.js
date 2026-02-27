// ===== Profile 영역 =====
// ResumeSection 좌측 프로필 카드에서 사용하는 기본 개인 정보.
export const PROFILE = {
  name: "김재관",
  displayName: "김재관",
  role: "PRODUCT-MINDED PROBLEM SOLVER",
  summary:
    "현장의 비효율을 구조화하고 데이터 기반 자동화로 실제 운영 성과를 만드는 기획자입니다. 운영 개선부터 AI 모델 서비스화까지 직접 설계하고 구현해 사용자 가치로 연결해왔습니다.",
  details: [
    { label: "생년월일", value: "2000.03.30" },
    { label: "이메일", value: "kimjk4031@naver.com" },
    { label: "연락처", value: "010-9127-4031" }
  ]
};

// ===== 자기소개 본문 =====
// RecordsSection에서 "PROFILE RECORDS_" 카드의 본문으로 렌더링된다.
export const PROFILE_CONTENT = {
  intro: {
    title: "자기소개",
    headline: "‘도전하고 후회하자.’",
    paragraphs: [
      "저는 하지 않아서 생기는 후회보다, 도전하고 배우는 과정에서의 깨달음이 더 가치 있다고 믿습니다.",
      "디지털 기술에 친숙한 사람으로서 저는 이 기술을 단순한 정확도 향상 도구가 아니라, '이 기술로 누군가의 문제를 풀 수 있을까'라는 질문과 결합하며 의미를 찾아왔습니다. 새로운 기술을 직접 사용해보고 실생활에 적용하여 그 과정의 오류와 데이터로 본질을 이해하는 방식을 고수해왔습니다.",
      "이 태도를 통해 성공했던 도전 중 하나인 ‘데이터 크리에이터 캠프’가 있습니다. 저와 팀원들은 머신러닝과 딥러닝에 깊은 이해를 갖고 있지 않았지만 ‘부딪혀보자’는 의지 하나로 도전했습니다. 타 지역에 거주하는 팀원들과 오프라인으로 만나 스터디를 하고, YOLO라는 Computer Vision모델을 처음으로 활용해보며 데이터 증강 기법과 모델의 파인 튜닝 하는 법을 공부하고, 팀원들과 함께 협업하여 결과물을 만들어냈던 경험이 생겼습니다. 비록 수상을 하진 못했지만 이를 통해 모델을 튜닝하는 방법과 공부하는 방법, LLM을 활용하는 방법을 배울 수 있었고 두려움 없이 도전할 수 있는 기초 발판을 마련할 수 있는 성공적인 도전이 되었습니다.",
      "인공지능에 대해 조금 더 깊이 알아갈수록 이 혁신적인 기술을 통해 할 수 있는 것들을 떠올렸고, 그 중 하나가 NLP 모델을 통해 문장 속 사람의 감정을 분석하는 모델을 개발해 알맞은 음악을 추천해주는 서비스를 개발해 보는 것이었습니다.",
      "4학년 마지막 학기 때, 캡스톤 디자인 프로젝트를 통해 이를 실현할 수 있었고 실제로 모델을 서빙하여 서비스를 만들어냈습니다.",
      "이 모든 경험을 토대로 이제는 기술 구현에 머무르지 않고 ‘모델-플랫폼-사용자’의 흐름 속에서 사용자가 필요로 하는 것을 설계하고 분석하여 가치를 검증하고 ‘사람에게 필요한 가치’를 전달하는 사람이 되고자 합니다."
    ]
  }
};

// ===== 병역 정보 =====
// ResumeSection의 CERTIFICATES 하단 카드에서 표시된다.
// document.type을 image로 지정하여 이미지 모달로만 열리게 구성.
export const MILITARY_RECORD = {
  title: "병역",
  status: "공군 병장 만기제대",
  period: "2020.10.12 ~ 2022.07.11",
  notes: [],
  document: {
    title: "병적증명서",
    path: "/assets/records/military-service-certificate.jpg",
    type: "image"
  }
};

// ===== 학력 =====
// EDUCATION 타임라인 순서대로 렌더링된다.
export const EXPERIENCE = [
  {
    title: "국립공주대학교",
    period: "2019.03 — 2026.02",
    role: "소프트웨어(주간) · 공학계열(컴퓨터·통신)",
    summary: "학사 · 졸업"
  },
  {
    title: "한세사이버보안고등학교",
    period: "2016.03 — 2019.02",
    role: "특성화/마이스터고",
    summary: "졸업"
  }
];

// ===== 기술 스택 =====
// color 값은 스택 점(dot) 색상으로 사용된다.
export const STACK = [
  { name: "Python", color: "#fbbf24" },
  { name: "React", color: "#60a5fa" },
  { name: "Google Spreadsheet", color: "#22c55e" },
  { name: "Apps Script", color: "#f97316" },
  { name: "KLUE-RoBERTa", color: "#a78bfa" },
  { name: "YOLOv11x", color: "#fb7185" },
  { name: "ResNet-50", color: "#14b8a6" },
  { name: "Docker", color: "#38bdf8" },
  { name: "AWS EC2", color: "#f59e0b" }
];

// ===== 자격증 =====
// type을 image로 통일해서 "합격증 보기"를 이미지 모달로 열도록 설정.
export const CERTIFICATES = [
  {
    badge: "국가기술자격",
    name: "정보처리기사",
    lines: ["등록번호: 25202070789B", "합격일: 2025.09.12", "발급기관: 한국산업인력공단"],
    title: "정보처리기사 합격 확인증",
    path: "/assets/certificates/images/engineer-information-processing.jpg",
    type: "image"
  },
  {
    badge: "국가공인",
    name: "리눅스마스터 2급",
    lines: ["자격번호: LMS-2502-002509", "합격일: 2025.07.04", "발급기관: 한국정보통신진흥협회"],
    title: "리눅스마스터2급 합격증명서",
    path: "/assets/certificates/images/linux-master-level-2.jpg",
    type: "image"
  },
  {
    badge: "국가공인",
    name: "SQLD (SQL 개발자)",
    lines: ["자격번호: SQLD-057006438", "합격일: 2025.06.27", "발급기관: 한국데이터산업진흥원"],
    title: "SQLD 합격확인증",
    path: "/assets/certificates/images/sqld-pass.jpg",
    type: "image"
  }
];

// ===== 포트폴리오 프로젝트 =====
// - pdfPath: "PDF 보기 / 다운로드"에서 사용
// - completionCertificate: 특정 프로젝트에서만 추가 증빙(수료증) 버튼 노출
export const PORTFOLIO_ITEMS = [
  {
    id: "plimo",
    title: "Plimo",
    subtitle: "AI 감정분석 기반 음악 추천 서비스",
    category: "AI",
    tags: ["NLP", "Recommendation", "Web"],
    year: "2025",
    pdfPath: "/assets/portfolio/items/plimo.pdf",
    challenge:
      "사용자의 감정 상태를 텍스트에서 정밀하게 파악하고, 실시간에 가까운 응답 속도로 개인화된 음악 추천을 제공해야 했습니다.",
    solution:
      "KLUE-RoBERTa 기반 감정분류 모델을 고도화하고 자체 음악 DB를 구축해 추천 파이프라인을 안정화했습니다. EC2 GPU 환경으로 성능 병목을 개선했습니다."
  },
  {
    id: "height-prediction-model",
    title: "높이 예측 모델",
    subtitle: "위성 이미지 기반 굴뚝 탐지/높이 추정",
    category: "AI",
    tags: ["YOLOv11x", "ResNet-50", "CV"],
    year: "2025",
    pdfPath: "/assets/portfolio/items/height-prediction-model.pdf",
    completionCertificate: {
      title: "2025 데이터 크리에이터 캠프 수료증",
      path: "/assets/portfolio/certificates/height-prediction-camp-certificate.jpg",
      type: "image"
    },
    challenge:
      "대기오염 배출원 모니터링에서 수작업 식별의 한계를 줄이고, 탐지부터 높이 추정까지 자동화된 분석 흐름이 필요했습니다.",
    solution:
      "탐지 모델과 회귀 모델을 결합한 2단계 아키텍처를 설계하여 고정밀 탐지와 높이 추정을 구현했습니다."
  },
  {
    id: "guro-fusion-center",
    title: "구로창의융합교육장",
    subtitle: "운영 및 서비스 개선 프로젝트",
    category: "Service",
    tags: ["Operations", "Automation", "UX"],
    year: "2024",
    pdfPath: "/assets/portfolio/items/guro-fusion-center.pdf",
    challenge:
      "현장 운영 과정의 반복 업무와 정보 비대칭으로 인해 대응 속도와 운영 안정성이 떨어지는 문제가 있었습니다.",
    solution:
      "업무 흐름을 재정의하고 자동화 가능한 단계로 구조화해 운영 효율과 관리 편의성을 개선했습니다."
  },
  {
    id: "seoul-futurelab",
    title: "서울 퓨처랩",
    subtitle: "현장 운영 자동화 및 데이터 관리",
    category: "Service",
    tags: ["Spreadsheet", "Apps Script", "Python"],
    year: "2023",
    pdfPath: "/assets/portfolio/items/seoul-futurelab.pdf",
    challenge:
      "교구/기자재 관리와 출석 확인이 수작업 중심으로 운영되어 누락, 지연, 반복 공수가 누적되는 상황이었습니다.",
    solution:
      "폼+시트 기반 데이터 관리 체계와 자동화 스크립트를 구축해 운영팀의 반복 업무를 줄이고 실시간 가시성을 확보했습니다."
  },
  {
    id: "music-market-analysis",
    title: "음반 시장 수요공급 분석",
    subtitle: "시장 진입 전략을 위한 데이터 분석",
    category: "Data",
    tags: ["Data Analysis", "Market", "Strategy"],
    year: "2024",
    pdfPath: "/assets/portfolio/items/music-market-analysis.pdf",
    challenge:
      "시장 진입 시점과 포지셔닝을 결정하기 위해 수요·공급 구조를 정량적으로 해석할 수 있는 분석 프레임이 필요했습니다.",
    solution:
      "시장 데이터 지표를 정리하고 시각화 기반 인사이트를 도출해 진입 관점의 의사결정 근거를 제시했습니다."
  },
  {
    id: "highton",
    title: "하이톤",
    subtitle: "고등학생 해커톤 운영 경험",
    category: "Community",
    tags: ["Hackathon", "Leadership", "Planning"],
    year: "2017-2019",
    pdfPath: "/assets/portfolio/items/highton.pdf",
    challenge:
      "고등학생 중심 해커톤을 지속적으로 운영하기 위해 후원, 장소, 운영 구조를 안정화해야 했습니다.",
    solution:
      "운영 프로세스를 체계화하고 회차별 개선을 반복해 행사 지속성과 참여 경험을 강화했습니다."
  },
  {
    id: "ai-collector-review-system",
    title: "AI+지역전문가 콜렉터블 검수",
    subtitle: "하이브리드 검수 워크플로우 설계",
    category: "AI",
    tags: ["AI Workflow", "Quality", "Platform"],
    year: "2025",
    pdfPath: "/assets/portfolio/items/ai-collector-review-system.pdf",
    challenge:
      "검수 속도와 품질을 동시에 확보하기 위해 AI 자동 판단과 전문가 검수의 역할 분리가 필요했습니다.",
    solution:
      "AI 1차 분류와 전문가 2차 검수를 결합한 하이브리드 파이프라인을 설계해 정확도와 처리 효율을 함께 개선했습니다."
  }
];

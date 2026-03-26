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
    headline: "‘통제 가능한 인공지능’",
    paragraphs: [
      "하루가 멀다 하고 새로운 AI 기술이 등장하고 있습니다.",
      "저는 AI 기술을 통해 지금 우리가 가장 크게 얻을 수 있는 것은 ‘빠르게 실패해볼 수 있는 환경’이라고 생각합니다. 과거에는 아이디어가 있어도 실제로 검증하기까지 많은 시간과 비용이 들었지만, 이제는 AI를 활용해 더 짧은 시간 안에 가설을 세우고 시도해보며 방향을 조정할 수 있게 되었습니다.",
      "그래서 저는 AI가 제 일하는 방식에도 큰 영향을 주었다고 생각합니다. 정답을 오래 고민하기보다, 먼저 작게 만들어보고 빠르게 확인한 뒤 더 나은 방향으로 개선하는 방식으로 문제를 풀게 되었습니다. 저는 PoC도 같은 맥락이라고 생각합니다. PoC는 정답을 한 번에 맞히는 과정이 아니라, 작은 실패를 반복하며 우리의 가설이 맞는지 검증하고 더 나은 답을 찾아가는 과정입니다.",
      "특히 최근에는 코딩 에이전트처럼 반복 작업과 실행 속도를 높여주는 도구들이 빠르게 확산되고 있고, 같은 도구라도 목표를 나누고 검수 기준을 어떻게 세우느냐에 따라 결과가 달라진다고 생각합니다. 그래서 중요한 것은 최신 기술을 그대로 들여오는 것이 아니라, 우리 조직의 방식과 서비스 문맥에 맞게 조정하고 실제 일하는 흐름에 연결하는 일이라고 봅니다.",
      "조직의 서비스에서도 AI는 이런 방식으로 적용될 수 있다고 생각합니다. 예를 들어 유저 리뷰와 VOC를 AI로 분류해 핵심 이슈를 빠르게 파악하고, 운영 문구나 실험안 초안을 만들어 여러 가설을 애자일하게 검증할 수 있습니다. 또 반복적인 조사와 문서 정리를 줄여 구성원이 더 중요한 판단과 협업에 집중하게 만들 수도 있습니다.",
      "중요한 것은 AI를 도입하는 것 자체가 아니라, 이를 통해 더 자주 실험하고 더 빨리 배우며 실제 사용자 반응과 운영 효율의 변화를 만들어내는 것이라고 생각합니다. 저는 AI를 사람을 대체하는 도구가 아니라, 구성원 각자의 실행력을 높이고 조직이 더 빠르게 정답에 가까워지도록 돕는 도구로 만들겠습니다."
    ]
  },
  career: {
    title: "경력",
    emphasis: "아르바이트",
    items: [
      {
        company: "서울 퓨처랩",
        period: "2023.04 ~ 2025.12",
        employmentType: "아르바이트",
        role: "교구·기자재 관리 / 운영 지원 / 사무 보조",
        paragraphs: [
          "저는 체험관에서 교구 및 기자재 관리, 운영 지원, 사무 보조 업무를 담당했습니다.",
          "체험관 특성상 다양한 교구와 기기를 A/S, 대여, 파손 등의 이유로 외부에서 자주 사용해 체계적인 관리가 중요했습니다. 기존에는 사무실에서 이를 관리할 데이터베이스가 없어, IT 지식이 부족한 팀원도 쉽게 수정·활용할 수 있도록 스프레드시트, 구글 폼, Apps Script 자동화를 결합한 관리 시스템을 구축했습니다.",
          "또한 공공기관 특성상 체험 신청은 ‘서울시 공공예약’ 사이트를 통해 진행되었는데, 다운로드한 엑셀 파일에 불필요한 데이터가 포함되어 운영팀이 수작업으로 정리해야 했습니다. 이를 개선하기 위해 엑셀 입력 시 불필요 데이터를 자동 삭제하고 잘못 입력된 데이터를 자동 수정하는 Python 코드를 작성해 업무 효율을 높였습니다.",
          "마지막으로 시스템 정착 전에는 출력 출석부를 사용해 신규 접수 정보가 즉시 반영되지 않는 문제가 있었습니다. 각 체험관 앞에 스프레드시트 기반 출석부를 마련해 실시간으로 출석 현황을 확인할 수 있도록 개선했습니다.",
          "현재까지 제가 개발·구현한 기능들은 실제 현장에서 사용 중이며, 교구·기자재 관리, 체험신청 데이터 처리, 출석부 관리 등 업무 효율을 크게 향상시켰습니다."
        ],
        certificates: [
          {
            label: "TMD 경력증명서 보기",
            title: "TMD 경력증명서",
            path: "/assets/records/certificates/tmd-career-certificate.jpg",
            type: "image"
          },
          {
            label: "NEXTEDU 경력증명서 보기",
            title: "NEXTEDU 경력증명서",
            path: "/assets/records/certificates/nextedu-career-certificate.jpg",
            type: "image"
          }
        ]
      }
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
    role: "해킹보안과 · 특성화/마이스터고",
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
    lines: ["등록번호 : 25202070789B", "합격일 : 2025.09.12", "발급기관 : 한국산업인력공단"],
    title: "정보처리기사 합격 확인증",
    path: "/assets/certificates/images/engineer-information-processing.jpg",
    type: "image"
  },
  {
    badge: "국가공인",
    name: "리눅스마스터 2급",
    lines: ["자격번호 : LMS-2502-002509", "합격일 : 2025.07.04", "발급기관 : 한국정보통신진흥협회"],
    title: "리눅스마스터2급 합격증명서",
    path: "/assets/certificates/images/linux-master-level-2.jpg",
    type: "image"
  },
  {
    badge: "국가공인",
    name: "SQLD (SQL 개발자)",
    lines: ["자격번호 : SQLD-057006438", "합격일 : 2025.06.27", "발급기관 : 한국데이터산업진흥원"],
    title: "SQLD 합격확인증",
    path: "/assets/certificates/images/sqld-pass.jpg",
    type: "image"
  }
];

// ===== 어학 성적 =====
// 자격증 아래 단독 와이드 카드로 노출된다.
export const LANGUAGE_CERTIFICATE = {
  badge: "어학",
  name: "TOEIC Speaking",
  lines: ["점수 : 140", "등급 : Intermediate High (IH)", "응시일 : 2026.03.14", "유효기간 : 2028.03.14"],
  title: "TOEIC Speaking 성적표",
  path: "/assets/language/toeic-speaking-ih.jpg",
  type: "image"
};

// ===== 교육/수료 =====
// CERTIFICATES 아래 별도 섹션에서 수료 이력을 보여준다.
// 수료증은 이미지 모달로 열리도록 type을 image로 통일한다.
export const TRAINING_CERTIFICATES = [
  {
    badge: "교육수료",
    name: "2025 데이터 크리에이터 캠프",
    lines: ["주관 : 한국지능정보사회진흥원", "기간 : 2025.08.13 ~ 2025.09.26"],
    activities: [
      "위성 이미지 기반 굴뚝 탐지와 높이 추정 문제를 팀 프로젝트로 수행했습니다.",
      "데이터 전처리부터 모델 실험, 결과 정리와 발표까지 이어지는 전체 분석 흐름을 경험했습니다."
    ],
    title: "2025 데이터 크리에이터 캠프 수료증",
    path: "/assets/portfolio/certificates/height-prediction-camp-certificate.jpg",
    type: "image"
  },
  {
    badge: "교육수료",
    name: "LG AImers 8기",
    lines: ["주관 : LG AI연구원", "기간 : 2026.01.02 ~ 2026.02.26"],
    activities: [
      "LG EXAONE 모델에 4비트 양자화를 적용해 LLM 경량화를 수행한 실습 과제를 진행했습니다.",
      "성능과 자원 사용량을 함께 고려하며 모델 최적화 과정을 직접 경험했습니다."
    ],
    title: "LG AImers 8기 수료증",
    path: "/assets/education/certificates/lg-aimers-8-completion.jpg",
    type: "image"
  }
];

// ===== 포트폴리오 프로젝트 =====
// - pdfPath: "PDF 보기 / 다운로드"에서 사용
// - completionCertificate: 특정 프로젝트에서만 추가 증빙(수료증) 버튼 노출
export const PORTFOLIO_ITEMS = [
  {
    id: "mentos",
    title: "멘토스",
    subtitle: "멘토 커뮤니티 웹사이트 · 서비스 기획 & 바이브 코딩 프로젝트",
    category: "Service",
    tags: ["Community", "Planning", "Web"],
    year: "2026",
    pdfPath: "/assets/portfolio/items/mentos.pdf",
    githubUrl: "https://github.com/Jaegwae/mentor-forum/tree/main/mentor-forum-react",
    challenge:
      "멘토와 참여자 간 상호작용이 흩어지지 않도록, 커뮤니티 경험과 운영 흐름을 하나의 웹 서비스 안에서 설계해야 했습니다.",
    solution:
      "서비스 기획 단계에서 핵심 사용자 시나리오를 먼저 정의하고, 바이브 코딩 방식으로 주요 기능을 빠르게 구현하며 화면/기능을 반복 개선했습니다."
  },
  {
    id: "plimo",
    title: "Plimo",
    subtitle: "AI 감정분석 기반 음악 추천 서비스",
    category: "AI",
    tags: ["NLP", "Recommendation", "Web"],
    year: "2025",
    pdfPath: "/assets/portfolio/items/plimo.pdf",
    githubUrl: "https://github.com/Jaegwae/Plimo",
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
    githubUrl: "https://github.com/Jaegwae/mentor-forum",
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

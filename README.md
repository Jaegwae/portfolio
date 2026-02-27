# 김재관 포트폴리오 웹사이트

React + Vite 기반 개인 포트폴리오 사이트입니다.  
랜딩 페이지에 이력 핵심 정보, 자기소개, 프로젝트 포트폴리오를 순서대로 배치했고, PDF/증빙 문서를 모달로 확인할 수 있도록 구성했습니다.

## 1. 주요 기능

- 이력 섹션(프로필, 학력, 기술스택, 자격증, 병역)
- 자기소개 본문 섹션
- 포트폴리오 그리드 + 카테고리 필터
- 프로젝트 상세 케이스 모달
- PDF 문서 보기/다운로드
- 자격증/수료증/병적증명서 이미지 모달 보기

## 2. 기술 스택

- React 18
- Vite 5
- 순수 CSS (CSS-in-JS 미사용)

## 3. 프로젝트 구조

```text
Portfolio/
├─ public/
│  └─ assets/
│     ├─ profile.jpg
│     ├─ resume.pdf
│     ├─ certificates/
│     ├─ portfolio/
│     │  ├─ items/       # 포트폴리오 원문 PDF
│     │  ├─ thumbs/      # 카드/상세에서 쓰는 썸네일(1페이지 이미지)
│     │  └─ certificates/# 프로젝트 수료증 이미지
│     └─ records/
├─ src/
│  ├─ components/
│  ├─ data/
│  │  └─ siteData.js     # 텍스트/문서 경로/프로젝트 메타 데이터
│  ├─ App.jsx
│  ├─ main.jsx
│  └─ styles.css
├─ index.html
├─ package.json
└─ vite.config.js
```

## 4. 로컬 실행

```bash
npm install
npm run dev
```

- 기본 접속: `http://127.0.0.1:5173`

프로덕션 빌드:

```bash
npm run build
npm run preview
```

## 5. 데이터 수정 방법

대부분의 텍스트/문서 연결은 `src/data/siteData.js`에서 관리합니다.

- 프로필: `PROFILE`
- 자기소개: `PROFILE_CONTENT`
- 병역: `MILITARY_RECORD`
- 학력: `EXPERIENCE`
- 기술스택: `STACK`
- 자격증: `CERTIFICATES`
- 프로젝트: `PORTFOLIO_ITEMS`

### 5-1. 자격증 문서를 이미지로 열기

`CERTIFICATES` 각 항목에 아래 필드를 사용합니다.

```js
{
  title: "문서 제목",
  path: "/assets/certificates/images/....jpg",
  type: "image"
}
```

### 5-2. 특정 프로젝트에 수료증 버튼 추가

`PORTFOLIO_ITEMS`의 해당 프로젝트 객체에 `completionCertificate`를 추가하면 상세 모달에 `수료증 보기` 버튼이 나타납니다.

```js
completionCertificate: {
  title: "수료증 제목",
  path: "/assets/portfolio/certificates/....jpg",
  type: "image"
}
```

## 6. 문서 모달 동작

- 공통 모달 컴포넌트: `src/components/DocumentModal.jsx`
- `type === "image"`: 이미지로 렌더링
- 기본값(`pdf`): iframe으로 PDF 렌더링

참고:
- 이미지 문서는 우클릭/드래그를 제한해 다운로드 노출을 최소화했습니다.
- 브라우저 정책상 완전한 다운로드 차단은 불가능합니다.

## 7. GitHub 업로드

이미 로컬 커밋이 되어 있다면 아래 2줄로 업로드할 수 있습니다.

```bash
git remote add origin https://github.com/<your-id>/<repo>.git
git push -u origin main
```

이미 origin이 있다면:

```bash
git remote set-url origin https://github.com/<your-id>/<repo>.git
git push -u origin main
```

## 8. Firebase Hosting 배포 (무료 Spark 기준)

이 프로젝트는 정적 사이트라 Firebase Hosting에 바로 배포 가능합니다.

현재 배포 주소:
- [https://portfolio-a9b1d.web.app](https://portfolio-a9b1d.web.app)

1) Firebase CLI 설치
```bash
npm install -g firebase-tools
```

2) 로그인
```bash
firebase login
```

3) 프로젝트 초기화
```bash
firebase init hosting
```

권장 선택:
- `Use an existing project`: 생성해둔 Firebase 프로젝트 선택
- `public directory`: `dist`
- `single-page app`: `Yes`
- `set up automatic builds/deploys`: 필요 없으면 `No`

4) 빌드 후 배포
```bash
npm run build
firebase deploy
```

배포 완료 후 발급된 Hosting URL로 접속하면 됩니다.

## 9. 운영 시 주의사항

- 포트폴리오 PDF 파일 용량이 커서 저장소가 빠르게 커질 수 있습니다.
- 필요하면 PDF 압축본/웹용 버전으로 교체해 로딩 속도를 개선하세요.
- 썸네일은 가급적 동일 해상도/비율(16:9)로 맞추면 카드 레이아웃이 안정적입니다.

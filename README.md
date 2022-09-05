# 퀴즈 웹앱

[결과물을 실행해 볼수 있는 URL](https://classting-assignment-delta.vercel.app/)

---

## 프로젝트 실행 방법

1. git clone

```bash
git clone https://github.com/KKingmo/classting-assignment.git
```

2. install

```bash
yarn install
```

3. build

```bash
yarn build
```

4. start

```bash
yarn start
```

5. test

```bash
yarn test
```

---

## 기술스택 및 라이브러리

- React.js
- Next.js
- TypeScript
- Recoil
- Emotion
- Victory
- axios
- cypress
- Vercel

---

## 구현사항

- [x] 사용자는 '퀴즈 풀기' 버튼을 클릭하여 퀴즈 풀기를 시작할 수 있다.
- [x] 사용자는 문항에 대한 답안을 4개 보기 중에 선택할 수 있다.
- [x] 사용자는 답안을 선택하면 다음 문항을 볼 수 있다.
  - [x] 답안 선택 후 다음 문항 버튼을 볼 수 있다.
  - [x] 답안이 맞았는지 틀렸는지 바로 알 수 있다.
  - [x] 다음 문항 버튼을 클릭하여 다음 문항으로 이동할 수 있다.
- [x] 모든 문항을 다 풀면 사용자는 다음과 같은 결과 정보를 볼 수 있다.
  - [x] 퀴즈를 마칠 때까지 소요된 시간
  - [x] 정답 개수
  - [x] 오답 수
- [x] 정 오답에 대한 비율을 차트로 표기
- [x] 다시 풀기
- [x] 오답 노트
- [x] 테스트 작성
- [x] Vercel 배포

---

## 테스트작성 - cypress

```bash
yarn test
```

---

## 폴더 구조

```bash
.
├── 📂cypress
│   └── 📂e2e
│       └── 📜spec.cy.ts  // 테스트 코드
├── 📂pages
│   ├── 📂note            // 오답 노트 페이지
│   ├── 📂quiz            // 퀴즈 풀기 페이지
│   └── 📂result          // 퀴즈 결과 페이지
├── 📂src
│   ├── 📂commons
│   │   ├── 📂buttons     // 버튼 공통 컴포넌트
│   │   ├── 📂formRadio   // 라디오 공통 컴포넌트
│   │   ├── 📂hooks       // 커스텀 훅
│   │   ├── 📂layout      // 레이아웃 UI
│   │   ├── 📂libraries   // 유틸 함수들
│   │   ├── 📂quizOption  // 퀴즈 카테고리, 난이도 데이터
│   │   └── 📂store       // recoil state 함수
│   └── 📂units
│       ├── 📂QuizHeader  // 퀴즈 풀기 페이지 헤더 컴포넌트
│       ├── 📂QuizNote    // 오답 노트 컴포넌트
│       ├── 📂QuizOption  // 퀴즈 카테고리, 난이도 설정 컴포넌트
│       ├── 📂QuizResult  // 퀴즈 결과 페이지 컴포넌트
│       ├── 📂QuizStart   // 퀴즈 풀기 페이지 퀴즈 컴포넌트
│       └── 📂QuizTimer   // 퀴즈 타이머 컴포넌트
└── 📂styles
        ├── 📜globalStyles.ts  // 전역 스타일
        └── 📜media.ts    // 미디어 쿼리 tablet, mobile size 데이터
```

---

## Screen Preview

- index 페이지
  <img src="./readme_assets/index.gif" alt="index 페이지"/>

- 퀴즈 풀기 페이지, 퀴즈 결과 페이지
  <img src="./readme_assets/퀴즈풀기및결과.gif" alt="퀴즈풀기 및 결과 페이지"/>

- 오답노트 페이지
  <img src="./readme_assets/오답노트.gif" alt="오답노트 페이지"/>

![apple-icon-60x60](https://github.com/FC-TOY-10/ddock-ple/assets/108085046/3f3cd6bd-0e1a-4a18-9e72-4498b86ebc1a)

# 똑플

### 🔗 배포주소

[똑플](https://naver.com)

### 📄 프로젝트 소개

가계부 API를 이용하여 소비 기록과 소비 습관을 기를 수 있는 가계부 만들기  
똑플 : 똑똑한 소비 플랜

### 🗓 프로젝트 기간

2023.07.05 ~ 2023.07.23

### 📌 프로젝트 기능

#### 로그인 페이지

#### 메인 페이지

#### 월간 페이지

#### 주간 페이지

#### 통계 페이지

- 주간 통계, 월간 통계 탭 구분 기능
- 주간 수입, 지출 데이터 차트 표현
  - 주간 수입, 지출 데이터 라인 차트 연동
  - 카테고리 별 지출 횟수 데이터 도넛 차트 연동
  - 지난주 총 금액 데이터 비교
- 월간 수입, 지출 데이터 차트 표현
  - 월간 자산 분석 데이터 파이 차트 연동
  - 월간 지출 TOP 3 카테고리 데이터 막대 그래프 연동
  - 월간 카테고리 별 지출 분석 레이더 차트 연동

#### 검색 페이지

- 검색 기간 필터링 기능
  - DatePicker 연동
- 검색 카테고리 필터링 기능
- 검색 결과 목록 노출 및 총 지출 금액 노출

### ⚒️ 기술 스택

<div style="display: flex; gap: 4px">
<img src="https://img.shields.io/badge/React-61DAFB?style=flat&logo=React&logoColor=white"/>
<img src="https://img.shields.io/badge/Typescript-3178C6?style=flat&logo=typescript&logoColor=white"/>
<img src="https://img.shields.io/badge/VITE-646CFF?style=flat&logo=vite&logoColor=white"/>
<img src="https://img.shields.io/badge/StyledComponents-DB7093?style=flat&logo=styledcomponents&logoColor=white"/>
<img src="https://img.shields.io/badge/Axios-5A29E4?style=flat&logo=axios&logoColor=white"/>
<img src="https://img.shields.io/badge/Chart.js-FF6384?style=flat&logo=chartdotjs&logoColor=white"/>
<img src="https://img.shields.io/badge/Firebase-FFCA28?style=flat&logo=firebase&logoColor=white"/>
<img src="https://img.shields.io/badge/Zustand-133011?style=flat&logo=&logoColor=white"/>
</div>

### 👩🏻‍💻🧑🏻‍💻 개발팀 소개

|                **[이은비](https://github.com/)**                 |        **[김하은](https://github.com/)**         |               **[황인승](https://github.com/)**                |
| :--------------------------------------------------------------: | :----------------------------------------------: | :------------------------------------------------------------: |
| 프로젝트 팀장,<br> Github 관리, <br>통계 페이지,<br> 검색 페이지 | 월간 페이지,<br>캘린더 구현,<br>소비 등록 페이지 | 로그인, 로그아웃,<br>회원가입,<br>메인 페이지,<br> 주간 페이지 |

### 📂 폴더구조

```
📦src
 ┣ 📂apis
 ┣ 📂components
 ┃ ┣ 📂chart
 ┃ ┣ 📂common
 ┃ ┣ 📂home
 ┃ ┣ 📂login
 ┃ ┣ 📂monthly
 ┃ ┣ 📂search
 ┃ ┗ 📂weekly
 ┣ 📂constants
 ┣ 📂pages
 ┣ 📂types
 ┣ 📂utils
 ┣ 📜GlobalStyle.tsx
 ┣ 📜firebase.ts
 ┣ 📜main.tsx
 ┣ 📜store.ts
 ┗ 📜vite-env.d.ts
```

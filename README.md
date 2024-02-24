![KakaoTalk_20240224_145449226](https://github.com/Wiz-trip/Wiz-trip-Front/assets/86836540/1d806527-0847-4754-8df6-e5eb4b380022)![](https://github.com/Wiz-trip/Wiz-trip-Front/assets/86836540/e2a43f95-ad0a-4ca6-a90f-7e830a2d3f0b)
## ✨ 프로젝트 소개 
친구, 가족들과 함께 여행계획을 작성하고 정보를 공유하는 웹서비스 
  
<br/>

## 📆 개발 기간
* 1차 배포 : 23.11.18 ~ 24.1.27

* 배포 주소 ➡ https://wiz-trip.netlify.app/ 
  
<br/>


## 🎬구동 영상
|회원가입,로그인|리뷰작성 및 회원정보 수정|
|---|---|
|![GIFMaker_me (1)](https://github.com/Wiz-trip/Wiz-trip-Front/assets/86836540/349c93c4-7ee6-4147-91c7-dcabc4bb0180)|![GIFMaker_me](https://github.com/Wiz-trip/Wiz-trip-Front/assets/86836540/9809a607-b43f-402a-a7b8-8c72d3773187)|

<br/>




## 📚 기술 스택
<div align="center">
<img src="https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white">
<img src="https://img.shields.io/badge/html-E34F26?style=for-the-badge&logo=html5&logoColor=white">
<img src="https://img.shields.io/badge/css3-1572B6?style=for-the-badge&logo=Css3&logoColor=white">
<img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=React&logoColor=white">
<img src="https://img.shields.io/badge/styled components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white">
<img src="https://img.shields.io/badge/react query-FF4154?style=for-the-badge&logo=react-query&logoColor=white">
<img src="https://img.shields.io/badge/redux-764ABC?style=for-the-badge&logo=redux&logoColor=white">
</div>
  
<br/>

## 🖥 화면 구성
|로그인페이지|회원가입페이지|
|------|---|
|![image](https://github.com/Wiz-trip/Wiz-trip-Front/assets/86836540/4bf24476-2df3-489b-b34e-fde65929120c)|![image](https://github.com/Wiz-trip/Wiz-trip-Front/assets/86836540/e7365db7-863a-47e4-a094-0d6ff6735191)|

|메인페이지|플랜페이지|
|------|---|
|![image](https://github.com/Wiz-trip/Wiz-trip-Front/assets/86836540/6ee446d0-b2fe-4789-ac4d-9749f73a736f)|![image](https://github.com/Wiz-trip/Wiz-trip-Front/assets/86836540/4df89f87-c621-403a-a164-b4b92e3d9911)|

|마이페이지|리뷰작성페이지|
|------|---|
|![image](https://github.com/Wiz-trip/Wiz-trip-Front/assets/86836540/6ea568fc-bb9c-4e6d-af8a-30061ebd9076)|![image](https://github.com/Wiz-trip/Wiz-trip-Front/assets/86836540/d58dc9c3-05cf-4476-a0c6-b5004ab57030)

|회원정보수정페이지|리뷰조회페이지|
|------|---|
|![image](https://github.com/Wiz-trip/Wiz-trip-Front/assets/86836540/b97c6523-3b73-4885-8d72-0af7cedafe05)|![image](https://github.com/Wiz-trip/Wiz-trip-Front/assets/86836540/ce1e87bb-3b27-44c9-a34e-c7dc3f881ef9)|

<br/>

## 📦 주요 기능 
### ⭐️ JWT를 이용한 회원 기능 
* JWT 인증 방식을 이용해 로컬 로그인 구현 
### ⭐️ 메인페이지
* 날짜, 여행지를 선택하여 여행계획을 시작할 수 있음 
* 한국관광공사 TourAPI정보를 연계하여 국내 관광지에 대한 상세정보를 얻을 수 있음
### ⭐️ 플랜페이지
* 여러명의 사용자가 하나의 여행계획을 공동편집할 수 있음
* 숙소/음식/관광 등 여행정보를 카테고리별로 정리해 공유할 수 있음
### ⭐️ 마이페이지
* 사용자의 닉네임, 프로필 사진 등 회원 정보수정을 할 수 있음
* 여행 완료 후 여행소감을 작성하면, 마이페이지에서 지난 여행기록을 확인할 수 있음
  
<br/>

## 📚 폴더 구조
```sh
📦src
 ┣ 📂apis -> api 
 ┃ ┗ 📂api
 ┣ 📂assets -> images, icons
 ┣ 📂components -> 페이지 별 컴포넌트, 공통 컴포넌트 
 ┃ ┣ 📂Main
 ┃ ┣ 📂My
 ┃ ┣ 📂Plan
 ┃ ┣ 📜DateModal.js
 ┃ ┣ 📜FormLayout.js
 ┃ ┣ 📜Header.js
 ┃ ┣ 📜Layout.js
 ┃ ┗ 📜PlaceList.js
 ┣ 📂pages
 ┃ ┣ 📜Join.js
 ┃ ┣ 📜Login.js
 ┃ ┣ 📜Main.js
 ┃ ┣ 📜Mypage.js
 ┃ ┣ 📜NotFound.js
 ┃ ┣ 📜Plan.js
 ┃ ┣ 📜Review.js
 ┃ ┣ 📜Share.js
 ┃ ┗ 📜Write.js
 ┣ 📂services -> redux 함수 파일 
 ┣ 📂store
 ┣ 📂styles
 ┣ 📂utils -> 정규표현식, 함수
 ┣ 📜administrative_district.json
 ┣ 📜App.js
 ┣ 📜axiosConfig.js
 ┣ 📜index.css
 ┣ 📜index.js
 ┗ 📜reportWebVitals.js
```
## 🧑‍💻Author

 **이은지** <br>
 👀GitHub: [@ej070961](https://github.com/ej070961) <br>

**이정수** <br>
 👀GitHub: [@jjeongsu](https://github.com/jjeongsu )

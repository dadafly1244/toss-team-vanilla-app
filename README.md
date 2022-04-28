## toss-team-vanilla-app
토스 팀 페이지 클론 코딩
<br /><br />

***

> 원본 사이트  :  **https://toss.im/team**

> demo  :  **https://charming-baklava-07892c.netlify.app/**

<br />
<br />

***

<br />
<br />

## Description(설명)

토스 팀 페이지를 HTML, CSS, JS를 사용하여 클론 코딩하였다.   

HEADER, INTRO, PERFORMANCE, TEAM MISSION, HISTORY TIMELINE, CARDS, PARTNERSHIP, NEWS, FOOTER로 총 10개의 section으로 나누어져 있다.

- HEADER : 스크롤 범위에 따라서 해더의 배경에 블러처리나 배경색 변경, 로고이미지 변경, 메뉴 글자색 변경
- INTRO :  소개글, 화살표 애니메이션 적용
- PERFORMANCE : 실적 소개 문구와 실적이 상승하는 것을 시각적으로 보여줄 수 있는 그래프를 chart.js로 삽입함.
- TEAM MISSION : 팀 미션 문구, 배경 이미지가 스크롤 해도 움직이지 않게 보여줌. 
- HISTORY TIMELINE : 원하는 년도를 클릭하면 내용을 js로 삽입함. 
- CARDS : 카드를 클릭하면 특정 글자는 사라지고, 특정 글자는 나타남.
- PARTNERSHIP : 해당 페이지로 스크롤 하면 내용이 살짝 위로 올라오는 애니메이션이 동작함
- NEWS : 기사 내용 부분에 마우스를 가져가면 크기가 조금 커지고, 화살표 색이 변함. 
- FOOTER : 푸터 구현...

<br />

***

<br />
<br />


## Getting Started 

<br />

### 개발을 위한 parcel-bundler 설치
```shell
$ npm install -D parcel-bundler
```
이후 'package.json'파일에서 `scripts` 부분을 수정한다. 
```json
  "scripts": {
    "dev": "parcel index.html",
    "build": "parcel build index.html"
  },
```
<br />

### 사용한 cdn
'index.html'파일의 `<head>></head>` 테그 사이에 넣으면 된다. 
<br />

#### 1. Chart.js
```html
  <script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/3.7.1/chart.min.js" integrity="sha512-QSkVNOCYLtj73J4hbmVoOV6KVZuMluZlioC+trLpewV8qMjsWqlIQvkn1KGX2StWvPMdWGBqim1xlC8krl1EKQ==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
```
<br />

#### 2. GSAP and Lodash

```html 
  <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.10.3/gsap.min.js" integrity="sha512-6zTDRWNxo8vI6JZYDCwhrJpg5icK3P4HNnW3czsO5Scb3lAoPDam+/wF3eog4hxcl0h44d0XlIcFkuoSaWHQ2g==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.21/lodash.min.js" integrity="sha512-WFN04846sdKMIP5LKNphMaWzU7YpMyCU245etK3g/2ARYbPK9Ub18eG+ljU96qKRCWh+quCY7yefSmlkQw1ANQ==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
```
<br />

#### 3. Material Icon

html에 삽입한 코드   

```html
  <link href="https://fonts.googleapis.com/icon?family=Material+Icons"  rel="stylesheet">
```
  
css에 삽입한 코드 

```css
/* material-icons */
.material-icons {
  font-family: 'Material Icons';
  font-weight: normal;
  font-style: normal;
  font-size: 24px;  /* Preferred icon size */
  display: inline-block;
  line-height: 1;
  text-transform: none;
  letter-spacing: normal;
  word-wrap: normal;
  white-space: nowrap;
  direction: ltr;

  /* Support for all WebKit browsers. */
  -webkit-font-smoothing: antialiased;
  /* Support for Safari and Chrome. */
  text-rendering: optimizeLegibility;

  /* Support for Firefox. */
  -moz-osx-font-smoothing: grayscale;

  /* Support for IE. */
  font-feature-settings: 'liga';
}
```
css에서  `font-family: 'Material Icons';`코드를 삽입한뒤 `content: "arrow_forward";` 다음과 같이 content 속성에 기호 이름을 쓰면 Material Icon이 출력된다! 

<br />

#### 4. 웹폰트 사용

'main.css' 파일에 다음 코드를 위에 삽입해서 사용
```css
@font-face {
  font-family: 'TossProductSans';
  src: url('https://static.toss.im/fonts/toss-product-sans/TossProductSans07Heavy.woff') format('woff'), url('https://static.toss.im/fonts/toss-product-sans/TossProductSans07Heavy.ttf') format('truetype');
  font-weight: 900;
}

@font-face {
  font-family: 'TossProductSans';
  src: url('https://static.toss.im/fonts/toss-product-sans/TossProductSans07Heavy.woff') format('woff'), url('https://static.toss.im/fonts/toss-product-sans/TossProductSans07Heavy.ttf') format('truetype');
  font-weight: 800;
}

@font-face {
  font-family: 'TossProductSans';
  src: url('https://static.toss.im/fonts/toss-product-sans/TossProductSans06ExtraBold.woff') format('woff'), url('https://static.toss.im/fonts/toss-product-sans/TossProductSans06ExtraBold.ttf') format('truetype');
  font-weight: 700;
}

@font-face {
  font-family: 'TossProductSans';
  src: url('https://static.toss.im/fonts/toss-product-sans/TossProductSans05Bold.woff') format('woff'), url('https://static.toss.im/fonts/toss-product-sans/TossProductSans05Bold.ttf') format('truetype');
  font-weight: 600;
}

@font-face {
  font-family: 'TossProductSans';
  src: url('https://static.toss.im/fonts/toss-product-sans/TossProductSans04SemiBold.woff') format('woff'), url('https://static.toss.im/fonts/toss-product-sans/TossProductSans04SemiBold.ttf') format('truetype');
  font-weight: 500;
}

@font-face {
  font-family: 'TossProductSans';
  src: url('https://static.toss.im/fonts/toss-product-sans/TossProductSans03Medium.woff') format('woff'), url('https://static.toss.im/fonts/toss-product-sans/TossProductSans03Medium.ttf') format('truetype');
  font-weight: 400;
}

@font-face {
  font-family: 'TossProductSans';
  src: url('https://static.toss.im/fonts/toss-product-sans/TossProductSans02Regular.woff') format('woff'), url('https://static.toss.im/fonts/toss-product-sans/TossProductSans02Regular.ttf') format('truetype');
  font-weight: 300;
}

@font-face {
  font-family: 'TossProductSans';
  src: url('https://static.toss.im/fonts/toss-product-sans/TossProductSans01Light.woff') format('woff'), url('https://static.toss.im/fonts/toss-product-sans/TossProductSans01Light.ttf') format('truetype');
  font-weight: 200;
}

```
<br />
<br />

***

<br />
<br />

## Files

* index.html : 홈페이지의 html 구조 코드
  
* css/main.css : 홈페이지의 모든 CSS 구조 코드 
  
* js/main.js 
  *  홈페이지의 header와 partnership 부분에서 스크롤 시 발생하는 이벤트 처리
  *  card부분에서 클릭 이벤트 추가
* js/chart2.js :  performance 부분에 뒷 배경에 그래프를 그림. 
* js/timeline.js : timeline 부분에서 각 년도를 클릭하면 각 년도에 따라 li태그를 만들어주는 js코드 
* js/chart.js : 필요없는 파일
  
* images/ : 프로젝트에 필요한 이미지가 들어있는 폴더
  
<br />
<br />

***

<br />
<br />
  
## License
This project is licensed under the MIT License

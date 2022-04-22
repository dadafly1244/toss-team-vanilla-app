// 배너 스크롤시 불투명으로 바뀌는 효과
const headerEl = document.querySelector('header');

window.addEventListener('scroll', _.throttle(function () {
  console.log(window.scrollY);
  if (window.scrollY > 5){
    headerEl.classList.add('filter');
  }else{
    headerEl.classList.remove('filter');
  }
  
},300));


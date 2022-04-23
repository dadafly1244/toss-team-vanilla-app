// 배너 스크롤시 불투명으로 바뀌는 효과
const headerEl = document.querySelector('header');
const logoWhightEl = document.querySelector('.logo .white')
const logoBlueEl = document.querySelector('.logo .blue')
const imgInvisible = document.querySelector('.invisible');



window.addEventListener('scroll', _.throttle(function () {
  console.log(window.scrollY);
  if (window.scrollY < 5){
    headerEl.classList.remove('filter');
    changeLogoToBlueColor(false)

  } else if (window.scrollY < 3600 && window.scrollY >=5) {
    headerEl.classList.add('filter');
    changeLogoToBlueColor(false)
    
  } else {
    headerEl.classList.remove('filter');
    changeLogoToBlueColor(true)

  } 

  
},300));


function changeLogoToBlueColor(isBlue) {
  if (isBlue) {
    //로고 파란색으로 
    logoBlueEl.classList.remove('invisible')
    logoWhightEl.classList.add('invisible')
  }
  else{
    //로고 흰색으로
    logoWhightEl.classList.remove('invisible')
    logoBlueEl.classList.add('invisible')
  }
}
// HEADER
const headerEl = document.querySelector('header');
const logoWhightEl = document.querySelector('.logo .white')
const logoBlueEl = document.querySelector('.logo .blue')
const imgInvisible = document.querySelector('.invisible');
const headerMenuEls = headerEl.querySelectorAll('a')
const partnershipEl = document.querySelector('.partnership__contianer')
window.addEventListener('scroll', _.throttle(function () {
  // console.log(window.scrollY);
  if (window.scrollY < 5){
    headerEl.classList.remove('filter');
    changeHeaderColor(false)
  } else if (window.scrollY < 3600 && window.scrollY >=5) { 
    //배너 스크롤시 불투명으로 바뀌는 효과
    headerEl.classList.add('filter');
    changeHeaderColor(false)
  } else {
    headerEl.classList.remove('filter');
    //timeline 이후부터 로고 색을 파란색으로 변경하기. 
    changeHeaderColor(true)
  } 
  if (window.scrollY > 5500){
    //사용자가 스크롤을 6000까지 내리면 partnership 애니매이션 동작
    partnershipEl.classList.add('view')
  }
  else{
    partnershipEl.classList.remove('view')
  }
},300));

function changeHeaderColor(isWhiteBackground){ //header 색 바꾸는 함수
  if(isWhiteBackground){
    //로고 파란색으로 
    logoBlueEl.classList.remove('invisible')
    logoWhightEl.classList.add('invisible')
    //배경색을 흰색으로 
    headerEl.classList.add('bg--white')
    //해더의 매뉴에 글자 색을 검은색으로 만드는 클래스 넣기 
    headerMenuEls.forEach( item => {item.classList.add('bg--white')})
  }else{
    //로고 흰색으로
    logoWhightEl.classList.remove('invisible')
    logoBlueEl.classList.add('invisible')
    //배경 흰색 제거
    headerEl.classList.remove('bg--white')
    headerMenuEls.forEach( item => {item.classList.remove('bg--white')})
  }
}


//카드 클릭시 변화! 
const cardEls = document.querySelectorAll('.card');
for (let i = 0; i < cardEls.length; i += 1){
  
  cardEls[i].addEventListener('click',function(){
    cardEls[i].classList.toggle('item--focus')
})
}




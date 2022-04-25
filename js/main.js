
const headerEl = document.querySelector('header');
const logoWhightEl = document.querySelector('.logo .white')
const logoBlueEl = document.querySelector('.logo .blue')
const imgInvisible = document.querySelector('.invisible');
const headerMenuEls = headerEl.querySelectorAll('a')
console.log(headerMenuEls)

window.addEventListener('scroll', _.throttle(function () {
  console.log(window.scrollY);
  if (window.scrollY < 5){
    // 배너 스크롤시 불투명으로 바뀌는 효과
    headerEl.classList.remove('filter');
    headerEl.classList.remove('bg--white')
    changeLogoToBlueColor(false)
    addBackgroundClass(false)

  } else if (window.scrollY < 3600 && window.scrollY >=5) { 
    // 스크롤5일때 뒷 배경 블러 처러하기. 
    headerEl.classList.add('filter');
    headerEl.classList.remove('bg--white')
    changeLogoToBlueColor(false)
    addBackgroundClass(false)

    
  } else {
    headerEl.classList.remove('filter');
    //timeline 이후부터 로고 색을 파란색으로 변경하기. 
    changeLogoToBlueColor(true)
    headerEl.classList.add('bg--white')
    addBackgroundClass(true)


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

function addBackgroundClass(isWhiteBackground) {
  //해더의 매뉴에 글자 색을 검은색으로 만드는 클래스 넣기 
  if(isWhiteBackground){
    headerMenuEls.forEach( item => {
      item.classList.add('bg--white')
    })
  }else { 
    headerMenuEls.forEach( item => {
      item.classList.remove('bg--white')
    })
  }
}
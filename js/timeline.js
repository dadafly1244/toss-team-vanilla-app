// HISTORY TIMELINE
const yearEls = document.querySelectorAll('.year')
let isActiveYear = false;
let currentActiveYear =2021;

const yearData = {
  2021 : [
    ['2021.02' , '(주)토스증권 출범'],
    ['2021.04' , '(주)토스씨엑스 설립'],
    ['2021.06' , '토스뱅크 컨소시엄 제3 인터넷전문은행 본인가 획득 \n600억 원 투자 유치 (기업가치 한화 약 8조원 돌파)'],
    ['2021.08' , '평생 무료 송금 정책 전격 도입 \n본인확인기관 선정'],
    ['2021.10' , '주)토스뱅크 출범 \n(주)VCNC(타다) 인수'],
    ['2021.11' , '전자서명인증사업자 선정'],
    ['2021.12' , '행정안전부 주관 \'2021 정보화발전\' 장관 표창 수상']
  ],
  2020 : [
    ['2020.04' , '첫 월간 흑자 기록 \n토스신용카드(PLCC) 출시'],
    ['2020.05' , '토스인증서 발급 1,100만 돌파'],
    ['2020.07' , '고객 피해 전액 책임제 시행'],
    ['2020.08' , '2,070억 원 투자 유치 (기업가치 한화 약 3조 원 돌파) \n㈜토스페이먼츠 출범 \n토스보험파트너 앱 출시'],
    ['2020.11' , '토스준비법인(토스증권) 금융투자업 본인가 획득'],
  ],
  2019 : [
    ['2019.02' , '토스 3.0 출시 및 브랜드 로고 리뉴얼'],
    ['2019.03' , '토스준비법인(토스증권) 예비인가 획득'],
    ['2019.04' , '토스머니카드 출시'],
    ['2019.08' , '770억 원 투자 유치'],
    ['2019.10' , '월간 활성 사용자 1,000만 명 돌파'],
    ['2019.11' , '토스카드 2.0 출시'],
    ['2019.12' , '토스뱅크 컨소시엄 제3 인터넷전문은행 예비인가 획득\n무료 신용등급 조회 누적 사용자 1,000만 명 돌파'],
  ],
  2018 : [
    ['2018.04' , '이승건 대표 정보통신의 날 기념 대통령 표창 수상'],
    ['2018.06' , '440억 원 투자 유치'],
    ['2018.10' , '세계 100대 핀테크 기업 중 28위 선정'],
    ['2018.11' , '과학기술정보통신부 주최 2018 정보보호대상 수상\n㈜토스인슈어런스 설립'],
    ['2018.12' , '900억 원 투자 유치 (기업가치 한화 약 1조 원 돌파)'],
  ],
  2017 : [
    ['2017.02' , '무료 신용등급 조회 서비스 출시'],
    ['2017.03' , '550억 원 투자 유치'],
    ['2017.11' , '세계 100대 핀테크 기업 중 35위 선정'],
    ['2017.12' , '월 송금액 1조, 누적 송금액 10조 돌파'],
  ],
  2016 : [
    ['2016.04' , '265억 원 투자 유치 \n이승건 대표 한국핀테크산업협회 초대 회장 부임'],
    ['2016.08' , '누적 송금액 1조 원 돌파'],
    ['2016.12' , '구글 플레이 \'2016 올해의 베스트앱\' 대상 수상'],
  ],
  2015 : [
    ['2015.02' , '간편 송금 서비스 출시'],
    ['2015.07' , '50억 원 투자 유치'],
    ['2015.10' , '토스(Toss) 상표권 등록'],
  ],
  2014 : [
    ['2014.08' , '10억 원 투자 유치'],
  ],
  2013 : [
    ['2013.04' , '㈜비바리퍼블리카 설립'],
  ]
}

const findActiveYearEl = document.querySelector('.active')
const timelineUlEl = document.querySelector('.timeline__items')

for (let i = 0; i < yearData[currentActiveYear].length ; i += 1) {
  const liEl = document.createElement('li') // li요소 생성
  const h3El = document.createElement('h3') // h3 요소 생성 
  h3El.innerHTML = yearData[currentActiveYear][i][0] // h3에 배열데이터 추가
  liEl.appendChild(h3El) //li요소의 자식으로 h3요소 넣기 
  const h4El = document.createElement('h4') 
  h4El.textContent = yearData[currentActiveYear][i][1]
  liEl.appendChild(h4El)
  timelineUlEl.appendChild(liEl) // li요소를 ul에 추가! 
}


for (let i = 0 ; i < yearEls.length ; i += 1 ) {
  yearEls[i].addEventListener('click', function (currentActiveYear) {
    isActiveYear = !isActiveYear  
    if (isActiveYear) { // 클릭되었다면!! 
      // 먼저 현재 active 되어있는 객채를 찾아준다. 제일 처음에는 2021을 찾을 것이다!!
      const findActiveEl = document.querySelector('.active')
      //ul태그안의 내용을 지운다. 
      const findUlForDeleteEl = document.querySelector('.timeline__items')
      const findLiForDeleteAllEls = findUlForDeleteEl.querySelectorAll('li')
      for (let i = 0 ; i < findLiForDeleteAllEls.length ; i += 1){
        findUlForDeleteEl.removeChild(findLiForDeleteAllEls[i])
      }
  
      // 현재 active 가 있는 요소에서 active 클래스를 제거해준다!
      findActiveEl.classList.remove('active') 
      // 클릭한 요소에 active 클래스를 추가한다!! 
      yearEls[i].classList.add('active')
      currentActiveYear = yearEls[i].dataset.year
      //console.log('currentActiveYear', currentActiveYear)

      for (let i = 0; i < yearData[currentActiveYear].length ; i += 1) {
        const liEl = document.createElement('li') // li요소 생성
        const h3El = document.createElement('h3') // h3 요소 생성 
        h3El.textContent = yearData[currentActiveYear][i][0] // h3에 배열데이터 추가
        liEl.appendChild(h3El) //li요소의 자식으로 h3요소 넣기 
        const h4El = document.createElement('h4') 
        h4El.textContent = yearData[currentActiveYear][i][1]
        liEl.appendChild(h4El)
        timelineUlEl.appendChild(liEl) // li요소를 ul에 추가! 
      }
      //console.log(timelineUlEl)
      //현재 클릭한 년도 리턴해주기. 
      return currentActiveYear = currentActiveYear
    }
  })
}

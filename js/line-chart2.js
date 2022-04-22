// <block:data:2>
const data = [];
const datapoints = [0, 20, 20, 60, 70, 100, 130, 120, 125, 115, 150, 170,200];
let prev = 100;
for (let i = 0; i < 13; i++) {
  prev += 5 - Math.random() * 10;
  data.push({x: i, y:datapoints[i]});
}
// </block:data>

// <block:animation:1>
const totalDuration = 1000;
const delayBetweenPoints = totalDuration / data.length;
const previousY = (ctx) => ctx.index === 0 ? ctx.chart.scales.y.getPixelForValue(100) : ctx.chart.getDatasetMeta(ctx.datasetIndex).data[ctx.index - 1].getProps(['y'], true).y;
const animation = {
  x: {
    type: 'number',
    easing: 'linear',
    duration: delayBetweenPoints,
    from: NaN, // the point is initially skipped
    delay(ctx) {
      if (ctx.type !== 'data' || ctx.xStarted) {
        return 0;
      }
      ctx.xStarted = true;
      return ctx.index * delayBetweenPoints + 2000;
    }
  },
  y: {
    type: 'number',
    easing: 'linear',
    duration: delayBetweenPoints,
    from: previousY,
    delay(ctx) {
      if (ctx.type !== 'data' || ctx.yStarted) {
        return 0;
      }
      ctx.yStarted = true;
      return ctx.index * delayBetweenPoints;
    }
  }
};
// </block:animation>

// <block:config:0>
const config = {
  type: 'line',
  data: {
    datasets: [{
      labels: false, // 범례 지우기
      fill: true, // 그래프 배경색 채우기 
      backgroundColor: 'rgba(54, 162, 235, 0.2)',
      borderColor: 'rgb(75, 192, 192)', //선 색
      borderWidth: 2,
      radius: 0,
      data: data,
      lineTension: .4,
      datalabels: {
        labels: false
      }
    }]
  },
  options: {
    animation,
    animations: {
      tension: {
        duration: 10000,
        easing: 'linear',
        // from: .5,
        // to: 0,
        // loop: false,

      }
    },
    // events: [], // 엥? 모든 이벤트가 사라진다.. 어이없네 
    // 참고글 : https://stackoverflow.com/questions/41952055/chart-js-how-to-disable-everything-on-hover
    //잘은 모르겠지만 이 두 이벤트를 빼니까 안나온다 ㅎㅎ"mousemove", "click" 
    events: ["mouseout","touchstart", "touchmove", "touchend"],
    interaction: {
      intersect: false
    },
    plugins:{
      legend: false,//범례 없애기
    },
    scales: {
      x: {
        type: 'linear',
        display: false,
        title: {
          display: false
        }
      },
      y: { // defining min and max so hiding the dataset does not change scale range
        min: 0,
        max: 200,
        display: false,
        title: {
          display:false
        }
      }
    }
  }
};
// </block:config


const myChart = new Chart(
  document.getElementById('myChart'),
  config
);
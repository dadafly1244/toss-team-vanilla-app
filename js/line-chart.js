const DATA_COUNT = 12;
const labels = [];
for (let i = 0; i < DATA_COUNT; ++i) {
  labels.push(i.toString());
}
const datapoints = [0, 20, 20, 60, 70, 100, 140, 120, 125, 105, 110, 170];


const data = {
  labels: labels,
  datasets: [{
    label: 'Looping tension',
    data: datapoints,
    fill: true,
    backgroundColor: 'rgba(54, 162, 235, 0.2)',
    borderColor: 'rgb(75, 192, 192)',
  }]
};
const config = {
  type: 'line',
  data: data,
  options: {
    animations: {
      tension: {
        duration: 1000,
        easing: 'linear',
        from: .5,
        to: 0,
        loop: true
      }
    },
    scales: {
      x: {
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

const myChart = new Chart(
  document.getElementById('myChart'),
  config
);
// All available Chart.js components
import Chart from 'chart.js/auto'

new Chart(
  document.getElementById('chartJs'),
  {
    type: 'line',
    data: {
      labels: ["2016", "2017", "2018", "2019"],
      datasets: [
        {
          label: "Oakland Asthma Hospitalization Rates",
          data: [5.3, 6.2, 6.0, 5.8]},
        {
          label: "Washtenaw Asthma Hospitalization Rates",
          data: [5.9, 5.7, 5.8, 5.1]},
        {
          label: "Wayne Asthma Hospitalization Rates",
          data: [12.8, 13.3, 12.9, 13.1]}
        ]},
    options: {
      responsive: true,
      scales: {
        x: {
          display: true,
          title: {
            display: true,
            text: "Year"
          }
        },
        y: {
          display:true,
          title: {
            display:true,
            text: "Age-Adjusted Rate of Hospitalization per 10,000 Population"
          }
        }
      }
    }
  });


// cd "C:/Users/tasha/OneDrive/Desktop/Asthma/Chart.js/package"

// let aqiData = "https://raw.githubusercontent.com/molleighH/Project-3/main/Resources/aqi_data.csv";

d3.csv(aqiData).then(function(airData){
    
    function selectCounty(row){
        return row.County == countyName;
    }
    let countyName = "Wayne";        

    let countyData = airData.filter(selectCounty);

    let year = [];
    let goodDays =[];
    let modDays =[];
    let sensitiveUnhealthyDays = [];
    let unhealthyDays =[];
    let veryUnhealthyDays = [];
    let hazardousDays = [];
    

    for (i = 0; i < countyData.length; i++){
        year.push(countyData[i].Year);
        goodDays.push(countyData[i].Good_Days);
        modDays.push(countyData[i].Moderate_Days);
        sensitiveUnhealthyDays.push(countyData[i].Unhealthy_for_Sensitive_Groups_Days);
        unhealthyDays.push(countyData[i].Unhealthy_Days);
        veryUnhealthyDays.push(countyData[i].Very_Unhealthy_Days);
        hazardousDays.push(countyData[i].Hazardous_Days);
    }

    console.log(year);

    
    let barChartData = {
        labels: year.reverse(),              
        datasets: [
          {
            label: "Good Days",
            backgroundColor: "lightgreen",
            borderColor: "green",
            borderWidth: 1,
            data: goodDays.reverse()
          },
          {
            label: "Moderate Days",
            backgroundColor: "yellow",
            borderColor: "yellow",
            borderWidth: 1,
            data: modDays.reverse()
          },
          {
            label: "Unhelathy  Days for sensitive groups",
            backgroundColor: "orange",
            borderColor: "orange",
            borderWidth: 1,
            data: sensitiveUnhealthyDays.reverse()
          },
          {
            label: "Unhealthy Days",
            backgroundColor: "red",
            borderColor: "maroon",
            borderWidth: 1,
            data: unhealthyDays.reverse()
          },
          {
            label: " Very Unhealthy Days",
            backgroundColor: "purple",
            borderColor: "Grey",
            borderWidth: 1,
            data: veryUnhealthyDays.reverse()
          },
          {
            label: "Hazardous Days",
            backgroundColor: "darkred",
            borderColor: "Black",
            borderWidth: 1,
            data: hazardousDays.reverse()
          }
        ]
      };
      
    let chartOptions = {
      responsive : true,
      plugins: {
        legend : {
          position : 'right'
        },
        title :{
          display: true,
          text: "Quality of Days Based on AQI _ Wayne County",
          font: {
            color: 'Black',
            size : 20,
            weight : 'bold',
            lineheight : 1.2
          }
        }        
      },
      chartArea: {
        backgroundColor: 'rgba(255, 255, 255, 1)'
      },
      scales : {
        y : {
          beginAtZero : true
        }
      }
    }
        
      
    const ctx = document.getElementById("aqiChart").getContext('2d');          
  
    chart = new Chart(ctx, {
        type: 'bar',
        data: barChartData,
        options: chartOptions
   });  

});
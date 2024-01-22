let aqiData = "https://raw.githubusercontent.com/molleighH/Project-3/main/Resources/aqi_data.csv";


d3.csv(aqiData).then(function(airData){
    console.log(airData);

    function init() {
                
        function selectCounty(row) {
            return row.County == countyName;
        }
        let countyName = "Oakland";        
    
        let countyData = airData.filter(selectCounty);
      
  
        // Print to console
        console.log(countyData);

        let year = [];
        let maxAqi= [];
        let medianAqi= [];
        let ninetieth =[];
        for (i = 0; i < countyData.length; i++){
            year.push(countyData[i].Year);
            maxAqi.push(countyData[i].Max_AQI);
            medianAqi.push(countyData[i].Median_AQI);
            ninetieth.push(countyData[i].Ninetieth_Percentile_AQI)
        }
        console.log(year);

        let trace1 = {
            x: year,
            y: maxAqi,
            mode:'line',
            line :{
                color : "blue"
            },
            name: "Max AQI"
        };

        let trace2 = {
            x: year,
            y: medianAqi,
            mode: "line",
            line : {
                color : "red"
            },
            name: "Median AQI"
        };

        let trace3 = {
            x: year,
            y: ninetieth,
            mode: "line",
            line : {
            color : "green"
            },
            name: "90th Percentile AQI"
        };
        let data = [trace1, trace2, trace3];
        let layout = {
            title: "Air Quality Index"
        };       
    
        Plotly.newPlot("plot", data, layout); 

   
    d3.selectAll("#selDataset").on("change", updateData)
        function updateData(){
            let dropdownMenu = d3.select("#selDataset");
            let dataset = dropdownMenu.property("value");
            if (dataset == 'oakland'){
                countyName = "Oakland";                        
            }
            else if (dataset == 'washtenaw'){
                countyName = "Washtenaw";
            }
            else if (dataset == 'wayne'){
                countyName= "Wayne"
            }
            
            function selectCounty(row) {
                return row.County == countyName;
                } ;                
        
            let countyData = airData.filter(selectCounty);
            console.log(countyData);

      
  
        let year = [];
        let maxAqi= [];
        let medianAqi= [];
        let ninetieth =[];
        for (i = 0; i < countyData.length; i++){
            year.push(countyData[i].Year);
            maxAqi.push(countyData[i].Max_AQI);
            medianAqi.push(countyData[i].Median_AQI);
            ninetieth.push(countyData[i].Ninetieth_Percentile_AQI)
        }
        console.log(year);

        let trace1 = {
            x: year,
            y: maxAqi,
            mode:'line',
            line :{
                color : "blue"
            },
            name: "Max AQI"
        };

        let trace2 = {
            x: year,
            y: medianAqi,
            mode: "line",
            line : {
                color : "red"
            },
            name: "Median AQI"
        };

        let trace3 = {
            x: year,
            y: ninetieth,
            mode: "line",
            line : {
            color : "green"
            },
            name: "90th Percentile AQI"
        };
        let data = [trace1, trace2, trace3];
        let layout = {
            title: "Air Quality Index"
        };       
    
        Plotly.newPlot("plot", data, layout); 

        }; 
        
    };


    init()  
    
});  
   

    
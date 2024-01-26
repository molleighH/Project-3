// The map
let places = ['Oakland', 'Washtenaw', 'Wayne']

// Creating the map object
let myMap = L.map("map", {
    center: [42.382980, -83.372582],
    zoom: 10
  });
  
  // Adding the tile layer
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(myMap);
  
  // URL to the Superfund GeoJSON (Michigan)
  const superfundSites = "https://gispub.epa.gov/arcgis/rest/services/OEI/FRS_INTERESTS/MapServer/21/query?outFields=*&where=STATE_CODE%3D%27MI%27&f=geojson";
  
  // Getting Superfund GeoJSON data
  d3.json(superfundSites).then(({features}) => {

    console.log(features);

    // Filtering for Oakland, Washtenaw, and Wayne counties
    let filter = features.filter(obj => places.map(text => text.toUpperCase()).includes(obj.properties.COUNTY_NAME));
    
    // Add the filtered GeoJSON with information provided upon clicking on pins
    L.geoJson(filter, {onEachFeature}).addTo(myMap);

    // Information when clicking on pin
    function onEachFeature(feature, layer) {
      layer.bindPopup(`<h3>${feature.properties.PRIMARY_NAME}</h3> <hr> <p>${feature.properties.LOCATION_ADDRESS}</p> <p>${feature.properties.CITY_NAME}, MI ${feature.properties.POSTAL_CODE}</p>`)
    };

  });

  // URL to the county GeoJSON data
  const counties = "https://gisagocss.state.mi.us/arcgis/rest/services/OpenData/michigan_geographic_framework/MapServer/0/query?outFields=*&where=1%3D1&f=geojson"

  // Retrieving Michigan county GeoJSON data
  d3.json(counties).then(({features}) => {

    // Filtering for Oakland, Washtenaw, and Wayne counties
    let filter = features.filter(obj => places.includes(obj.properties.NAME));

    // Hard code heat map for severity of asthma
    L.geoJSON(filter, {
      style: function (feature) {
          return {fillColor: feature.properties.NAME == 'Wayne' ? 'red' : 'orange'}}
  }).addTo(myMap);
  });

// Filtered AQI data
let airData = "https://raw.githubusercontent.com/molleighH/Project-3/main/static/js/data.csv";

d3.csv(airData).then(function(data) {

    // Grab latitude and longtiude for AQI montiors
    for (let i = 0; i < data.length; i++) {

        var myIcon = L.icon({
            iconUrl: "./lung.png",
            iconSize: [40, 60]})

        // Add locations to map
        L.marker([data[i].Latitude, data[i].Longitude], {icon: myIcon}).addTo(myMap);
}});

// Filtered asthma data
let asthmaData = "https://raw.githubusercontent.com/molleighH/Project-3/main/static/js/asthma_data.csv"

d3.csv(asthmaData).then(({data}) => {

    // Hard code county center
    let centerOak = [42.592192, -83.336188]
    let centerWash = [42.307649, -83.847302]
    let centerWayne = [42.2814269, -83.3863214]

    var myIcon = L.icon({
        iconUrl: "./inhaler.png",
        iconSize: [40, 60]})

    // Add icon for county center to map
    L.marker(centerOak, {icon: myIcon}).addTo(myMap),
    L.marker(centerWash, {icon: myIcon}).addTo(myMap)
    L.marker(centerWayne, {icon:myIcon}).addTo(myMap)});


// // The asthma chart
// import Chart from 'chart.js/auto'

// // Render asthma chart
// new Chart(
//   document.getElementById('chartJs'),
//   {
//     type: 'line',
//     data: {
//       labels: ["2016", "2017", "2018", "2019"],
//       datasets: [
//         {
//           label: "Oakland Asthma Hospitalization Rates",
//           data: [5.3, 6.2, 6.0, 5.8]},
//         {
//           label: "Washtenaw Asthma Hospitalization Rates",
//           data: [5.9, 5.7, 5.8, 5.1]},
//         {
//           label: "Wayne Asthma Hospitalization Rates",
//           data: [12.8, 13.3, 12.9, 13.1]}
//         ]},
//     options: {
//       responsive: true,
//       scales: {
//         x: {
//           display: true,
//           title: {
//             display: true,
//             text: "Year"
//           }
//         },
//         y: {
//           display:true,
//           title: {
//             display:true,
//             text: "Age-Adjusted Rate of Hospitalization per 10,000 Population"
//           }
//         }
//       }
//     }
//   });

Plotly.d3.csv('./county_cancer_data.csv', function (err, rows) {

function unpack(rows, key) {
  return rows.map(function (row) {
    return row[key];
  });
}

var allCountyNames = Array.from(new Set(unpack(rows, 'county'))),
  allYears = Array.from(new Set(unpack(rows, 'year'))),
  superfundSites = {
    'Wayne': 205,
    'Oakland': 18,
    'Washtenaw': 16
  };

function getAverageDeathRate(chosenYear, chosenCounty) {
  var countyData = rows.filter(row => row.year === chosenYear && row.county === chosenCounty);
  var deathRates = countyData.map(row => parseFloat(row.death_adjusted_rate));
  var averageDeathRate = deathRates.length > 0 ? deathRates.reduce((a, b) => a + b) / deathRates.length : 0;
  return averageDeathRate;
}

function setBubblePlot(chosenYear) {
  var traces = [];

  allCountyNames.forEach(county => {
    var averageDeathRate = getAverageDeathRate(chosenYear, county);

    traces.push({
      x: [county],
      y: [averageDeathRate],
      type: 'bar',
      name: county
    });
  });

  // Adding trend line for Superfund Sites
  var superfundTrace = {
    x: allCountyNames,
    y: allCountyNames.map(county => superfundSites[county]),
    type: 'scatter',
    mode: 'lines',
    name: 'Superfund Sites',
    line: { dash: 'dash' }
  };

  traces.push(superfundTrace);

  var layout = {
    title: 'Average Age-adjusted Cancer Deaths by County for Year ' + chosenYear,
    xaxis: {
      title: 'County'
    },
    yaxis: {
      title: 'Average Deaths by Cancer'
    }
  };

  Plotly.newPlot('plot', traces, layout);
}

function assignOptions(textArray, selector) {
  for (var i = 0; i < textArray.length; i++) {
    var currentOption = document.createElement('option');
    currentOption.text = textArray[i];
    selector.appendChild(currentOption);
  }
}

assignOptions(allYears, document.getElementById('yearSelector'));

document.getElementById('yearSelector').addEventListener('change', function () {
  var selectedYear = document.getElementById('yearSelector').value;
  setBubblePlot(selectedYear);
});

// Set up the default plot for the initial year
setBubblePlot(allYears[0]);
});
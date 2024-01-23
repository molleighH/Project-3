// const fetch = require('node-fetch');

let url = "https://gispub.epa.gov/arcgis/rest/services/OEI/FRS_INTERESTS/MapServer/21/query?outFields=*&where=STATE_CODE%3D%27MI%27&f=geojson";

// Fetch the JSON data and console log it
d3.json(url).then(function (data) {  
    console.log(data);
    myMap = L.map("map", {
        center: [44.3, -85.6],  // Center of Michigan
        zoom: 7,
    });

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(myMap);
    });

// Call updateMap() once to load the initial dataset
updateMap();

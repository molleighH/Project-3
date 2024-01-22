// Superfund locations
let url = "https://gispub.epa.gov/arcgis/rest/services/OEI/FRS_INTERESTS/MapServer/21/query?outFields=*&where=STATE_CODE%3D%27MI%27&f=geojson";

d3.json(url).then(function (data) {
    // Console log  
    console.log(data);

    // Create the map
    let myMap = L.map("map", {
        center: [44.3, -85.6],  // Center of Michigan
        zoom: 7,
    });

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(myMap);

    // Get data and add it to the map
    fetch(url)
        .then(response => response.json())
        .then(data => {
            L.geoJSON(data, {
                onEachFeature: function (feature, layer) {
                    if (feature.properties) {
                        let popupContent = `
                            <strong>Primary Name:</strong> ${feature.properties.PRIMARY_NAME}<br>
                            <strong>County Name:</strong> ${feature.properties.COUNTY_NAME}<br>
                            <strong>Interest Type:</strong> ${feature.properties.INTEREST_TYPE}<br>
                            <strong>Location Address:</strong> ${feature.properties.LOCATION_ADDRESS}<br>
                            <strong>Active Status:</strong> ${feature.properties.ACTIVE_STATUS}
                        `;
                        layer.bindPopup(popupContent);
                    }
                }
            }).addTo(myMap);
        });

// Define layers user can select from 
let 2015 = L.tileLayer
let 2016 = L.tileLayer
let 2017 = L.tileLayer
let 2018 = L.tileLayer
let 2019 = L.tileLayer  
let 2020 = L.tileLayer
// Cancer Mortality by County Data
let CancerData = "./county_cancer_data.csv";

   // Load CSV data and add it to the map Cancer Data
   d3.csv(CancerData).then(function(data) {
    console.log(data);
    data.forEach(function(row) {
        let county = row.county;
        let coords = counties_coordinates[county];
        
// The function that will determine the color of a color based on the county that it belongs to
function chooseColor(county) {
    if (county == "Wayne") return "yellow";
    else if (county == "Oakland") return "red";
    else if (county == "Washtenaw") return "orange";
    else return "black";
  }
  //Setting coordinates for counties
 let counties_coordinates = {
    "Oakland": {"latitude": 42.5922, "longitude": 83.3362},
    "Wayne": {"latitude": 42.2791, "longitude": 83.3362},
    "Washtenaw": {"latitude": 42.3076, "longitude": 83.8473},
 };



        // Search data
        if(coords){var marker = L.marker(
            [coords.Latitude, coords.longitude],
            {
                opacity: 1,
                // Customize your icon
                icon: L.icon(
                    {
                        iconUrl: './DeathIcon.png', 
                        iconSize: [48, 48]
                    }
                )
            }
        ).bindPopup(row.Title);
        marker.addTo(myMap);
    };
 });
 });
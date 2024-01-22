// Superfund locations
let url = "https://gispub.epa.gov/arcgis/rest/services/OEI/FRS_INTERESTS/MapServer/21/query?outFields=*&where=STATE_CODE%3D%27MI%27&f=geojson";

d3.json(url).then(function (data) {
    // Console log  
    console.log(data);
    
let counties_coordinates = {
        "Wayne": {"latitude": 42.2791, "longitude": 83.3362},
        "Oakland": {"latitude": 42.5922, "longitude": 83.3362},
        "Washtenaw": {"latitude": 42.3076, "longitude": 83.8473}
 };

    // Create the map
    let myMap = L.map("map", {
        center: [44.3, -85.6],  // Center of Michigan
        zoom: 7,
    });

    let streetmap = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
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


// Cancer Mortality by County Data
let CancerData = "./county_cancer_data.csv";

// Initialize all  LayerGroups that we'll use.
let layers = {
    CM2015: new L.LayerGroup(),
    CM2016: new L.LayerGroup(),
    CM2017: new L.LayerGroup(),
    CM2018: new L.LayerGroup(),
    CM2019: new L.LayerGroup(),
    CM2020: new L.LayerGroup()
  };
  
  // Create the map with our layers.
  let CancerMap = L.map("map-id", {
    center: [44.3, -85.6],
    zoom: 7,
    layers: [
      layers.CM2015,
      layers.CM2016,
      layers.CM2017,
      layers.CM2018,
      layers.CM2019,
      layers.CM2020,
    ]
  });

// Add our "streetmap" tile layer to the map.
streetmap.addTo(CancerMap);

// Create an overlays object to add to the layer control.
let overlays = {
  "MI 2015 Cancer Death Rate": layers.CM2015,
  "MI 2016 Cancer Death Rate": layers.CM2016,
  "MI 2017 Cancer Death Rate": layers.CM2017,
  "MI 2018 Cancer Death Rate": layers.CM2018,
  "MI 2019 Cancer Death Rate": layers.CM2019,
  "MI 2020 Cancer Death Rate": layers.CM2020
};

// Create a control for our layers, and add our overlays to it.
L.control.layers(null, overlays).addTo(CancerMap);

// Create a legend to display information about our map.
let info = L.control({
  position: "bottomright"
});

// When the layer control is added, insert a div with the class of "legend".
info.onAdd = function() {
    let div = L.DomUtil.create("div", "legend");
    return div;
  };
  // Add the info legend to the map.
  info.addTo(CancerMap);
  
  // Initialize an object that contains icons for each layer group.
  let icons = {
    CM2015: L.ExtraMarkers.icon({
      icon: "ion-minus-circled",
      iconColor: "white",
      markerColor: "yellow",
      shape: "star"
    }),
    CM2016: L.ExtraMarkers.icon({
      icon: "ion-minus-circled",
      iconColor: "white",
      markerColor: "red",
      shape: "circle"
    }),
    CM2017: L.ExtraMarkers.icon({
      icon: "ion-minus-circled",
      iconColor: "white",
      markerColor: "blue-dark",
      shape: "penta"
    }),
    CM2018: L.ExtraMarkers.icon({
      icon: "ion-minus-circled",
      iconColor: "white",
      markerColor: "orange",
      shape: "square"
    }),
    CM2019: L.ExtraMarkers.icon({
      icon: "ion-minus-circled",
      iconColor: "white",
      markerColor: "green",
      shape: "circle"
    }),
    CM2020: L.ExtraMarkers.icon({
        icon: "ion-minus-circled",
        iconColor: "white",
        markerColor: "purple",
        shape: "circle"
      })
  };
  
  // Perform an API call to the county_cancer_data.csv information endpoint.
d3.csv("https://raw.githubusercontent.com/molleighH/Project-3/main/Resources/county_cancer_data.csv").then(function(Results) {
  
// When the first API call completes, perform another call to the Citi Bike station status endpoint.
d3.csv("https://raw.githubusercontent.com/molleighH/Project-3/main/Resources/county_cancer_data.csv").then(function(infoRes) {
      let ThreeCounties = Results.county;
      let Years = Results.year;
      let deathNumber = Results.death_number; 
  
      // Create an object to keep the number of markers in each layer.
      let deathCount = {
        CM2015: 0,
        CM2016: 0,
        CM2017: 0,
        CM2018: 0,
        CM2019: 0,
        CM2020: 0
      };
      
    // Initialize stationStatusCode, which will be used as a key to access the appropriate layers, icons, and station count for the layer group.
    let FinalDeathNumber; 

    // Define the Counties & EachYear
    const Counties = ["Oakland", "Wayne", "Washtenaw"];
    const EachYear = ["2015", "2016", "2017", "2018", "2019", "2020"];
    
    // Loop through each county.
    for (let i = 0; i < Counties.length; i++) {
        const county = Counties[i];
        
        // Loop through each year
        for (let j = 0; j < EachYear.length; j++) {
            const eachyear = EachYear[j];
            
            if (county === "Oakland" && eachyear === "2015") {
                deathNumber.CM2015++;
            } else if (county === "Oakland" && eachyear === "2016") {
                deathNumber.CM2016++;
            } else if (county === "Oakland" && eachyear === "2017") {
                deathNumber.CM2017++;
            } else if (county === "Oakland" && eachyear === "2018") {
                deathNumber.CM2018++;
            } else if (county === "Oakland" && eachyear === "2019") {
                deathNumber.CM2019++;
            } else if (county === "Oakland" && eachyear === "2020") {
                deathNumber.CM2020++;
            } else if (county === "Wayne" && eachyear === "2015") {
                deathNumber.CM2015++;
            } else if (county === "Wayne" && eachyear === "2016") {
                deathNumber.CM2016++;
            } else if (county === "Wayne" && eachyear === "2017") { 
                deathNumber.CM2017++;
            } else if (county === "Wayne" && eachyear === "2018") {
                deathNumber.CM2018++;
            } else if (county === "Wayne" && eachyear === "2019") {
                deathNumber.CM2019++;
            } else if (county === "Wayne" && eachyear === "2020") {
                deathNumber.CM2020++;
            } else if (county === "Washtenaw" && eachyear === "2015") {
                deathNumber.CM2015++;
            } else if (county === "Washtenaw" && eachyear === "2016") {
                deathNumber.CM2016++;
            } else if (county === "Washtenaw" && eachyear === "2017") {
                deathNumber.CM2017++;
            } else if (county === "Washtenaw" && eachyear === "2018") {
                deathNumber.CM2018++;
            } else if (county === "Washtenaw" && eachyear === "2019") {
                deathNumber.CM2019++;
            } else if (county === "Washtenaw" && eachyear === "2020") {
                deathNumber.CM2020++;
            }

        // Update the count.
        deathCount[deathNumber]++;

        let newMarker = L.marker([counties_coordinates.latitude, counties_coordinates.longitude], {
 
      // Call the updateLegend function, which will update the legend!
      updateLegend(updatedAt, stationCount);
    });
  });
  
  // Update the legend's innerHTML with the last updated time and station count.
  function updateLegend(time, stationCount) {
    document.querySelector(".legend").innerHTML = [
      "<p>Updated: " + moment.unix(time).format("h:mm:ss A") + "</p>",
      "<p class='out-of-order'>Out of Order Stations: " + stationCount.OUT_OF_ORDER + "</p>",
      "<p class='coming-soon'>Stations Coming Soon: " + stationCount.COMING_SOON + "</p>",
      "<p class='empty'>Empty Stations: " + stationCount.EMPTY + "</p>",
      "<p class='low'>Low Stations: " + stationCount.LOW + "</p>",
      "<p class='healthy'>Healthy Stations: " + stationCount.NORMAL + "</p>"
    ].join("");
  }
  
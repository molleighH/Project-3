//superfund locations
let url = "https://gispub.epa.gov/arcgis/rest/services/OEI/FRS_INTERESTS/MapServer/21/query?outFields=*&where=STATE_CODE%3D%27MI%27&f=geojson";

//Air quality data
let airData = "./data.csv";

// Asthma Data
let asthmaData = "./asthma_data.csv"

//Setting coordinates for counties
let counties_coordinates = {
    "Oakland": {"latitude": 42.5922, "longitude": 83.3362},
    "Wayne": {"latitude": 42.2791, "longitude": 83.3362},
    "Washtenaw": {"latitude": 42.3076, "longitude": 83.8473},
};


d3.json(url).then(function (data) {  // Corrected line
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

    //Load CSV data and add it to the map Air Data
    d3.csv(airData).then(function(csvData) {
        console.log(csvData);
        csvData.forEach(function(row) {
            var marker = L.marker(
                [row.Latitude, row.Longitude],
                {
                    opacity: 1,
                    // Customize your icon
                    icon: L.icon(
                        {
                            iconUrl: './lung.png', 
                            iconSize: [40, 60]
                        }
                    )
                }
            ).bindPopup(row.Title);
            marker.addTo(myMap);
        });

   //Load CSV data and add it to the map Asthma Data
   d3.csv(asthmaData).then(function(csvData) {
    console.log(csvData);
    csvData.forEach(function(row) {
        let county = row.geographic_area;
        let coords = counties_coordinates[county];

        //search data
        if(coords){var marker = L.marker(
            [coords.latitude, coords.longitude],
            {
                opacity: 1,
                // Customize your icon
                icon: L.icon(
                    {
                        iconUrl: './inhaler.png', 
                        iconSize: [40, 60]
                    }
                )
            }
        ).bindPopup(row.Title);
        marker.addTo(myMap);
    }
});
});

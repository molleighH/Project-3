//superfund location
let url = "https://gispub.epa.gov/arcgis/rest/services/OEI/FRS_INTERESTS/MapServer/21/query?outFields=*&where=STATE_CODE%3D%27MI%27&f=geojson";
//Air data
let airData = "./data.csv";
// Asthma Data
let asthmaData = "./asthma_data_clean.csv"


// Define myMap 
let myMap;

d3.json(url).then(function (data) {  
    console.log(data);
    myMap = L.map("map", {
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
}).then(function() {
    ///////////// air data
 // Load CSV data and add it to the map Air Data
 d3.csv(airData).then(function(csvData) {
    console.log(csvData);
    csvData.forEach(function(row) {
        var marker = L.marker(
            [row.Latitude, row.Longitude],
            {
                opacity: 1,
                // Customize icon
                icon: L.icon(
                    {
                        iconUrl: './lung.png', 
                        iconSize: [40, 60]
                    }
                )
            }
            ).bindPopup("Name: " + row['Method Name']); 
            marker.addTo(myMap);
        });
    });

////// asthma data
//Load CSV data and add it to the map Asthma Data
d3.csv(asthmaData).then(function(csvData) {
    console.log(csvData);
    csvData.forEach(function(row) {
        var marker = L.marker(
            [row.lat, row.long],
            {
                opacity: 1,
                // Customize icon
                icon: L.icon(
                    {
                        iconUrl: './inhaler.png', 
                        iconSize: [40, 60]
                    }
                )
            }
            ).bindPopup(row.Title);
            marker.addTo(myMap);
        });
    }).catch(function(error) {
        console.log(error);
    });
// update map
myMap.invalidateSize();
});

///legend
let legend = L.control({position: 'bottomright'});

legend.onAdd = function (map) {

    let div = L.DomUtil.create('div', 'info legend'),
        labels = ['<strong>Categories</strong>'],
        categories = ['<img src="./lung.png" alt="Lung Icon" width="20" height="20"><strong> Air Quality</strong>',
                      '<img src="./inhaler.png" alt="Inhaler Icon" width="20" height="20"><strong>Asthma Case</strong>'];

    for (let i = 0; i < categories.length; i++) {
        labels.push(categories[i]);
    }

    div.innerHTML = labels.join('<br>');
    return div;
};

legend.addTo(myMap);
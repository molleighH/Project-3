
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

    let filter = features.filter(obj => places.map(text => text.toUpperCase()).includes(obj.properties.COUNTY_NAME));
    
    L.geoJson(filter, {onEachFeature}).addTo(myMap);

    function onEachFeature(feature, layer) {
      layer.bindPopup(`<h3>${feature.properties.PRIMARY_NAME}</h3> <hr> <p>${feature.properties.LOCATION_ADDRESS}</p> <p>${feature.properties.CITY_NAME}, MI ${feature.properties.POSTAL_CODE}</p>`)
    };

  });

  const counties = "https://gisagocss.state.mi.us/arcgis/rest/services/OpenData/michigan_geographic_framework/MapServer/0/query?outFields=*&where=1%3D1&f=geojson"

  // Retrieving Michigan county GeoJSON data
  d3.json(counties).then(({features}) => {
    let filter = features.filter(obj => places.includes(obj.properties.NAME));

    L.geoJSON(filter, {
      style: function (feature) {
          return {fillColor: feature.properties.NAME == 'Wayne' ? 'red' : 'orange'}}
  }).addTo(myMap);
  });
  
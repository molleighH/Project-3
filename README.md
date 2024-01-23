# Project-3
* An overview of the project and its purpose
* Instructions on how to use and interact with the project
* At least one paragraph summarizing efforts for ethical considerations made in the project
* References for the data source(s)
* References for any code used that is not your own



# Disaster in Detroit?
### Overview of Project & Purpose 

<img align="right" width="650" height="350" src="https://github.com/molleighH/Project-3/blob/main/Resources/Images/DisasterDetroit.png">

<code style="color : aqua"> <samp>Our project was inspired by rates of asthma in Detroit, Michigan, whose asthma rates are among the highest in the country. The consensus for the cause of Detroit’s asthma rates are the presence of superfund sites. What is a superfund site? Superfund sites are sites that are located across the country that contain high concentrations of contaminants that pose a health risk to their surrounding communities. Let's examine potential health risks for Metro Detroiters as posed by Superfund Sites</samp> </code>

* <u> Project Purpose: </u> Investigate whether the presence of an above-average number of Superfund sites in the Metro Detroit area has a discernible impact on the health of the surrounding communities. 
    * To explore this relationship comprehensively, we analyze and visualize key health indicators:
        * Asthma Hospitalization Rates 
        * Cancer Mortality Data 
        * Air Quality Index Measurements.

    * Through this data visualization project, we aim to contribute valuable insights, in hopes of fostering a data-driven understanding that may inform future actions and policy decisions.




[Link to Disaster in Detroit? Dashboard](https://molleighH.github.io/leaflet-challenge/)


 ### Built With 
* PostgreSQL
* Leaflet
* HTML
* CSS
* JavaScript
* Plotly
* D3
* Chart.js
* GeoJSON
* Dropdown boxes

### Prerequisites
#### Make sure the following prerequisites are installed
* Code Editor (e.g. vscode, etc.)
* Browser (e.g. Google Chrome, etc.)
* [A mapbox API key](https://www.mapbox.com/)

### Installation
* Close repo and save to local directory
* Git clone the repo
* Open repo in code editor
* Add and save your mapbox API key in <code style="color : aqua">config.js</code> file inside of <code style="color : aqua">static/js</code> folder 
    * export <code style="color : aqua">const api_key = ' YOUR API KEY ';</code>
* Visit [local host](http://localhost:5000/) in your browser

## Features

### Interactive Map
Map is centered at GeoCoordinates [37.09, -95.71] (the United States), with a zoom level of 2.5. The size of each marker on the map is proportional to the magnitude of the earthquake. Earthquakes with higher magnitudes appear larger and earthquakes with lower magnitudes appear smaller. The legend on the map provides the earthquake's depth in kilometers; red indicates the depth is greater than 90km, yellow indicates the depth is greater than 70km, and green indicates the depth less than 10 km. Clicking on a marker will display the earthquake's location, date, time, depth (km), and magnitude (Richter). The map can be moved to explore different parts of the world by clicking and dragging. Their is a legend showing the depth (km) and the earthquakes corresponding depth color. 

## Credits
* Leaflet
* d3
* USGS
* Referenced a Plotly Library for dropdown code: https://plotly.com/javascript/dropdowns/#:~:text=Use%20Plotly%20to%20create%20custom,source%20graphing%20library%20for%20JavaScript.

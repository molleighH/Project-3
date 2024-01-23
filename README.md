# Disaster in Detroit?
### Overview of Project & Purpose 

<img align="right" width="650" height="350" src="https://github.com/molleighH/Project-3/blob/main/Resources/Images/DisasterDetroit.png">


[Link to Disaster in Detroit? Dashboard](https://molleighH.github.io/leaflet-challenge/)

<code style="color : aqua"> <samp>Our project was inspired by rates of asthma in Detroit, Michigan, whose asthma rates are among the highest in the country. The consensus for the cause of Detroit’s asthma rates are the presence of superfund sites. What is a superfund site? Superfund sites are sites that are located across the country that contain high concentrations of contaminants that pose a health risk to their surrounding communities. Let's examine potential health risks for Metro Detroiters as posed by Superfund Sites</samp> </code>

* <ins> Project Purpose:</ins>  Investigate whether the presence of an above-average number of Superfund sites in the Metro Detroit area has a discernible impact on the health of the surrounding communities. 
    * To explore this relationship comprehensively, we analyze and visualize key health indicators:
        * Asthma Hospitalization Rates 
        * Cancer Mortality Data 
        * Air Quality Index Measurements.

    * Through this data visualization project, we aim to contribute valuable insights, in hopes of fostering a data-driven understanding that may inform future actions and policy decisions

**Using the Disaster in Detroit Dashboard, you can use drop down menus, charts, maps, and tables to explore different years, counties, and data interactions to gain a better understanding of the relationship between Superfund sites and the health of surrounding communities.**
    ** 

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

### Ethical Considerations
* All health data was already stripped of all individual identifiers (PHI) & aggregated. 
* To account for the age bias/weight across different counties, asthma hospitalization & cancer death rates were age-adjusted. 
* All data used was publicly available & permissible to use; therefore, to our knowledge, HIPAA was not violated, nor any of its ethical considerations (such as confidentiality, respect for the individual’s privacy, and responsible handling of sensitive healthcare data.)


### Interactive Map
Map is centered at GeoCoordinates [37.09, -95.71] (the United States), with a zoom level of 2.5. The size of each marker on the map is proportional to the magnitude of the earthquake. Earthquakes with higher magnitudes appear larger and earthquakes with lower magnitudes appear smaller. The legend on the map provides the earthquake's depth in kilometers; red indicates the depth is greater than 90km, yellow indicates the depth is greater than 70km, and green indicates the depth less than 10 km. Clicking on a marker will display the earthquake's location, date, time, depth (km), and magnitude (Richter). The map can be moved to explore different parts of the world by clicking and dragging. Their is a legend showing the depth (km) and the earthquakes corresponding depth color. 

<img align="right" width="450" height="350" src="https://github.com/molleighH/Project-3/blob/main/Resources/Images/Citations.png">

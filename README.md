# Disaster in Detroit?
### Overview of Project & Purpose 

<img align="right" width="650" height="350" src="https://github.com/molleighH/Project-3/blob/main/Resources/Images/DisasterDetroit.png">

[Link to Disaster in Detroit? Dashboard](https://molleighH.github.io/Project-3/)

<code style="color : aqua"> <samp>Our project was inspired by rates of asthma in Detroit, Michigan, whose asthma rates are among the highest in the country. The consensus for the cause of Detroit’s asthma rates are the presence of superfund sites. What is a superfund site? Superfund sites are sites that are located across the country that contain high concentrations of contaminants that pose a health risk to their surrounding communities. Let's examine potential health risks for Metro Detroiters as posed by Superfund Sites</samp> </code>

* <ins> Project Purpose:</ins>  Investigate whether the presence of an above-average number of Superfund sites in the Metro Detroit area has a discernible impact on the health of the surrounding communities. 
    * To explore this relationship comprehensively, we analyze and visualize key health indicators:
        * Asthma Hospitalization Rates 
        * Cancer Mortality Data 
        * Air Quality Index Measurements.

    * Through this data visualization project, we aim to contribute valuable insights, in hopes of fostering a data-driven understanding that may inform future actions and policy decisions

 ### Built With 
* PostgreSQL
* Leaflet
* HTML
* CSS
* JavaScript
* Plotly
* D3
* Chart.js ** (new library)
* GeoJSON
* Dropdown boxes

### Ethical Considerations
* All health data was already stripped of all individual identifiers (PHI) & aggregated. 
* To account for the age bias/weight across different counties, asthma hospitalization & cancer death rates were age-adjusted. 
* All data used was publicly available & permissible to use; therefore, to our knowledge, HIPAA was not violated, nor any of its ethical considerations (such as confidentiality, respect for the individual’s privacy, and responsible handling of sensitive healthcare data.)

### Interactive Map & Visualizations 
Using the Disaster in Detroit Dashboard, you can use drop down menus, charts, maps, and tables to explore different years, counties, and datasets, in order to gain a better understanding of the relationship between Superfund sites and the health of surrounding communities.
* The interactive map is centered at GeoCoordinates [44.3, -85.6] (Center of Michigan), with a zoom level of 7. Each blue icon represents a Superfund Site. Hovering over the icon will display the name of the site, the county in which it is located, the interest types, the location address, and the active status of the Superfund Site. 
Lung icons represent the air quality data, while asthma icons represent the asthma hospitalization rates.
* The Grouped Bar chart shows number of days with each category of AQI in Wayne, Oakland and Washtenaw counties. The Grouped Bar chart uses D3, Chart.js, dropdown box, and legends. 
* The Line Chart depicts Maximum, Median and 90th percentile of AQI from years 2016 to 2023 
in Wayne, Oakland And Washtenaw counties. The Line Chart uses D3 and Plotly, dropdown box, and legends.
* The Asmthma chart visualizes the rates of asthma scross 3 counties in Metro Detroit. The Asmthma chart uses D3, Chart.js, legends, and the ability to click on a county that we are NO LONGER interested in viewing.
* The Asthma Hospitalization map includes the locations of the Superfund Sites represented as blue markers with a white dot in the center. The map also includes the county in which the Superfund Site is located, the counties are shaded to represent how asthmatic the residents in the respective counties are.
* Cancer Mortality Plotly Chart depicts the number of cancer deaths per 100,000 residents in Wayne, Oakland and Washtenaw, and the specific number for each county appear when you hover over the bars. Using the dropdown menu, you can navigate different years of Cancer data. The dashed line in the chart represents the number of Superfund Sites in each county.The plotly chart uses Plotly, dropdown box, and legends.

<img align="left" width="650" height="400" src="https://github.com/molleighH/Project-3/blob/main/Resources/Images/Citations.png">

// Initializes the page with Oakland County plot
function init() {
    data = [{
        x: [2016, 2017, 2018, 2019],
        y: [5.3, 6.2, 6.0, 5.8]}];
  
    layout = {
        title: "Age-Adjusted Rate of Hospitalization for Asthma from 2016 to 2019",
        xaxis: {
            title: "Year",
            dtick: 1
        },
        yaxis: {
            title: "Hospitalization Rate"
        }};
  
    Plotly.newPlot("plot", data, layout)};

// Call updatePlotly() when a change takes place to the DOM
d3.selectAll("#selDataset").on("change", updatePlotly);

// This function is called when a dropdown menu item is selected
function updatePlotly() {
    // Use D3 to select the dropdown menu
    let dropdownMenu = d3.select("#selDataset");
    // Assign the value of the dropdown menu option to a variable
    let dataset = dropdownMenu.property("value");

    // Initialize x and y arrays
    let x = [];
    let y = [];

    // Data to plot
    if (dataset === "Oakland County") {
        x = [2016, 2017, 2018, 2019];
        y = [5.3, 6.2, 6.0, 5.8];
    }

    if (dataset === "Washtenaw County") {
        x = [2016, 2017, 2018, 2019];
        y = [5.9, 5.7, 5.8, 5.1];
    }

    else if (dataset === "Wayne County") {
        x = [2016, 2017, 2018, 2019];
        y = [12.8, 13.3, 12.9, 13.1];
    }


    Plotly.restyle("plot", "x", [x]);
    Plotly.restyle("plot", "y", [y]);
  }

  init();
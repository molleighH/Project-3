Plotly.d3.csv('https://raw.githubusercontent.com/molleighH/Project-3/main/Resources/county_cancer_data.csv', function (err, rows) {

function unpack(rows, key) {
  return rows.map(function (row) {
    return row[key];
  });
}

var allCountyNames = Array.from(new Set(unpack(rows, 'county'))),
        allYears = Array.from(new Set(unpack(rows, 'year'))),
        superfundSites = {
          'Wayne': 205,
          'Oakland': 18,
          'Washtenaw': 16
        };

      function getAverageDeathRate(chosenYear, chosenCounty) {
        var countyData = rows.filter(row => row.year === chosenYear && row.county === chosenCounty);
        var deathRates = countyData.map(row => parseFloat(row.death_adjusted_rate));
        var averageDeathRate = deathRates.length > 0 ? deathRates.reduce((a, b) => a + b) / deathRates.length : 0;
        return averageDeathRate;
      }

      function setBubblePlot(chosenYear) {
        var traces = [];

        allCountyNames.forEach(county => {
          var averageDeathRate = getAverageDeathRate(chosenYear, county);

          traces.push({
            x: [county],
            y: [averageDeathRate],
            type: 'bar',
            name: county
          });
        });

        // Adding trend line for Superfund Sites
        var superfundTrace = {
          x: allCountyNames,
          y: allCountyNames.map(county => superfundSites[county]),
          type: 'scatter',
          mode: 'lines',
          name: 'Superfund Sites',
          line: { dash: 'dash' }
        };

        traces.push(superfundTrace);

        var layout = {
          title: 'Average Age-adjusted Cancer Deaths by County for Year ' + chosenYear,
          xaxis: {
            title: 'County'
          },
          yaxis: {
            title: 'Average Deaths by Cancer'
          }
        };

        Plotly.newPlot('plot', traces, layout);
      }

      function assignOptions(textArray, selector) {
        for (var i = 0; i < textArray.length; i++) {
          var currentOption = document.createElement('option');
          currentOption.text = textArray[i];
          selector.appendChild(currentOption);
        }
      }

      assignOptions(allYears, document.getElementById('yearSelector'));

      document.getElementById('yearSelector').addEventListener('change', function () {
        var selectedYear = document.getElementById('yearSelector').value;
        setBubblePlot(selectedYear);
      });

      // Set up the default plot for the initial year
      setBubblePlot(allYears[0]);
    });
  </script>

</body>

</html>














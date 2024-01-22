CREATE TABLE aqi_data (
    County VARCHAR(255) NOT NUll,
    Year INT NOT NULL,
	AQI_Days INT,
	Good_Days INT,
	Moderate_Days INT,
	Unhealthy_for_Sensitive_Groups_Days INT,
	Unhealthy_Days INT,
	Very_Unhealthy_Days INT,
	Hazardous_Days INT,
	Max_AQI INT,
	Ninetieth_Percentile_AQI INT,
	Median_AQI INT
);

DROP TABLE aqi_data;

SELECT * FROM aqi_data;
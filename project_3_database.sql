CREATE TABLE air_quality (
    state_code INT,  
	county_code INT,
	site_num INT, 
    parameter_code INT, 
    POC INT, 
    latitude FLOAT,
   	longitude FLOAT,
    datum VARCHAR(225),
   	parameter_name VARCHAR(225),
   	sample_duration VARCHAR(225), 
   	pollutant_standard VARCHAR(225), 
   	metric_used VARCHAR(225), 
   	method_name VARCHAR(225), 
   	year INT, 
   	units_of_measure VARCHAR(225), 
   	event_type VARCHAR(225), 
   	observation_count INT,  
  	observation_percent INT,  
   	completeness_indicator VARCHAR(225), 
   	valid_day_count INT,  
  	required_day_count INT,  
   	exceptional_data_count INT,  
   	null_data_count INT,  
   	primary_exceedance_count FLOAT,
   	secondary_exceedance_count FLOAT,
  	certification_indicator VARCHAR(225), 
   	num_obs_below_MDL INT, 
   	arithmetic_mean FLOAT,
   	arithmetic_standard_dev FLOAT,
   	first_max_value FLOAT,
   	first_max_datetime VARCHAR(225), 
   	firnd_max_value FLOAT,
	firnd_max_datetime VARCHAR(225), 
	third_max_value FLOAT,
	third_max_datetime VARCHAR(225), 
	fourth_max_value FLOAT,
	fourth_max_datetime VARCHAR(225),
	first_max_non_overlapping_value FLOAT,
	first_NO_max_datetime FLOAT,
	second_max_non_overlapping_value FLOAT,
	second_NO_max_datetime FLOAT,
	ninety_ninth_percentile FLOAT,
	ninety_eighth_percentile FLOAT,
	ninety_fifth_percentile FLOAT,
	nintieth_percentile FLOAT,
	seventy_fifth_percentile FLOAT,
	fiftieth_percentile FLOAT,
	tenth_percentile FLOAT,
	local_site_name VARCHAR(225), 
	address VARCHAR(225),                     
	state_name VARCHAR(225),                    
	county_name VARCHAR(225),                  
	city_name VARCHAR(225),                      
	CBSA_name VARCHAR(225),                      
	date_of_last_change VARCHAR(225)         
	)
);

CREATE TABLE cancer (
  	county VARCHAR(225),
	year INT,
	diagnosed_number FLOAT,
	diagnosed_adjusted_rate FLOAT,
	diagnosed_michigan_rate FLOAT,
	death_number FLOAT,
	death_adjusted_rate FLOAT,
	death_michigan_rate FLOAT
     )

);

CREATE TABLE asthma (
	geographic_area VARCHAR(225),
	year INT,
	gender VARCHAR(225),
	age_adjusted_rate VARCHAR(225)
	)
	
	
	
	
	
	
	
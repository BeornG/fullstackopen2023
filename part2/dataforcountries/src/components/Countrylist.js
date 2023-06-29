import weatherService from "../services/weather";
import { useState, useEffect } from "react";

const api_key = process.env.REACT_APP_API_KEY;

const Weather = (capital) => {
  console.log("Weather component capital prop value:", capital);

  const [weatherData, setWeatherData] = useState({}); // empty object as initial value

  // effect hook to retrieve weather data
  useEffect(() => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${capital.capital[0]}&appid=${api_key}`;
    weatherService
      .getWeather(url)
      .then((data) => {
        console.log("Weather component weatherData value:", data);
        setWeatherData(data);
      })
      .catch((error) => {
        console.log("Error retrieving weather data:", error);
      });
  }, [capital]);

  console.log("Weather component weatherData prop value:", weatherData);
  return (
    <div>
      <p>temperature: {(weatherData.main.temp - 273.15).toFixed(2)} Celsius</p>
      <img
        src={`http://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`}
        alt="weather icon"
      />
      <p>wind: wind: {(weatherData.wind.speed * 0.44704).toFixed(2)} kph </p>
    </div>
  );
};

// kelvin to celsius: subtract 273.15
// mph to m/s: multiply by 0.44704

const Countrylist = ({ countries, filter, setFilter }) => {
  console.log("Countrylist component countries prop value:", countries);
  console.log("Countrylist component filter prop value:", filter);
  console.log("Countrylist component setFilter prop value:", setFilter);

  // this filters the countries array based on the filter value
  const filteredCountries = countries.filter(
    (country) =>
      country.name &&
      typeof country.name.common === "string" &&
      country.name.common.toLowerCase().includes(filter.toLowerCase())
  );

  console.log(
    "Countrylist component filteredCountries value:",
    filteredCountries
  );

  return (
    <div>
      {filteredCountries.length > 10 ? ( // ternary operator to check if there are more than 10 countries in the filteredCountries array
        <p>Too many matches, specify another filter</p>
      ) : filteredCountries.length > 1 ? ( // ternary operator to check if there are more than 1 country in the filteredCountries array
        filteredCountries.map((country) => (
          <div key={country.name}>
            {country.name.common}
            <button onClick={() => setFilter(country.name.common)}>show</button>
          </div>
        ))
      ) : filteredCountries.length === 1 ? (// ternary operator to check if there is only one country in the filteredCountries array
        filteredCountries.map((country) => (
          <div key={country.name}>
            <h1>{country.name.common}</h1>
            <p>capital {country.capital}</p>
            <p>population {country.population}</p>
            <p>
              area {country.area} km<sup>2</sup>
            </p>
            <h2>languages</h2>
            <ul>
              {Object.values(country.languages).map((language) => ( // this is the list of languages
                <li key={language}>{language}</li>
              ))}
            </ul>
            <img src={country.flags.png} alt="flag" width="200" />
            <h2>Weather in {country.capital}</h2>
            <Weather capital={country.capital} />{/* this is the weather data */}
          </div>
        ))
      ) : (
        <p>No matches found</p>
      )}
    </div>
  );
};

export default Countrylist;

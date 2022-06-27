import React, { useState } from "react";
import axios from "axios";
import "../index.css";
interface Data {
  name: string;
  wind: {
    speed: number;
  };
  main: {
    temp: number;
    humidity: number;
  };
  weather: {
    main: string;
  }[];
}
const SearchInput = () => {
  const [data, setData] = useState<Data>();
  const [location, setLocation] = useState("");

  const key = process.env.REACT_APP_KEY;
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=${key}`;
  const searchLocation = (event: any) => {
    if (event.key === "Enter") {
      axios.get(url).then((response) => {
        setData(response.data);
        console.log(response.data);
        console.log(response);
      });
      setLocation("");
    }
  };

  return (
    <div className="app">
      <h1 className="title">
        Weather <span className="span-title">Forecast</span>
      </h1>
      <div className="search">
        <input
          value={location}
          onChange={(event) => setLocation(event.target.value)}
          onKeyPress={searchLocation}
          placeholder="Enter Location"
          type="text"
        />
      </div>
      {data !== undefined && (
        <div className="container">
          <div className="top">
            <div className="location">
              <p className="nameCity">{data.name}</p>
            </div>
            <div className="temp">
              {data.main ? (
                <h1>{(((data.main.temp - 32) * 5) / 9).toFixed()}°C</h1>
              ) : null}
            </div>
            <div className="description">
              {data.weather ? <p>{data.weather[0].main}</p> : null}
            </div>
          </div>
          {data.name !== undefined && (
            <div className="bottom">
              <div className="feels">
                {data.main ? (
                  <h1>{(((data.main.temp - 32) * 5) / 9).toFixed()}°C</h1>
                ) : null}
                <p>Feels Like</p>
              </div>
              <div className="humidity">
                {data.main ? (
                  <p className="bold">{data.main.humidity}%</p>
                ) : null}
                <p>Humidity</p>
              </div>
              <div className="wind">
                {data.wind ? (
                  <p className="bold">{data.wind.speed.toFixed()} MPH</p>
                ) : null}
                <p>Wind Speed</p>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
export default SearchInput;

import { useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import Spinner from "react-bootstrap/Spinner";
import "../index.css";
import sunny from "./assents/pictures/sunny.png";
import clouds from "./assents/pictures/cloud.png";

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
const getWeatherIcon = (weather: any) => {
  switch (weather) {
    case "Clear":
      return <img className="icon-sunny" src={sunny} />;
  }
};
const Fraces = () => {
  const [data, setData] = useState<Data>();
  const [spinner, setSpinner] = useState(true);

  const [location, setLocation] = useState("");
  const key = process.env.REACT_APP_KEY;
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=${key}`;
  const searchLocation = (event: any) => {
    if (event.key === "Enter") {
      axios.get(url).then((response) => {
        setData(response.data);
        setSpinner(true);
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
        <Spinner animation="border" variant="light" />
      </div>

      {data && (
        <div className="container">
          <div className="top">
            <div className="location">
              <p className="nameCity">{data.name}</p>
            </div>
            <div className="description">
              {getWeatherIcon(data.weather[0].main)}
            </div>
            <div className="temp">
              {data.main ? (
                <h1>{(((data.main.temp - 32) * 5) / 9).toFixed()}°C</h1>
              ) : null}
            </div>
          </div>
          {data.name !== undefined && (
            <div className="bottom">
              <div className="feels">
                <p>Feels Like</p>
                {data.main ? (
                  <h1>{(((data.main.temp - 32) * 5) / 9).toFixed()}°C</h1>
                ) : null}
              </div>
              <div className="humidity">
                <p>Humidity</p>
                {data.main ? (
                  <p className="bold">{data.main.humidity}%</p>
                ) : null}
              </div>
              <div className="wind">
                <p>Wind Speed</p>
                {data.wind ? (
                  <p className="bold">{data.wind.speed.toFixed()} MPH</p>
                ) : null}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Fraces;

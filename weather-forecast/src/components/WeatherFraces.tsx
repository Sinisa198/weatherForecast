import { useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import Spinner from "react-bootstrap/Spinner";
import "../index.css";
import sunny from "./assets/pictures/sunny.png";
import clouds from "./assets/pictures/cloud.png";
import rainy from "./assets/pictures/rainy.png";
import { ChangeEventHandler } from "react";
import snow from "./assets/pictures/snow.png";
import people from "./assets/pictures/people.png";
import humidity from "./assets/pictures/humidity.png";
import storm from "./assets/pictures/storm.png";
interface Data {
  name: string;
  wind: {
    speed: number;
  };
  main: {
    temp: number;
    feels_like: number;
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
    case "Clouds":
      return <img className="icon-sunny" src={clouds} />;
    case "Rain":
      return <img className="icon-sunny" src={rainy} />;
    case "Snow":
      return <img className="icon-sunny" src={snow} />;
  }
};
const toCelsus = (tempetature: any) => {
  {
    return (((tempetature - 32) * 5) / 9).toFixed();
  }
};

const WeatherFraces = () => {
  const [data, setData] = useState<Data>();
  const [loading, setLoading] = useState(true);

  const [location, setLocation] = useState("");
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=${process.env.REACT_APP_KEY}`;
  const searchLocation = (event: any) => {
    if (event.key === "Enter") {
      axios.get(url).then((response) => {
        setData(response.data);
        setLoading(false);
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
        {loading && <Spinner animation="border" variant="success" />}
      </div>

      {data && (
        <div className="container">
          <div className="top">
            <div className="location">
              <p className="nameCity">{data.name}</p>
            </div>
            <div className="image-icon">
              {getWeatherIcon(data.weather[0].main)}
            </div>
            <div className="temp">
              {data.main ? <h1>{toCelsus(data.main.temp)}°C</h1> : null}
            </div>
          </div>
          {data.name !== undefined && (
            <div className="bottom">
              <div className="feels">
                <p>Feels Like</p>
                {data.main ? (
                  <p className="bold">{toCelsus(data.main.feels_like)}°C</p>
                ) : null}
                <img src={people} className="people-icon" />
              </div>
              <div className="humidity">
                <p>Humidity</p>
                {data.main ? (
                  <p className="bold">{data.main.humidity}%</p>
                ) : null}
                <img src={humidity} className="humidity-icon" />
              </div>
              <div className="wind">
                <p>Wind Speed</p>
                {data.wind ? (
                  <p className="bold">{data.wind.speed.toFixed()} MPH</p>
                ) : null}
                <img src={storm} className="storm-icon" />
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default WeatherFraces;

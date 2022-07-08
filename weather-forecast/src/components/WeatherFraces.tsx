import "bootstrap/dist/css/bootstrap.min.css";
import "../index.css";
import { Link, useNavigate } from "react-router-dom";
import people from "../assets/people.png";
import humidity from "../assets/humidity.png";
import storm from "../assets/storm.png";
import { DebounceInput } from "react-debounce-input";
import { Spinner } from "react-bootstrap";
const WeatherFraces = ({
  data,
  setLocation,
  searchLocation,
  toCelsus,
  getWeatherIcon,
  location,
  loading,
}: any) => {
  const state = {
    ss: "",
  };
  return (
    <div className="app">
      <h1 className="title">
        Weather <span className="span-title">Forecast</span>
      </h1>
      <div className="search">
        <DebounceInput
          value={location}
          minLength={3}
          onKeyPress={searchLocation}
          placeholder="Enter Location"
          type="text"
          onChange={(event) => setLocation(event.target.value)}
        />
        {loading && <Spinner animation="border" variant="info" />}
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

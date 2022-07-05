import "bootstrap/dist/css/bootstrap.min.css";
import Spinner from "react-bootstrap/Spinner";
import "../index.css";
import people from "./assets/pictures/people.png";
import humidity from "./assets/pictures/humidity.png";
import storm from "./assets/pictures/storm.png";

const WeatherFraces = ({
  data,
  setLocation,
  searchLocation,
  toCelsus,
  getWeatherIcon,
}: any) => {
  return (
    <div className="app">
      <h1 className="title">
        Weather <span className="span-title">Forecast</span>
      </h1>

      <div className="search">
        <input
          onChange={(event) => setLocation(event.target.value)}
          onKeyPress={searchLocation}
          placeholder="Enter Location"
          type="text"
        />
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

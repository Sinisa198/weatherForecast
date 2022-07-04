import React, { useEffect, useState } from "react";
import sunny from "./assents/pictures/sunny.png";
import cloud from "./assents/pictures/cloud.png";
export const WeatherUrlPrefix =
  "https://api.openweathermap.org/data/2.5/forecast";

interface Fraces {
  temp: number;
  feels_like: number;
}
const WfForMyLocation = () => {
  const [weather, setWeather] = useState<Fraces>();
  const [input, setInput] = useState("Novi Sad");
  const [city, setCity] = useState("Novi Sad");

  useEffect(() => {
    const fetchWeather = async () => {
      const url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=dbfaecb66ad29b340d7b49ba320dce31&units=metric`;
      try {
        const result = await fetch(url);
        const data = await result.json();
        setWeather(data.list[0].main);
      } catch (err) {
        console.log(err);
      }
    };
    fetchWeather();
  }, [city]);

  const changeCity = (e: any) => {
    e.preventDefault();
    setCity(input);
  };

  return (
    <div className="second-container">
      <div className="fixed-container">
        <form onSubmit={(e) => changeCity(e)}>
          <input className="city-input" type="text" value={input} name="city" />
        </form>
        {weather && (
          <div className="weather-main">
            <img className="image-container" src={sunny} />
            <h4 className="temp2"> {weather.temp.toFixed()} °C</h4>
            <h5 className="feels-like"></h5>
          </div>
        )}
      </div>
    </div>
  );
};

export default WfForMyLocation;

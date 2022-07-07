import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  BrowserRouter,
} from "react-router-dom";
import News from "./components/news/News";
import { useState, ChangeEventHandler } from "react";
import WeatherFraces from "./components/WeatherFraces";
import WfForMyLocation from "./components/myLocation/WfForMyLocation";
import DarkMode from "./components/darkMode/DarkMode";
import axios from "axios";
import sunny from "./assets/sunny.png";
import clouds from "./assets/cloud.png";
import rainy from "./assets/rainy.png";
import snow from "./assets/snow.png";
import Test from "./test";
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
const App = () => {
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

  const setDark = () => {
    localStorage.setItem("theme", "dark");
    document.documentElement.setAttribute("data-theme", "dark");
  };

  const setLight = () => {
    localStorage.setItem("theme", "light");
    document.documentElement.setAttribute("data-theme", "light");
  };

  const storedTheme = localStorage.getItem("theme");

  const defaultDark = storedTheme === "dark" || storedTheme === null;
  const toggleTheme: ChangeEventHandler<HTMLInputElement> = (e) => {
    if (e.target.checked) {
      setDark();
    } else {
      setLight();
    }
  };
  return (
    <div className="App">
      <WeatherFraces
        data={data}
        setLocation={setLocation}
        searchLocation={searchLocation}
        getWeatherIcon={getWeatherIcon}
        toCelsus={toCelsus}
        location={location}
        loadin={loading}
      />
      <WfForMyLocation />

      <DarkMode onToggle={toggleTheme} darkDefault={defaultDark} />
      <News />
    </div>
  );
};

export default App;

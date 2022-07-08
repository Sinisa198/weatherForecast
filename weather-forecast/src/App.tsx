import "./App.css";
import News from "./components/news/News";
import "./index.css";
import { useState, ChangeEventHandler } from "react";
import WeatherFraces from "./components/WeatherFraces";
import WeatherSmallInfoBlock from "./components/myLocation/WeatherSmallInfoBlock";
import DarkMode from "./components/darkMode/DarkMode";
import axios from "axios";
import sunny from "./assets/sunny.png";
import clouds from "./assets/cloud.png";
import rainy from "./assets/rainy.png";
import snow from "./assets/snow.png";

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
  const [loading, setLoading] = useState(false);
  const [location, setLocation] = useState("");

  const url = (location: string) =>
    `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=${process.env.REACT_APP_KEY}`;

  const searchLocation = (location: string) => {
    setLoading(true);
    axios.get(url(location)).then((response) => {
      setData(response.data);
      setLoading(false);
    });
    setLocation("");
  };
  console.log(data, "data");
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

  const toCelsus = (tempetature: any) =>
    (((tempetature - 32) * 5) / 9).toFixed();

  const storedTheme = localStorage.getItem("theme");
  const defaultDark = storedTheme === "dark" || storedTheme === null;

  const toggleTheme: ChangeEventHandler<HTMLInputElement> = (e) => {
    localStorage.setItem("theme", e.target.checked ? "dark" : "light");
    document.documentElement.setAttribute(
      "data-theme",
      e.target.checked ? "dark" : "light"
    );
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
        loading={loading}
      />

      {data && (
        <WeatherSmallInfoBlock
          data={data}
          getWeatherIcon={getWeatherIcon}
          toCelsus={toCelsus}
        />
      )}

      <DarkMode onToggle={toggleTheme} darkDefault={defaultDark} />
      <News />
    </div>
  );
};

export default App;

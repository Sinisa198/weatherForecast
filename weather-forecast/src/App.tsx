import "./App.css";
import { useState } from "react";
import WeatherFraces from "./components/WeatherFraces";
import WfForMyLocation from "./components/MyLocation/WfForMyLocation";
import DarkMode from "./components/DarkMode/DarkMode";
import axios from "axios";
import sunny from "./components/assets/pictures/sunny.png";
import clouds from "./components/assets/pictures/cloud.png";
import rainy from "./components/assets/pictures/rainy.png";
import { ChangeEventHandler } from "react";
import snow from "./components/assets/pictures/snow.png";
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

  const prefersDark =
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches;

  const defaultDark =
    storedTheme === "dark" || (storedTheme === null && prefersDark);

  if (defaultDark) {
    setDark();
  }

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
      />
      <WfForMyLocation />
      <DarkMode onToggle={toggleTheme} darkDefault={defaultDark} />
    </div>
  );
};

export default App;

import "./App.css";
import WeatherFraces from "./components/WeatherFraces";
import WfForMyLocation from "./components/MyLocation/WfForMyLocation";
import DarkMode from "./components/DarkMode/DarkMode";
import Login from "./components/Login";
const App = () => {
  return (
    <div className="App">
      <WeatherFraces />
      <WfForMyLocation />
      <DarkMode />
    </div>
  );
};

export default App;

import "./App.css";
import DarkMode from "./components/DarMode";
import WeatherFraces from "./components/WeatherFraces";
import WfForMyLocation from "./components/WfForMyLocation";

const App = () => {
  return (
    <div className="App">
      <WeatherFraces />
      <WfForMyLocation />
    </div>
  );
};

export default App;

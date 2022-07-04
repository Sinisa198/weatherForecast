import "./App.css";
import WeatherFraces from "./components/WeatherFraces";
import WfForMyLocation from "./components/WfForMyLocation";
import DarkMode from "./components/DarkMode";
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

import "../../index.css";

interface Props {
  data: any;
  getWeatherIcon: any;
  toCelsus: any;
}
const WeatherSmallInfoBlock = (props: Props) => {
  return (
    <div className="second-container">
      <div className="fixed-container">
        <div className="weather-main">
          {props.getWeatherIcon(props.data.weather[0].main)}
          <h4 className="temp2">
            {props.toCelsus(props.data.main.temp.toFixed())} °C
          </h4>
        </div>
      </div>
    </div>
  );
};

export default WeatherSmallInfoBlock;

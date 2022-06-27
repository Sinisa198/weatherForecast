import { Spinner } from "react-bootstrap";
import WeatherFraces from "./WeatherFraces";

const SearchInput = (location: any, setLocation: any, searchLocation: any) => {
  return (
    <div className="search">
      <input
        value={location}
        onChange={(event) => setLocation(event.target.value)}
        onKeyPress={searchLocation}
        placeholder="Enter Location"
        type="text"
      />
      <Spinner animation="border" variant="light" />
    </div>
  );
};

export default SearchInput;

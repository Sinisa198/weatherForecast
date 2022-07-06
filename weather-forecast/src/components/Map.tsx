import "./styles.css";
import GoogleMapReact from "google-map-react";

// lat: 29.68402678282475
// lng: -8.320964890236837

export default function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <div style={{ width: "500px", height: "500px" }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyANrSZmh9Dzui1tXkC9H6R72Jv_03JxGcE" }}
          defaultCenter={{ lat: 29.68402678282475, lng: -8.320964890236837 }}
          defaultZoom={2}
          yesIWantToUseGoogleMapApiInternals
        ></GoogleMapReact>
      </div>
    </div>
  );
}

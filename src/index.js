import React from "react";
import ReactDOM from "react-dom";
import VehicleResults from "./Components/VehicleResults";
import "./styles.css";

function App() {
  return (
    <div className="App">
      {/* <h1>Vehicle Search Results</h1> */}
      <VehicleResults />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

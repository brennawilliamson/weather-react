import React from "react";
import ReactDOM from "react-dom";
import Weather from "./Weather";
import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Weather />
      <p className="footer">
        <a href="https://github.com/brennawilliamson/weather-react">
          Open-source code
        </a>{" "}
        by Brenna Williamson
      </p>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

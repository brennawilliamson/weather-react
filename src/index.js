import React from "react";
import ReactDOM from "react-dom";
import Weather from "./Weather";
import "bootstrap/dist/css/bootstrap.min.css";

import "./index.css";

function App() {
  return (
    <div className="App">
      <Weather defaultCity="New York" />
      <p className="footer">
        <a
          href="https://github.com/brennawilliamson/weather-react"
          target="_blank"
          rel="noopener noreferrer"
        >
          Open-source code
        </a>{" "}
        by Brenna Williamson
      </p>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

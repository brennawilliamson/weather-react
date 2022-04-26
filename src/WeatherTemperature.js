import React, { useState } from "react";

export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState("celsius");

  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function showCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  if (unit === "celsius") {
    return (
      <div className="weatherTemperature">
        <strong>{Math.round(props.celsius)}</strong>
        <span className="units">
          °C |{" "}
          <a href="/" onClick={showFahrenheit} className="fahrenheit">
            °F
          </a>
        </span>
      </div>
    );
  } else {
    let fahrenheit = (props.celsius * 9) / 5 + 32;

    return (
      <div className="weatherTemperature">
        <strong>{Math.round(fahrenheit)}</strong>
        <span className="units">
          <a href="/" onClick={showCelsius} className="fahrenheit">
            °C{" "}
          </a>{" "}
          | °F
        </span>
      </div>
    );
  }
}

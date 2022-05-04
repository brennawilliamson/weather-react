import React from "react";

export default function WeatherTemperature(props) {
  return (
    <div className="weatherTemperature">
      <strong>{Math.round(props.fahrenheit)}</strong>
      <span className="units">°F</span>
    </div>
  );
}

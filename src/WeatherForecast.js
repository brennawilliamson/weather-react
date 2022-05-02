import React from "react";
import "./WeatherForecast.css";

export default function WeatherForecast() {
  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col">
          <div className="WeatherForecast-day">Thu</div>
          <img
            src="http://openweathermap.org/img/wn/01d@2x.png"
            alt="icon"
            className="WeatherForecast-icon"
          />
          <div className="WeatherForecast-temp">
            <span className="WeatherForecast-temp-max">19°</span>
            <span className="WeatherForecast-temp-min">10°</span>
          </div>
        </div>
      </div>
    </div>
  );
}

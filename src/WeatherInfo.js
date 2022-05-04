import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div className="overview">
        <h1>{props.data.city}</h1>
        <ul>
          <h2>
            <span>
              <FormattedDate date={props.data.date} />
            </span>
          </h2>
          <h3 className="text-capitalize">{props.data.description}</h3>
        </ul>
      </div>
      <div className="row">
        <div className="col-6">
          <div className="d-flex weather-temperature">
            <img
              src={props.data.iconUrl}
              alt={props.data.description}
              className="float-left"
            />

            <div className="float-left">
              <WeatherTemperature fahrenheit={props.data.temperature} />
            </div>
          </div>
        </div>

        <div className="col-6">
          <ul>
            <li>Humidity: {props.data.humidity}%</li>
            <li>Wind: {Math.round(props.data.wind)} mph</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

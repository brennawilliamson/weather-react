import React from "react";
import FormattedDate from "./FormattedDate";

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
              <strong>{Math.round(props.data.temperature)}</strong>
              <span className="units"> °F</span>
            </div>
          </div>
        </div>

        <div className="col-6">
          <ul>
            <li>Humidity: {props.data.humidity}%</li>
            <li>Wind: {Math.round(props.data.wind)} km/h</li>
            <li>Feels Like: {Math.round(props.data.feels)} °C</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

import React from "react";

import "./Weather.css";

export default function Weather() {
  let weatherData = {
    city: "New York",
    temperature: 19,
    date: "Tuesday 10:00",
    description: "Cloudy",
    imgUrl: "https://ssl.gstatic.com/onebox/weather/64/sunny.png",
    humidity: 80,
    wind: 10,
  };

  return (
    <div className="Weather">
      <div className="weather-app-wrapper">
        <div className="weather-app">
          <form>
            <div className="row">
              <div className="col-6">
                <input
                  type="search"
                  placeholder="Type a city..."
                  className="form-control"
                  autoComplete="off"
                />
              </div>
              <div className="col-2">
                <button type="submit" className="btn btn-light">
                  Search
                </button>
              </div>
              <div className="col-4">
                <button type="submit" className="btn btn-outline-light ms-2">
                  Current
                </button>
              </div>
            </div>
          </form>
          <div className="overview">
            <h1>{weatherData.city}</h1>
            <ul>
              <h2>
                <span>Last updated: {weatherData.date}</span>
              </h2>
              <h3>{weatherData.description}</h3>
            </ul>
          </div>
          <div className="row">
            <div className="col-6">
              <div className="d-flex weather-temperature">
                <img
                  src={weatherData.imgUrl}
                  alt={weatherData.description}
                  className="float-left"
                />
                <div className="float-left">
                  <strong>{weatherData.temperature}</strong>
                  <span className="units"> °F</span>
                </div>
              </div>
            </div>

            <div className="col-6">
              <ul>
                <li>Humidity: {weatherData.humidity}%</li>
                <li>Wind: {weatherData.wind} mph</li>
                <li>Feels Like: 60°F</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });

  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      date: "Wednesday 7:00",
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      city: response.data.name,
      feels: response.data.main.feels_like,
      description: response.data.weather[0].description,
      iconUrl: "https://ssl.gstatic.com/onebox/weather/48/partly_cloudy.png",
    });
  }

  if (weatherData.ready) {
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
                  <span>{weatherData.date}</span>
                </h2>
                <h3 className="text-capitalize">{weatherData.description}</h3>
              </ul>
            </div>
            <div className="row">
              <div className="col-6">
                <div className="d-flex weather-temperature">
                  <img
                    src={weatherData.iconUrl}
                    alt={weatherData.description}
                    className="float-left"
                  />
                  <div className="float-left">
                    <strong>{Math.round(weatherData.temperature)}</strong>
                    <span className="units"> °F</span>
                  </div>
                </div>
              </div>

              <div className="col-6">
                <ul>
                  <li>Humidity: {weatherData.humidity}%</li>
                  <li>Wind: {Math.round(weatherData.wind)} km/h</li>
                  <li>Feels Like: {Math.round(weatherData.feels)} °C</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "ec69812db7fd144177914635cab17886";

    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric `;

    axios.get(apiUrl).then(handleResponse);

    return "Loading";
  }
}

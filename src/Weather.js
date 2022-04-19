import React from "react";
import axios from "axios";

export default function Weather(props) {
  function handleResponse(response) {
    alert(
      `The weather in in ${response.data.name} is ${response.data.main.temp} `
    );
  }

  let units = "imperial";
  let apiKey = "ec69812db7fd144177914635cab17886";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&units=${units} `;

  axios.get(apiUrl).then(handleResponse);
  return <h2>Hello from Weather</h2>;
}

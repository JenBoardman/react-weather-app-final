import React, { useState } from "react";
import axios from "axios";
import FormatDate from "./FormatDate";
import FormatTime from "./FormatTime";
import "./Weather.css";

export default function Weather(props) {
  const [ready, setReady] = useState(false);
  const [weatherData, setWeatherData] = useState({ ready: false });
  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      ready: true,
      temperature: response.data.temperature.current,
      wind: response.data.wind.speed,
      humidity: response.data.temperature.humidity,
      city: response.data.city,
      description: response.data.condition.description,
      iconUrl: "https://ssl.gstatic.com/onebox/weather/64/cloudy.png",
      iconDescription: response.data.condition.description,
      date: new Date(response.data.time * 1000),
    });
    setReady(true);
  }

  if (weatherData.ready) {
    return (
      <div className="weather">
        <div className="search-box">
          <form>
            <div className="row">
              <div className="col-10">
                <input
                  type="search"
                  placeholder="Enter a City..."
                  className="form-control"
                  autoFocus="on"
                />
              </div>
              <div className="col-2">
                <input
                  type="submit"
                  value="Search"
                  className="btn btn-primary w-100"
                />
              </div>
            </div>
          </form>
        </div>
        <div className="today-weather">
          <div className="row">
            <div className="col-4">
              <h1>{weatherData.city}</h1>
              <ul>
                <li>
                  <strong>
                    <FormatDate date={weatherData.date} />
                  </strong>
                </li>
                <li>
                  <span>
                    Last updated <FormatTime date={weatherData.date} />
                  </span>
                </li>
              </ul>
            </div>
            <div className="col-5">
              <p>
                <strong>
                  <img
                    src={weatherData.iconUrl}
                    alt={weatherData.iconDescription}
                  />
                  <span className="today-temp">
                    {Math.round(weatherData.temperature)}
                  </span>
                </strong>{" "}
                <span className="unit">°C | °F</span>
              </p>
            </div>
            <div className="col-3">
              <div className="weather-description">
                <p className="text-capitalize">{weatherData.description}</p>
                <ul>
                  <li>
                    <strong>Humidity:</strong> {weatherData.humidity}%
                  </li>
                  <li>
                    <strong>Wind:</strong> {Math.round(weatherData.wind)} mph
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    const apikey = "0622tcaa31a9d02f3oa3ff0e63b0bb64";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${props.defaultCity}&key=${apikey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading...";
  }
}

import React, { useState } from "react";
import axios from "axios";
import WeatherInfo from "./WeatherInfo";
import "./Weather.css";
import WeatherForcast from "./WeatherForcast";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);
  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      ready: true,
      coordinates: response.data.coordinates,
      temperature: response.data.temperature.current,
      wind: response.data.wind.speed,
      humidity: response.data.temperature.humidity,
      city: response.data.city,
      description: response.data.condition.description,
      iconUrl: response.data.condition.icon_url,
      iconDescription: response.data.condition.description,
      date: new Date(response.data.time * 1000),
    });
  }

  function search() {
    const apikey = "0622tcaa31a9d02f3oa3ff0e63b0bb64";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apikey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  if (weatherData.ready) {
    return (
      <div className="weather">
        <div className="search-box">
          <form onSubmit={handleSubmit}>
            <div className="row">
              <div className="col-10">
                <input
                  type="search"
                  placeholder="Enter a City..."
                  className="form-control"
                  autoFocus="on"
                  onChange={handleCityChange}
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
        <WeatherInfo data={weatherData} />
        <WeatherForcast coordinates={weatherData.coordinates} />
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}

import React from "react";
import axios from "axios";
import "./Weather.css";

export default function Weather() {
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
            <h1>London</h1>
            <ul>
              <li>
                <strong>Monday, Feb 19</strong>
              </li>
              <li>
                <span>Last updated 15:02 </span>
              </li>
            </ul>
          </div>
          <div className="col-5">
            <p>
              <strong>
                <img
                  src="https://ssl.gstatic.com/onebox/weather/64/cloudy.png"
                  alt="Cloudy"
                />
                <span className="today-temp">10</span>
              </strong>{" "}
              <span className="unit">°C | °F</span>
            </p>
          </div>
          <div className="col-3">
            <div className="weather-description">
              <p>Cloudy</p>
              <ul>
                <li>
                  <strong>Humidity</strong> 91%
                </li>
                <li>
                  <strong>Wind</strong> 2mph
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

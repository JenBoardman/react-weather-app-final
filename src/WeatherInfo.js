import React from "react";
import "./Weather.css";
import FormatDate from "./FormatDate";
import FormatTime from "./FormatTime";
import WeatherTempereture from "./WeatherTempreture.js";

export default function WeatherInfo(props) {
  return (
    <div className="weatherInfo">
      <div className="today-weather">
        <div className="row">
          <div className="col-4">
            <h1>{props.data.city}</h1>
            <ul>
              <li>
                <strong>
                  <FormatDate date={props.data.date} />
                </strong>
              </li>
              <li>
                <span>
                  Last updated <FormatTime date={props.data.date} />
                </span>
              </li>
            </ul>
          </div>
          <div className="col-5">
            <WeatherTempereture
              celsius={props.data.temperature}
              img={props.data.iconUrl}
              tag={props.data.iconDescription}
            />
          </div>
          <div className="col-3">
            <div className="weather-description">
              <p className="text-capitalize">{props.data.description}</p>
              <ul>
                <li>
                  <strong>Humidity:</strong> {props.data.humidity}%
                </li>
                <li>
                  <strong>Wind:</strong> {Math.round(props.data.wind)} mph
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

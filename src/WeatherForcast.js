import React from "react";
import "./WeatherForcast.css";
import axios from "axios";

export default function WeatherForcast(props) {
  function handleResponse(response) {
    console.log(response.data);
  }
  console.log(props);

  let apiKey = "0622tcaa31a9d02f3oa3ff0e63b0bb64";
  let long = props.coordinates.longitude;
  let lat = props.coordinates.latitude;
  let apiUrl = `https://api.shecodes.io/weather/v1/forecast?lon=${long}&lat=${lat}&key=${apiKey}&units=metric`;

  axios.get(apiUrl).then(handleResponse);

  return (
    <div className="WeatherForcast">
      <div className="row">
        <div className="col">
          <img
            src="https://ssl.gstatic.com/onebox/weather/64/cloudy.png"
            alt="test"
          />
          <div className="forcastDay">Mon</div>
          <div className="forcastTempreture">
            <span className="temperatureMax">19°</span> |{" "}
            <span className="temperatureMin">10°</span>
          </div>
        </div>
      </div>
    </div>
  );
}

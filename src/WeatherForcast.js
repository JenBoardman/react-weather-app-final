import React, { useState } from "react";
import WeatherForcastDay from "./WeatherForcastDay";
import "./WeatherForcast.css";
import axios from "axios";

export default function WeatherForcast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forcast, setForcast] = useState(null);

  function handleResponse(response) {
    setForcast(response.data.daily);
    setLoaded(true);
  }

  if (loaded) {
    return (
      <div className="WeatherForcast">
        <div className="row">
          {forcast.map(function (dailyforcast, index) {
            if (index < 5) {
              return (
                <div className="col" key={index}>
                  <WeatherForcastDay data={dailyforcast} />
                </div>
              );
            }
          })}
        </div>
      </div>
    );
  } else {
    let apiKey = "0622tcaa31a9d02f3oa3ff0e63b0bb64";
    let long = props.coordinates.longitude;
    let lat = props.coordinates.latitude;
    let apiUrl = `https://api.shecodes.io/weather/v1/forecast?lon=${long}&lat=${lat}&key=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse);

    return null;
  }
}

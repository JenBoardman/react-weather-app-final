import React, { useState } from "react";

export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState("celsius");
  function showFarenheit(event) {
    event.preventDefault();
    setUnit("farenheit");
  }
  function showCelcius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  if (unit === "celsius") {
    return (
      <div className="WeatherTemperature">
        <p>
          <img src={props.img} alt={props.tag} />
          <strong>
            <span className="today-temp">{Math.round(props.celsius)}</span>
          </strong>{" "}
          <span className="unit">
            °C |{" "}
            <a href="/" onClick={showFarenheit}>
              °F
            </a>
          </span>
        </p>
      </div>
    );
  } else {
    let farenheit = (props.celsius * 9) / 5 + 32;
    return (
      <div className="WeatherTemperature">
        <p>
          <img src={props.img} alt={props.tag} />
          <strong>
            <span className="today-temp">{Math.round(farenheit)}</span>
          </strong>{" "}
          <span className="unit">
            <a href="/" onClick={showCelcius}>
              °C
            </a>{" "}
            | °F
          </span>
        </p>
      </div>
    );
  }
}

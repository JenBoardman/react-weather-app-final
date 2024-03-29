import React from "react";

export default function FormatTime(props) {
  let hours = props.date.getHours();
  if (hours < 10) {
    minutes = `0${hours}`;
  }
  let minutes = props.date.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  return `${hours}:${minutes}`;
}

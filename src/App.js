import React from "react";
import "./App.css";
import Weather from "./Weather";
import Footer from "./Footer";
import background from "./images/forest.jpg";

export default function App() {
  return (
    <div
      className="App"
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        minHeight: "100vh",
      }}
    >
      <div className="container">
        <Weather defaultCity="London" />
        <Footer />
      </div>
    </div>
  );
}

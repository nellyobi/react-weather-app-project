import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App"> 
    <div className="container">
    
    <h1> Weather App </h1>
    <Weather defaultCity="London" />
    <footer>
      This project was coded by <a href="https://github.com/nellyobi"target="_blank" rel="noreferrer"> Nelly </a>  and is {" "}
      <a href="https://github.com/nellyobi/react-weather-app-project" rel="noreferrer">
open-sourced on Github
    </a> 
    </footer>
    </div>
    </div>
  );
}



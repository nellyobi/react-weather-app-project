import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";

export default function Weather(props) {
    const [weatherData, setWeatherData] = useState({ ready: false });
    const [city, setCity] = useState(props.defaultCity);
  
    function handleResponse(response) {
      setWeatherData({
        ready: true,
        coordinates: response.data.coord,
        temperature: response.data.main.temp,
        humidity: response.data.main.humidity,
        date: new Date(response.data.dt * 1000),
        description: response.data.weather[0].description,
        icon: response.data.weather[0].icon,
        wind: response.data.wind.speed,
        city: response.data.name,
      });
    }
  
    function handleSubmit(event) {
      event.preventDefault();
      search();
    }
  
    function handleCityChange(event) {
      setCity(event.target.value);
    }
  
    function search() {
        const apiKey = "5ef4de8cd6b7fefcd7c42f98cf464ce8";
        let apiUrl = `https://api.shecodes.io/weather/v1/current?query={London}&key={apiKey}`;
        axios.get(apiUrl).then(handleResponse);
      }
  
    if (weatherData.ready) {
      return (
        <div className="Weather">
          <form onSubmit={handleSubmit}>
            <div className="row">
              <div className="col-9">
                <input
                  type="search"
                  placeholder="Enter a city.."
                  className="form-control"
                  autoFocus="on"
                  onChange={handleCityChange}
                />
              </div>
              <div className="col-3">
                <input
                  type="submit"
                  value="Search"
                  className="btn btn-primary w-100"
                />
              </div>
            </div>
          </form>
          </div>
      );
    } else {
      search();
      return "Loading...";
    }
  }
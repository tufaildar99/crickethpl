import React, { useEffect, useState } from "react";
import "./Weather.css";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

const Weather = () => {
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    const fetchWeatherData = async () => {
      const response = await fetch(
        "http://api.weatherapi.com/v1/current.json?key=2995c51a256d48adb3a32213241209&q=Sopore&aqi=no"
      );

      const data = await response.json();
      setWeatherData(data);
    };

    fetchWeatherData();
  }, []);

  return (
    <>
      <Header />
      <div className="weather-container">
        {weatherData ? (
          <div className="weather-details">
            <div className="weather-info">
              <img
                src={weatherData.current.condition.icon}
                alt={weatherData.current.condition.text}
              />
              <div className="weather-temp">
                <p>{weatherData.current.temp_c}°C</p>
                <p>{weatherData.current.condition.text}</p>
              </div>
            </div>
            <div className="weather-stats">
              <p>
                Wind: {weatherData.current.wind_kph} kph{" "}
                {weatherData.current.wind_dir}
              </p>
              <p>Humidity: {weatherData.current.humidity}%</p>
              <p>Pressure: {weatherData.current.pressure_mb} mb</p>
              <p>Visibility: {weatherData.current.vis_km} km</p>
            </div>
          </div>
        ) : (
          <p>Loading weather data...</p>
        )}
      </div>
      <Footer />
    </>
  );
};

export default Weather;

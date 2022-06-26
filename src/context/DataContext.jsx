import { createContext, useEffect, useState } from "react";
import axios from "axios";

const WeatherContext = createContext();

export const WeatherProvider = (props) => {
  const [weatherData, setWeatherData] = useState("test data");
  const [selectedCity, setSelectedCity] = useState("İzmir");

  const values = {
    weatherData,
    selectedCity,
    setSelectedCity,
    setWeatherData,
  };

  useEffect(() => {
    // axios();
  }, [selectedCity]);

  return (
    <WeatherContext.Provider value={values}>
      {props.children}
    </WeatherContext.Provider>
  );
};

export default WeatherContext;

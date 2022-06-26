import { createContext, useEffect, useState } from "react";

const WeatherContext = createContext();

export const WeatherProvider = (props) => {
  const [weatherData, setWeatherData] = useState("test data");
  const [selectedCity, setSelectedCity] = useState("İzmir");

  const values = {
    weatherData: weatherData,
    setWeatherData: setWeatherData,
    selectedCity: selectedCity,
    setSelectedCity: setSelectedCity,
  };

  // useEffect(() => {
  //   console.log("object");
  // }, []);

  return (
    <WeatherContext.Provider value={values}>
      {props.children}
    </WeatherContext.Provider>
  );
};

export default WeatherContext;

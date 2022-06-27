import { createContext, useEffect, useState } from "react";
import axios from "axios";

const WeatherContext = createContext();

export const WeatherProvider = (props) => {
  const [weatherData, setWeatherData] = useState({
    max_temp: "",
    min_temp: "",
    datetime: "",
    weather: { icon: "" },
  });
  const [selectedCity, setSelectedCity] = useState("İzmir");

  const values = {
    weatherData,
    selectedCity,
    setSelectedCity,
    setWeatherData,
  };

  useEffect(() => {
    axios(
      `https://api.weatherbit.io/v2.0/forecast/daily?city=${selectedCity}&lang=en&units=M&days=1&key=${process.env.REACT_APP_API_KEY}`
    )
      .then((res) => setWeatherData(res.data.data[0]))
      .catch((err) => console.log(err));
  }, [selectedCity]);

  return (
    <WeatherContext.Provider value={values}>
      {props.children}
    </WeatherContext.Provider>
  );
};

export default WeatherContext;

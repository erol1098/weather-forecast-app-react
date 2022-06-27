import { createContext, useEffect, useState } from "react";
import axios from "axios";

const WeatherContext = createContext();

export const WeatherProvider = (props) => {
  // const [weatherData, setWeatherData] = useState([
  //   {
  //     max_temp: "",
  //     min_temp: "",
  //     datetime: "",
  //     weather: { icon: "" },
  //   },
  // ]);
  const [weatherData, setWeatherData] = useState([
    {
      app_max_temp: 30.5,
      app_min_temp: 21.7,
      clouds: 3,
      clouds_hi: 0,
      clouds_low: 1,
      clouds_mid: 6,
      datetime: "2022-06-27",
      dewpt: 13.2,
      high_temp: 31.9,
      low_temp: 22.9,
      max_dhi: null,
      max_temp: 31.9,
      min_temp: 21.6,
      moon_phase: 0.00223158,
      moon_phase_lunation: 0.96,
      moonrise_ts: 1656292246,
      moonset_ts: 1656350978,
      ozone: 321.1,
      pop: 0,
      precip: 0,
      pres: 1010.6,
      rh: 45,
      slp: 1012.2,
      snow: 0,
      snow_depth: 0,
      sunrise_ts: 1656298054,
      sunset_ts: 1656351512,
      temp: 26.9,
      ts: 1656277260,
      uv: 10.5,
      valid_date: "2022-06-27",
      vis: 24.128,
      weather: { icon: "c02d", code: 801, description: "Few clouds" },
      wind_cdir: "SSE",
      wind_cdir_full: "south-southeast",
      wind_dir: 150,
      wind_gust_spd: 6.5,
      wind_spd: 3.9,
    },
  ]);
  const [selectedCity, setSelectedCity] = useState("İzmir");

  const values = {
    weatherData,
    selectedCity,
    setSelectedCity,
    setWeatherData,
  };

  useEffect(() => {
    axios(
      `https://api.weatherbit.io/v2.0/forecast/daily?city=${selectedCity}&lang=en&units=M&days=10&key=${process.env.REACT_APP_API_KEY}`
    )
      .then((res) => setWeatherData(res.data.data))
      .catch((err) => console.log(err));
  }, [selectedCity]);
  return (
    <WeatherContext.Provider value={values}>
      {props.children}
    </WeatherContext.Provider>
  );
};

export default WeatherContext;

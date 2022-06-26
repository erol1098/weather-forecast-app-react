import React, { useContext } from "react";

import WeatherContext from "../../context/DataContext";
const Card = () => {
  const { weatherData, selectedCity } = useContext(WeatherContext);
  return <div>{selectedCity}</div>;
};

export default Card;

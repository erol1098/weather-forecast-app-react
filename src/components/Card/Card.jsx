import React, { useContext } from "react";
import DataContext from "../../context/DataContext";
const Card = () => {
  const { weatherData } = useContext(DataContext);
  return <div>{weatherData}</div>;
};

export default Card;

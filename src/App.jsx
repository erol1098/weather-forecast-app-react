import React from "react";
import styles from "./App.module.css";
import Card from "./components/Card/Card";
import Dropdown from "./components/Dropdown/Dropdown";
import { WeatherProvider } from "./context/DataContext";
const App = () => {
  return (
    <WeatherProvider>
      <Dropdown />
      <Card />
    </WeatherProvider>
  );
};

export default App;

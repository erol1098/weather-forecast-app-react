import React from "react";
import Container from "./components/Container/Container";
// import styles from "./App.module.css";

import Dropdown from "./components/Dropdown/Dropdown";
import { WeatherProvider } from "./context/DataContext";
const App = () => {
  return (
    <WeatherProvider>
      <Dropdown />
      <Container />
    </WeatherProvider>
  );
};

export default App;

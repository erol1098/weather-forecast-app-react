import React from "react";
import Container from "./components/Container/Container";

import Dropdown from "./components/Dropdown/Dropdown";
import Header from "./components/Header/Header";
import { WeatherProvider } from "./context/DataContext";
const App = () => {
  return (
    <WeatherProvider>
      <Header />
      <Dropdown />
      <Container />
    </WeatherProvider>
  );
};

export default App;

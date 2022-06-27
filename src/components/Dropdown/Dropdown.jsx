import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import WeatherContext from "../../context/DataContext";
import styles from "./Dropdown.module.css";
const Dropdown = () => {
  const { selectedCity, setSelectedCity } = useContext(WeatherContext);

  const [cities, setCities] = useState([]);

  useEffect(() => {
    axios("https://countriesnow.space/api/v0.1/countries/states").then((res) =>
      setCities(
        res.data.data
          .filter((country) => country.name === "Turkey")[0]
          .states.map((state) =>
            state.name.slice(0, state.name.indexOf(" Province"))
          )
      )
    );
  }, []);

  const selectedCityHandler = (e) => {
    setSelectedCity(e.target.value);
  };

  return (
    <form className={styles.form}>
      <select
        className={styles.select}
        onChange={selectedCityHandler}
        name="cities"
        id="cities"
        autoFocus
        value={selectedCity}
      >
        {cities.map((city, index) => (
          <option key={index + 1} value={city}>
            {city}
          </option>
        ))}
      </select>
    </form>
  );
};

export default Dropdown;

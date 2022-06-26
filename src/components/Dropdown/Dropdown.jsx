import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import WeatherContext from "../../context/DataContext";

const Dropdown = () => {
  const { setSelectedCity } = useContext(WeatherContext);

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
    <form>
      <select
        onChange={selectedCityHandler}
        name="cities"
        id="cities"
        autoFocus
      >
        <option value={null}>Select A City</option>
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

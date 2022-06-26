import axios from "axios";
import React, { useEffect, useState } from "react";

const Dropdown = () => {
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

  return (
    <form>
      <select name="cities" id="cities">
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

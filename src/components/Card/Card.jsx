import React, { useContext } from "react";
import WeatherContext from "../../context/DataContext";
import styles from "./Card.module.css";
const Card = () => {
  const { weatherData } = useContext(WeatherContext);
  return (
    <>
      {weatherData.map((day) => {
        const {
          max_temp: max,
          min_temp: min,
          weather: { icon },
          datetime,
        } = day;

        const parts = datetime.split("-");
        const date = new Date(parts[0], parts[1] - 1, parts[2]).toLocaleString(
          "en-us",
          { weekday: "short" }
        );

        return (
          <section className={styles.card}>
            <div className={styles.date}>{date}</div>
            <img
              src={`https://www.weatherbit.io/static/img/icons/${icon}.png`}
              alt="test"
            />
            <div className={styles.degrees}>
              <span className={styles.max}>{Math.round(max)}°C</span>
              <span className={styles.min}>{Math.round(min)}°C</span>
            </div>
          </section>
        );
      })}
    </>
  );
};

export default Card;

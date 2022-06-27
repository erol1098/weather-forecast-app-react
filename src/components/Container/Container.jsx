import React from "react";
import Card from "../Card/Card";
import styles from "./Container.module.css";
const Container = () => {
  return (
    <main className={styles.container}>
      <Card />
    </main>
  );
};

export default Container;

import React from "react";
import styles from "./ParallaxPage.module.css";
import Timeline from "../components/Timeline";
import Carousel from "../components/Carousel";

function PreSold() {
  return (
    <div className={styles.appContainer}>
      <Timeline />
      <Carousel />
    </div>
  );
}

export default PreSold;

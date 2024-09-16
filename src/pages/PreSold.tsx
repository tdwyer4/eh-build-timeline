import React from "react";
import styles from "./PageStyles.module.css";
import Timeline from "../components/Timeline";
import Carousel from "../components/Carousel";
import VidSection from "../components/VidSection";
import VideoScroll from "../components/VideoScroll";

function PreSold() {
  return (
    <>
      <Carousel />

      <Timeline />

      <Carousel />

      <VideoScroll />

      <VidSection />
    </>
  );
}

export default PreSold;

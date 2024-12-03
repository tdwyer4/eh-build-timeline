import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import styles from "./FullPageStyles.module.css";
import IntroCards from "../components/IntroCards/IntroCards";
import { VideoCarousel } from "../components/VideoCarousel/VideoCarousel";
import ProcessCards from "../components/ProcessCards/ProcessCards";
import ChoosePath from "../components/ChoosePath/ChoosePath";
import ScrollInfo from "../components/ScrollInfo/ScrollInfo";
import PAList from "../components/PAList/PAList";
import ZoomScroll from "../components/ZoomScroll/ZoomScroll";
import PadVideo from "../media/Pad.mp4";
import FramingRoughVideo from "../media/Framing.mp4";
import { Communication } from "../components/Communication/Communication";
import { FootingVideo } from "../components/VidSection/FootingVideo";
import { FramingVideo } from "../components/VidSection/FramingVideo";
import ConstructionQuality from "../components/ConstructionQuality/ConstructionQuality";
import { Warranty } from "../components/Warranty/Warranty";
import Closing from "../components/Closing/Closing";
import CTA from "../components/Cta/Cta";
import FinishQuality from "../components/FinishQuality/FinishQuality";
import { GetStarted } from "../components/GetStarted/GetStarted";
import { Selections } from "../components/Selections/Selections";
import ChooseHouse from "../components/ChooseHouse/ChooseHouse";
import { RoughVideo } from "../components/VidSection/RoughVideo";
import { InsulationVideo } from "../components/VidSection/InsulationVideo";
import { MasonryVideo } from "../components/VidSection/Masonry";
import { PunchoutVideo } from "../components/VidSection/PunchoutVideo";

export const PreSold = () => {
  return (
    <div className={styles.fullPageStyle}>
      {/* Page Content */}
      <div className={styles.bgwhite}>
        <section id="2">
          <GetStarted />
        </section>
        <section id="3" data-section="3">
          <PAList />
        </section>
        <section id="4" data-section="4">
          <FootingVideo />
        </section>
        <section id="5" data-section="5">
          <Communication />
        </section>
        <section id="6" data-section="6">
          <FramingVideo />
        </section>
        <section id="7" data-section="7">
          <Selections />
        </section>
        <section id="8" data-section="8">
          <RoughVideo />
        </section>
        <section id="9" data-section="9">
          <ConstructionQuality />
        </section>
        <section id="10" data-section="10">
          <InsulationVideo />
        </section>
        <section id="11" data-section="11">
          <FinishQuality />
        </section>
        <section id="12" data-section="12">
          <MasonryVideo />
        </section>
        <section id="13" data-section="13">
          <Closing />
        </section>
        <section id="14" data-section="14">
          <PunchoutVideo />
        </section>
        <section id="15" data-section="15">
          <Warranty />
        </section>
        <section id="16" data-section="16">
          <CTA />
        </section>
      </div>
    </div>
  );
};

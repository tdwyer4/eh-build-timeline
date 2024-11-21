// components/EarlyConstruction.tsx
import React from "react";
import VideoParallaxContent from "../components/ParallaxContent/VideoParallaxContent";
import TextParallaxContent from "../components/ParallaxContent/TextParallaxContent";
import MoreContent from "../components/ParallaxContent/MoreContent";
import CardCarousel from "../components/CardCarousel/CardCarousel";
import ScrollCarousel from "../components/ScrollCarousel/ScrollCarousel";
import TimelineTwo from "../components/TimelineTwo/TimelineTwo";
import Manifest from "../components/Manifest/Manifest";
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
import GetStarted from "../components/GetStarted/GetStarted";
import { Selections } from "../components/Selections/Selections";
import ChooseHouse from "../components/ChooseHouse/ChooseHouse";
import { RoughVideo } from "../components/VidSection/RoughVideo";
import { InsulationVideo } from "../components/VidSection/InsulationVideo";
import { MasonryVideo } from "../components/VidSection/Masonry";
import { PunchoutVideo } from "../components/VidSection/PunchoutVideo";

export const PreSold = () => {
  return (
    <div className={styles.fullPageStyle}>
      {/* Fixed Navigation */}
      <div className={styles.pageNavContainer}>
        <div className={styles.pageNav}>
          <ul>
            <li>
              <a href="#1">Choose Your House</a>
            </li>
            <li>
              <a href="#2">Choose Your Styles</a>
            </li>
            <li>
              <a href="#3">What's Next?</a>
            </li>
            <li>
              <a href="#4">Phase 1 - Footing</a>
            </li>
            <li>
              <a href="#5">Communication</a>
            </li>
            <li>
              <a href="#6">Phase 2 - Framing</a>
            </li>
            <li>
              <a href="#7">Selections</a>
            </li>
            <li>
              <a href="#8">Phase 3 - Rough Trades</a>
            </li>
            <li>
              <a href="#9">Construction Quality</a>
            </li>
            <li>
              <a href="#10">Phase 4 - Drywall</a>
            </li>
            <li>
              <a href="#11">Finish Quality</a>
            </li>
            <li>
              <a href="#12">Phase 5 - Masonry</a>
            </li>
            <li>
              <a href="#13">Closing</a>
            </li>
            <li>
              <a href="#14">Phase 6 - Punch Out</a>
            </li>
            <li>
              <a href="#15">Warranty</a>
            </li>
            <li>
              <a href="#16">Next Steps</a>
            </li>
          </ul>
        </div>
      </div>

      {/* Page Content */}
      <div className={styles.bgwhite}>
        <section id="1">
          <ChooseHouse />
        </section>
        <section id="2">
          <GetStarted />
        </section>
        <section id="3">
          <PAList />
        </section>
        <section id="4">
          <FootingVideo />
        </section>
        <section id="5">
          <Communication />
        </section>
        <section id="6">
          <FramingVideo />
        </section>
        <section id="7">
          <Selections />
        </section>
        <section id="8">
          <RoughVideo />
        </section>
        <section id="9">
          <ConstructionQuality />
        </section>
        <section id="10">
          <InsulationVideo />
        </section>
        <section id="11">
          <FinishQuality />
        </section>
        <section id="12">
          <MasonryVideo />
        </section>
        <section id="13">
          <Closing />
        </section>
        <section id="14">
          <PunchoutVideo />
        </section>
        <section id="15">
          <Warranty />
        </section>
        <section id="16">
          <CTA />
        </section>
      </div>
    </div>
  );
};
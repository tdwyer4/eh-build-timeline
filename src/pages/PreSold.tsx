import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import styles from "./FullPageStyles.module.css";
<<<<<<< HEAD
=======
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
>>>>>>> 620625d (EOD page updates)
import ChooseHouse from "../components/ChooseHouse/ChooseHouse";
import GetStarted from "../components/GetStarted/GetStarted";
import PAList from "../components/PAList/PAList";
import { FootingVideo } from "../components/VidSection/FootingVideo";
import { Communication } from "../components/Communication/Communication";
import { FramingVideo } from "../components/VidSection/FramingVideo";
import { Selections } from "../components/Selections/Selections";
import { RoughVideo } from "../components/VidSection/RoughVideo";
import ConstructionQuality from "../components/ConstructionQuality/ConstructionQuality";
import { InsulationVideo } from "../components/VidSection/InsulationVideo";
import FinishQuality from "../components/FinishQuality/FinishQuality";
import { MasonryVideo } from "../components/VidSection/Masonry";
import Closing from "../components/Closing/Closing";
import { PunchoutVideo } from "../components/VidSection/PunchoutVideo";
import { Warranty } from "../components/Warranty/Warranty";
import CTA from "../components/Cta/Cta";

// Import images for each section
import bathroomImage from "../media/bathroom.jpg";
import livingImage from "../media/living.jpg";
import kitchenImage from "../media/kitchen2.jpg";
import exteriorImage from "../media/exterior.jpg";

export const PreSold: React.FC = () => {
  const [activeIsland, setActiveIsland] = useState<number | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const sectionId = parseInt(entry.target.getAttribute("data-section") || "0", 10);
            setActiveIsland(sectionId);
          }
        });
      },
      { threshold: 0.5 }
    );

    const sections = document.querySelectorAll("[data-section]");
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const motionVariants = {
    collapsed: { width: "20%", opacity: 0.8 },
    expanded: { width: "25%", opacity: 1, scale: 1.05 },
  };

  return (
<<<<<<< HEAD
    <>
      <div className={styles.navBarWrapper}>
        {/* Container for Islands */}
        <div className={styles.navBarContainer}>
          {/* Island 1 */}
          <a href="#1" className={styles.navLink}>
            <motion.div
              className={`${styles.navBarIsland} ${styles.navBarGettingStarted}`}
              initial="collapsed"
              animate={activeIsland === 1 ? "expanded" : "collapsed"}
              variants={motionVariants}
            >
              <div className={styles.navBarContent}>
                <img
                  className={styles.navBarImage}
                  src={bathroomImage}
                  alt="Getting Started"
                />
                <span className={styles.navBarTitle}>Getting Started</span>
              </div>
              <div className={styles.navBarDots}>
                <span className={styles.navBarDot}></span>
                <span className={styles.navBarDot}></span>
                <span className={styles.navBarDot}></span>
              </div>
            </motion.div>
          </a>

          {/* Island 2 */}
          <a href="#2" className={styles.navLink}>
            <motion.div
              className={`${styles.navBarIsland} ${styles.navBarEarlyConstruction}`}
              initial="collapsed"
              animate={activeIsland === 2 ? "expanded" : "collapsed"}
              variants={motionVariants}
            >
              <div className={styles.navBarContent}>
                <img
                  className={styles.navBarImage}
                  src={livingImage}
                  alt="Early Construction"
                />
                <span className={styles.navBarTitle}>Early Construction</span>
              </div>
              <div className={styles.navBarDots}>
                <span className={styles.navBarDot}></span>
                <span className={styles.navBarDot}></span>
              </div>
            </motion.div>
          </a>

          {/* Island 3 */}
          <a href="#3" className={styles.navLink}>
            <motion.div
              className={`${styles.navBarIsland} ${styles.navBarMidConstruction}`}
              initial="collapsed"
              animate={activeIsland === 3 ? "expanded" : "collapsed"}
              variants={motionVariants}
            >
              <div className={styles.navBarContent}>
                <img
                  className={styles.navBarImage}
                  src={kitchenImage}
                  alt="Mid Construction"
                />
                <span className={styles.navBarTitle}>Mid Construction</span>
              </div>
              <div className={styles.navBarDots}>
                <span className={styles.navBarDot}></span>
                <span className={styles.navBarDot}></span>
              </div>
            </motion.div>
          </a>

          {/* Island 4 */}
          <a href="#4" className={styles.navLink}>
            <motion.div
              className={`${styles.navBarIsland} ${styles.navBarMoveInReady}`}
              initial="collapsed"
              animate={activeIsland === 4 ? "expanded" : "collapsed"}
              variants={motionVariants}
            >
              <div className={styles.navBarContent}>
                <img
                  className={styles.navBarImage}
                  src={exteriorImage}
                  alt="Move In Ready"
                />
                <span className={styles.navBarTitle}>Move In Ready</span>
              </div>
              <div className={styles.navBarDots}>
                <span className={styles.navBarDot}></span>
                <span className={styles.navBarDot}></span>
              </div>
            </motion.div>
          </a>
        </div>
      </div>

      <div className={styles.contentContainer}>
        <section id="1" data-section="1">
          <ChooseHouse />
        </section>
        <section id="2" data-section="2">
=======
    <div className={styles.fullPageStyle}>
      {/* Fixed Navigation */}
      <div className={styles.pageNavContainer}>
        <div className={styles.pageNav}>
          <ul>
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
        <section id="2">
>>>>>>> 620625d (EOD page updates)
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
    </>
  );
};

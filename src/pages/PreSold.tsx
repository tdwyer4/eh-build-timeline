import React, { useEffect, useState } from "react";
import { GetStarted } from "../components/GetStarted/GetStarted";
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

import styles from "./FullPageStyles.module.css";

const PreSold: React.FC = () => {
  const [activeIsland, setActiveIsland] = useState<number | null>(null);
  const [navExpanded, setNavExpanded] = useState(false);
  const [progress, setProgress] = useState(0); // Progress state (0 to 100)

  const toggleNav = () => setNavExpanded(!navExpanded);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const sectionId = parseInt(entry.target.getAttribute("id") || "0", 10);
          if (entry.isIntersecting && !isNaN(sectionId)) {
            setActiveIsland(sectionId);

            // Calculate progress only when sectionId is valid
            const totalSections = 16; // Total number of sections
            const progressValue = (sectionId / totalSections) * 100;
            setProgress(progressValue);
          }
        });
      },
      { threshold: 0.5 }
    );

    const sections = document.querySelectorAll("section[id]");
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const circleLength = 440; // Circumference for the circle
  const offset = circleLength - (circleLength * progress) / 100; // Calculate the stroke-dashoffset

  return (
    <div className={styles["push-fullPageStyle"]}>
      <div className={styles["push-pageNavContainer"]}>
        {/* Circular Progress Bar */}
        <div className={styles["push-progressBarWrapper"]}>
          <svg
            className={styles["push-progressBar"]}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 120 120"
          >
            <circle
              cx="60"
              cy="60"
              r="52" // Radius of the circle
              className={styles["push-progressBarBackground"]}
              style={{
                strokeDashoffset: offset,
              }}
            />
            <circle
              cx="60"
              cy="60"
              r="52"
              className={styles["push-progressBarProgress"]}
              style={{
                strokeDashoffset: offset,
              }}
            />
          </svg>
          <div className={styles["push-progressLabel"]}>
            {Math.round(progress)}%
          </div>
        </div>

        {/* Navigation Buttons */}
        <div className={styles["push-navButtons"]}>
          <button onClick={() => setActiveIsland(Math.max((activeIsland || 0) - 1, 2))}>
            ←
          </button>
          <button onClick={toggleNav}>{navExpanded ? "Close" : "Expand"}</button>
          <button onClick={() => setActiveIsland(Math.min((activeIsland || 0) + 1, 16))}>
            →
          </button>
        </div>

        {/* Navigation Content (List) */}
        <div
          className={`${styles["push-pageNav"]} ${navExpanded ? styles["push-expanded"] : ""}`}
        >
          <ul>
            {["Choose Your Styles", "What's Next?", "Phase 1 - Footing", "Communication", "Phase 2 - Framing", "Selections", "Phase 3 - Rough Trades", "Construction Quality", "Phase 4 - Drywall", "Finish Quality", "Phase 5 - Masonry", "Closing", "Phase 6 - Punch Out", "Warranty", "Next Steps"].map((item, index) => (
              <li
                key={index}
                className={`${activeIsland === index + 2 ? styles["push-active"] : ""} ${navExpanded ? styles["push-item-expanded"] : ""}`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <a href={`#${index + 2}`}>{item}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Page Content */}
      <div className={styles["push-bgwhite"]}>
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

export default PreSold;

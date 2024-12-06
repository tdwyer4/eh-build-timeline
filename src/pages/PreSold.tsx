import React, { useEffect, useState } from "react";
import Hero from "../components/Hero/Hero";
import ProgressBar from "../components/ProgressBar/ProgressBar";
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
import Warranty from "../components/Warranty/Warranty";
import styles from "./FullPageStyles.module.css";
import CTA from "../components/Cta/Cta";

interface PreSoldProps {
  pageTitle: string;
}

const PreSold: React.FC<PreSoldProps> = ({ pageTitle }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const [navExpanded, setNavExpanded] = useState(false);

  const sections = [
    { id: "2", title: "Get Started", component: <GetStarted /> },
    { id: "3", title: "Purchase Agreement", component: <PAList /> },
    { id: "4", title: "Foundation", component: <FootingVideo /> },
    { id: "5", title: "Communication", component: <Communication /> },
    { id: "6", title: "Framing", component: <FramingVideo /> },
    { id: "7", title: "Selections", component: <Selections /> },
    { id: "8", title: "Rough Trades", component: <RoughVideo /> },
    { id: "9", title: "Quality", component: <ConstructionQuality /> },
    { id: "10", title: "Insulation", component: <InsulationVideo /> },
    { id: "11", title: "Finish", component: <FinishQuality /> },
    { id: "12", title: "Exterior", component: <MasonryVideo /> },
    { id: "13", title: "Close", component: <Closing /> },
    { id: "14", title: "Punch", component: <PunchoutVideo /> },
    { id: "15", title: "Warranty", component: <Warranty /> },
    { id: "16", title: "Let's build!", component: <CTA /> },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        let mostVisibleEntry: IntersectionObserverEntry | null = null as IntersectionObserverEntry | null;

        entries.forEach((entry) => {
          const sectionId = parseInt(entry.target.getAttribute("id") || "0", 10);

          if (entry.isIntersecting && !isNaN(sectionId)) {
            if (
              !mostVisibleEntry ||
              entry.intersectionRatio > mostVisibleEntry.intersectionRatio
            ) {
              mostVisibleEntry = entry;
            }
          }
        });

        if (mostVisibleEntry) {
          const visibleSectionId = parseInt(
            mostVisibleEntry.target.getAttribute("id") || "0",
            10
          );
          setActiveIndex(visibleSectionId - 2);
          setProgress(((visibleSectionId - 2) / (sections.length - 1)) * 100);
        }
      },
      { threshold: 0.1 }
    );

    const sectionElements: NodeListOf<HTMLElement> = document.querySelectorAll("section[id]");
    sectionElements.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, [sections]);

  const toggleNav = () => setNavExpanded(!navExpanded);

  return (
    <div className={styles.pageContent}>
      <div className={styles.progress}>
      <ProgressBar
        activeIndex={activeIndex}
        items={sections.map(({ id, title }) => ({ id, title }))}
        pageTitle={pageTitle}
        variant="dots"
      />
      </div>
      <div className={styles.sections}>
        {sections.map(({ id, component }) => (
          <section id={id} key={id} data-section={id}>
            {component}
          </section>
        ))}
      </div>
    </div>
  );
};

export default PreSold;

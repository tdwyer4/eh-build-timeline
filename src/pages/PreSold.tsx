import React, { useEffect, useMemo, useState } from "react";
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
import CTA from "../components/Cta/Cta";
import styles from "./FullPageStyles.module.css";

interface PreSoldProps {
  pageTitle: string;
}

const sectionsData = [
  {
    categoryName: "Get Started",
    items: [
      { id: "2", title: "Get Started", component: <GetStarted /> },
      { id: "3", title: "Purchase Agreement", component: <PAList /> },
    ],
  },
  {
    categoryName: "Foundation",
    items: [{ id: "4", title: "Foundation", component: <FootingVideo /> }],
  },
  {
    categoryName: "Communication",
    items: [{ id: "5", title: "Communication", component: <Communication /> }],
  },
  {
    categoryName: "Rough Trades",
    items: [
      { id: "6", title: "Framing", component: <FramingVideo /> },
      { id: "8", title: "Rough Trades", component: <RoughVideo /> },
    ],
  },
  {
    categoryName: "Quality",
    items: [
      { id: "7", title: "Selections", component: <Selections /> },
      { id: "9", title: "Quality", component: <ConstructionQuality /> },
      { id: "10", title: "Insulation", component: <InsulationVideo /> },
    ],
  },
  {
    categoryName: "Interior",
    items: [{ id: "11", title: "Finish", component: <FinishQuality /> }],
  },
  {
    categoryName: "Exterior",
    items: [{ id: "12", title: "Exterior", component: <MasonryVideo /> }],
  },
  {
    categoryName: "Close",
    items: [
      { id: "13", title: "Close", component: <Closing /> },
      { id: "14", title: "Punch", component: <PunchoutVideo /> },
      { id: "15", title: "Warranty", component: <Warranty /> },
      { id: "16", title: "Let's build!", component: <CTA /> },
    ],
  },
];

const PreSold: React.FC<PreSoldProps> = ({ pageTitle }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const progressBarItems = useMemo(
    () =>
      sectionsData.map((category) => ({
        id: category.categoryName,
        title: category.categoryName,
        subItems: category.items.map((item) => ({
          id: item.id,
          title: item.title,
        })),
      })),
    []
  );

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        let mostVisibleEntry: IntersectionObserverEntry | null = null as IntersectionObserverEntry | null;

        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (
              !mostVisibleEntry ||
              entry.intersectionRatio > mostVisibleEntry.intersectionRatio
            ) {
              mostVisibleEntry = entry;
            }
          }
        });

        if (mostVisibleEntry && mostVisibleEntry.target instanceof HTMLElement) {
          const visibleSectionId = mostVisibleEntry.target.getAttribute("id");
          if (visibleSectionId) {
            const index = sectionsData.findIndex((section) =>
              section.items.some((item) => item.id === visibleSectionId)
            );
            setActiveIndex(index);
          }
        }
      },
      { threshold: 0.1 }
    );

    const sectionElements = document.querySelectorAll("section[id]");
    sectionElements.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <div className={styles.pageContent}>
      <ProgressBar
        activeIndex={activeIndex}
        items={progressBarItems}
        pageTitle={pageTitle}
        variant="dots"
      />
      <div className={styles.sections}>
        {sectionsData.flatMap((category) =>
          category.items.map(({ id, component }) => (
            <section key={id} id={id}>
              {component}
            </section>
          ))
        )}
      </div>
    </div>
  );
};

export default PreSold;
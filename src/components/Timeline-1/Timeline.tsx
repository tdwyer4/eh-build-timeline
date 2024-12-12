import React, { useState, useRef, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion"; // Import framer-motion
import styles from "./Timeline.module.css";

interface Hotspot {
  id: number;
  label: string;
  image: string;
  description: string;
  content: string;
}

const hotspotsData: Hotspot[] = [
  {
    id: 1,
    label: "Hotspot 1",
    image:
      "https://www.executivehomes.com/static/media/OneHundredPlusLayoutsImage.02de467e8933a912438e.jpg",
    description: "This is hotspot 1",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    id: 2,
    label: "Hotspot 2",
    image:
      "https://www.executivehomes.com/static/media/CottagesImage.bd1fe48687e47e05e37d.png",
    description: "This is hotspot 2",
    content:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
  },
  {
    id: 3,
    label: "Hotspot 3",
    image:
      "https://www.executivehomes.com/static/media/SideEntryGarageImage.bce2143d7780c333f826.png",
    description: "This is hotspot 3",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    id: 4,
    label: "Hotspot 4",
    image:
      "https://www.executivehomes.com/static/media/FrontEntryGarageImage.5a14710d9ebc0d0a9d0b.png",
    description: "This is hotspot 4",
    content:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
  },
  {
    id: 5,
    label: "Hotspot 5",
    image:
      "https://www.executivehomes.com/static/media/ThirdCustomizedLayoutDesktopImage.6128496f025be0b6b868.jpg",
    description: "This is hotspot 5",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    id: 6,
    label: "Hotspot 6",
    image:
      "https://www.executivehomes.com/static/media/FirstLargeLotsImage.6d5ba8c6d4a9015b09dc.jpg",
    description: "This is hotspot 6",
    content:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
  },
  {
    id: 7,
    label: "Hotspot 7",
    image:
      "https://www.executivehomes.com/static/media/FirstPremiumEntrywaysImage.ec5b8bdcfa7aa890c664.jpg",
    description: "This is hotspot 7",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    id: 8,
    label: "Hotspot 8",
    image:
      "https://www.executivehomes.com/static/media/SecondPremiumEntrywaysImage.be1d80fbb3d963c87ade.jpg",
    description: "This is hotspot 8",
    content:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
  },
];

const Timeline: React.FC = () => {
  // Ensure proper typing for the state
  const [activeHotspot, setActiveHotspot] = useState<Hotspot | null>(null);
  const timelineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (timelineRef.current && activeHotspot) {
      const hotspotElement = document.getElementById(
        `hotspot-${activeHotspot.id}`
      );
      if (hotspotElement) {
        const container = timelineRef.current;
        const hotspotTop = hotspotElement.offsetTop;
        const containerHeight = container.clientHeight;
        const scrollPosition =
          hotspotTop - containerHeight / 2 + hotspotElement.clientHeight / 2;

        container.scrollTo({
          top: scrollPosition,
          behavior: "smooth",
        });
      }
    }
  }, [activeHotspot]);

  const handleHotspotClick = (hotspot: Hotspot) => {
    setActiveHotspot(hotspot);
  };

  const targetRef2 = useRef<HTMLDivElement>(null);
  const { scrollYProgress: scrollYProgressTarget2 } = useScroll({
    target: targetRef2,
  });
  const x = useTransform(scrollYProgressTarget2, [0, 1], ["0%", "0%"]);

  return (
    <motion.div className={styles.container}>
      <motion.div
        className={styles.timelineContainer}
        ref={timelineRef}
        initial={{ x: -100 }}
        animate={{ x: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <motion.div className={styles.timeline}>
          {hotspotsData.map((hotspot) => (
            <motion.div
              className={`${styles.hotspotContainer} ${
                activeHotspot?.id === hotspot.id ? "active" : ""
              }`}
              key={hotspot.id}
              id={`hotspot-${hotspot.id}`}
              onClick={() => handleHotspotClick(hotspot)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              style={{ x }}
              initial={{ opacity: 0, y: 150 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <motion.div className={styles.line}></motion.div>
              <motion.div className={styles.lineHor}></motion.div>
              <motion.div
                className={styles.hotSpot}
                whileHover={{ scale: 1.1 }}
              >
                <motion.div className={styles.hotspotLabel}>
                  {hotspot.label}
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      <motion.div
        className={styles.imageContainer}
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5 }}
        style={{ x }}
      >
        {activeHotspot ? (
          <img
            src={activeHotspot.image}
            alt={activeHotspot.label}
            className={styles.imgTimeline}
          />
        ) : (
          <p>Please click on a hotspot to see an image</p>
        )}
        <motion.div
          className={styles.textContainer}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          style={{ x }}
        >
          <p>
            {activeHotspot
              ? activeHotspot.content
              : "Select a hotspot to view more details."}
          </p>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Timeline;

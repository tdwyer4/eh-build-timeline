import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import styles from "./TimelineTwo.module.css";

interface TimelineItem {
  week: string;
  date: string;
  title: string;
  description: string;
  image: string;
}

const timelineItems: TimelineItem[] = [
  {
    week: "Week 1-2",
    date: "Meetings 'n stuff",
    title: "Plans",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    image:
      "https://www.executivehomes.com/static/media/OneHundredPlusLayoutsImage.02de467e8933a912438e.jpg",
  },
  {
    week: "Week 3",
    date: "Let the chef cook!",
    title: "Markup Blueprints",
    description: "Description for event 2",
    image:
      "https://www.executivehomes.com/static/media/OneHundredPlusLayoutsImage.02de467e8933a912438e.jpg",
  },
  {
    week: "Week 4",
    date: "Via Skype version 1.6.2",
    title: "Virtual Pre-Construction Meeting",
    description: "Description for event 3",
    image:
      "https://www.executivehomes.com/static/media/OneHundredPlusLayoutsImage.02de467e8933a912438e.jpg",
  },
  {
    week: "Week 5-6",
    date: "Channel your inner artist",
    title: "Selections",
    description: "Description for event 4",
    image:
      "https://www.executivehomes.com/static/media/OneHundredPlusLayoutsImage.02de467e8933a912438e.jpg",
  },
  {
    week: "Week 7",
    date: "Not you though, we have crews a team for that",
    title: "Build",
    description: "Description for event 5",
    image:
      "https://www.executivehomes.com/static/media/OneHundredPlusLayoutsImage.02de467e8933a912438e.jpg",
  },
  {
    week: "Week 8",
    date: "Home sweet home",
    title: "Closing",
    description: "Description for event 5",
    image:
      "https://www.executivehomes.com/static/media/OneHundredPlusLayoutsImage.02de467e8933a912438e.jpg",
  },
];

const TimelineTwo: React.FC = () => {
  const [selected, setSelected] = useState<number>(0);
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: false }); // Change once to false for repeated in view detection
  const [fade, setFade] = useState(false); // State for managing fade

  useEffect(() => {
    if (inView) {
      setFade(true); // Set fade to true when in view
    } else {
      setFade(false); // Reset fade when out of view
    }
  }, [inView]);

  const handleClick = (index: number) => {
    setSelected(index);
  };

  return (
    <div className={styles.timelineWrap}>
      <motion.div
        className={styles.boxContainer}
        ref={ref}
        initial={{ opacity: 0 }} // Initial opacity
        animate={{ opacity: inView ? 1 : 0 }} // Fade in when in view
        transition={{ duration: 1 }}
      >
        <div className={styles.timelineContainer}>
          {/* Left Side: Hotspots */}
          <div className={styles.leftContainer}>
            {timelineItems.map((item, index) => (
              <motion.div
                key={index}
                className={`${styles.timelineItem} ${
                  selected === index ? styles.active : ""
                }`} // Conditional active class
                onClick={() => handleClick(index)}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <div className={styles.week}>
                  <p>{item.week}</p>
                </div>
                <div className={styles.lineLine}></div>
                <div className={styles.dot}></div>
                <div className={styles.content}>
                  <h3>{item.title}</h3>
                  <p>{item.date}</p>

                  <AnimatePresence>
                    {selected === index && (
                      <motion.div
                        className={styles.paragraphText}
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.4 }}
                      >
                        {/* Optional paragraph content or additional details */}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Right Side: Image & Text Overlay */}
          <div className={styles.rightContainer}>
            {selected !== null && (
              <motion.div
                key={selected}
                className={styles.imageContainer}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
              >
                <img
                  src={timelineItems[selected].image}
                  alt={timelineItems[selected].title}
                />
                <div className={styles.overlayText}>
                  <p>{timelineItems[selected].description}</p>
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default TimelineTwo;

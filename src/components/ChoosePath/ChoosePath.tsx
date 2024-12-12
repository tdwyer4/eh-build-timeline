import {
  MotionValue,
  motion,
  useScroll,
  useTransform,
  useMotionValueEvent,
} from "framer-motion";
import React, { useRef, useState } from "react";
import styles from "./ChoosePath.module.css";
import FPVideo from "../../media/floorplansV2.mp4";
import PLVideo from "../../media/lots.mp4";

const ChoosePath = () => {
  return <Content content={items} />;
};

const Content = ({ content }: { content: typeof items }) => {
  const [activeCard, setActiveCard] = React.useState(0);
  const ref = useRef<any>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    // container: ref,
    offset: ["start start", "end start"],
  });
  const cardLength = content.length;

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const cardsBreakpoints = content.map((_, index) => index / cardLength);
    const closestBreakpointIndex = cardsBreakpoints.reduce(
      (acc, breakpoint, index) => {
        const distance = Math.abs(latest - breakpoint);
        if (distance < Math.abs(latest - cardsBreakpoints[acc])) {
          return index;
        }
        return acc;
      },
      0
    );
    setActiveCard(closestBreakpointIndex);
  });

  return (
    <motion.div ref={ref} className={styles.mainWrap}>
      <div className={styles.contentWrap}>
        <div className={styles.contentContainer}>
          {content.map((item, index) => (
            <div key={item.title + index} className={styles.content}>
              <motion.h2
                initial={{ opacity: 0.2 }}
                animate={{ opacity: activeCard === index ? 1 : 0 }}
                transition={{ duration: 1 }}
                className={styles.contentTitleText}
              >
                {item.title}
              </motion.h2>
              <motion.p
                initial={{ opacity: 0.2 }}
                animate={{ opacity: activeCard === index ? 1 : 0 }}
                transition={{ duration: 1 }}
                className={styles.contentDescText}
              >
                {item.description}
              </motion.p>
            </div>
          ))}
          <div className={styles.bufferSpace} />
        </div>
      </div>
      <div className={styles.imageContainer}>
        <div className={styles.imagePosition}>
          <video
            src={content[activeCard].video ?? null}
            className={styles.image}
            muted
            autoPlay
          />
        </div>
      </div>
    </motion.div>
  );
};

export default ChoosePath;

const items = [
  {
    title: "Pick A Lot",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.",
    video: `${PLVideo}`,
  },
  {
    title: "Choose A Floorplan",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.",
    video: `${FPVideo}`,
  },
];

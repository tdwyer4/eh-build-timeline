import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import styles from "./ParallaxSubContent.module.css";

const OverlayCopy = ({
  subheading,
  heading,
}: {
  subheading: string;
  heading: string;
}) => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [250, -250]);
  const opacity = useTransform(scrollYProgress, [0.25, 0.5, 0.75], [0, 1, 0]);

  return (
    <motion.div
      style={{
        y,
        opacity,
      }}
      ref={targetRef}
      className={styles.targetRefStyle}
    >
      <p className={styles.sectionSubHeading}>{subheading}</p>
      <p className={styles.sectionHeading}>{heading}</p>
    </motion.div>
  );
};

export default OverlayCopy;

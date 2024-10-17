import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import styles from "./ScrollInfo.module.css"; // Your CSS Module

const ScrollInfo: React.FC = () => {
  const scrollRef = useRef(null);
  const { scrollYProgress } = useScroll({ container: scrollRef });

  // Use transform to map scroll progress to feature animation
  const yTransform = useTransform(scrollYProgress, [0, 0.5], [100, 0]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.5], [0, 1]);

  return (
    <div className={styles.scrollContainer} ref={scrollRef}>
      {[...Array(5)].map((_, index) => (
        <motion.div
          key={index}
          className={styles.feature}
          style={{
            y: yTransform,
            opacity: opacityTransform,
          }}
        >
          <h3>Feature {index + 1}</h3>
          <p>This is feature number {index + 1}</p>
        </motion.div>
      ))}
    </div>
  );
};

export default ScrollInfo;

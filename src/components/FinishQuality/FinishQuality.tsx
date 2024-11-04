import React, { useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import styles from "./FinishQuality.module.css";

export default function FinishQuality() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end end"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.5]);

  return (
    <div ref={container} className={styles.mainContainer}>
      <div className={styles.stickyContainer}>
        <motion.div className={styles.textContainer} style={{ scale }}>
          <h2 className={styles.textTitle}>Finish & Feature Quality</h2>
          <p className={styles.textPara}>
            High End Finishes. High Resale Value.
          </p>
        </motion.div>
      </div>
    </div>
  );
}

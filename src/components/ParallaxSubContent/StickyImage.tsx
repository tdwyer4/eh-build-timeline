import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import styles from "./ParallaxSubContent.module.css";

const StickyImage = ({ imgUrl }: { imgUrl: string }) => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["end end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.85]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <motion.div
      style={{
        backgroundImage: `url(${imgUrl})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: `calc(100vh)`,
        scale,
      }}
      ref={targetRef}
      className={styles.stickyImage}
    >
      <motion.div
        className={styles.overlay}
        style={{
          opacity,
        }}
      />
    </motion.div>
  );
};

export default StickyImage;

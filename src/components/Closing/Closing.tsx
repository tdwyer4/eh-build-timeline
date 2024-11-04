import React, { useState } from "react";
import { motion } from "framer-motion";
import styles from "./Closing.module.css"; // Importing CSS module

const Closing: React.FC = () => {
  const [hoveredCardIndex, setHoveredCardIndex] = useState<number | null>(null);

  return (
    <div className={styles.mainContainer}>
      <div className={styles.leftContainer}>
        <h1 className={styles.title}>Easy as that.</h1>
        <h2 className={styles.subtitle}>
          Streamlined closing - The way it should be!
        </h2>
        <p className={styles.description}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec odio.
          Quisque volutpat mattis eros. Nullam malesuada erat ut turpis.
          Suspendisse urna nibh viverra non semper suscipit posuere a pede.
        </p>
        <button className={styles.button}>24 Available Homes</button>

        <div className={styles.statsContainer}>
          <div className={styles.stat}>
            <h3 className={styles.statNumber}>12</h3>
            <p className={styles.statDescription}>Description for Stat 1</p>
          </div>
          <div className={styles.stat}>
            <h3 className={styles.statNumber}>8</h3>
            <p className={styles.statDescription}>Description for Stat 2</p>
          </div>
        </div>
      </div>

      <div className={styles.rightContainer}>
        {/* <motion.div className={styles.card}></motion.div> */}
        <motion.div
          className={styles.card}
          onHoverStart={() => setHoveredCardIndex(1)}
          onHoverEnd={() => setHoveredCardIndex(null)}
        >
          <h3 className={styles.cardTitle}>Card Title 1</h3>
          <p className={styles.cardDescription}>
            Snippet of text for card 1 goes here.
          </p>
        </motion.div>
        <motion.div
          className={styles.card}
          onHoverStart={() => setHoveredCardIndex(1)}
          onHoverEnd={() => setHoveredCardIndex(null)}
        >
          <h3 className={styles.cardTitle}>Card Title 1</h3>
          <p className={styles.cardDescription}>
            Snippet of text for card 1 goes here.
          </p>
        </motion.div>
        {/* <motion.div className={styles.card}></motion.div> */}
      </div>
    </div>
  );
};

export default Closing;

import React from "react";
import styles from "./CardGrid.module.css";

const CardCarousel: React.FC = () => {
  const numCards = 5;

  return (
    <div className={styles.carouselWrapper}>
      <div className={styles.carouselContainer}>
        {Array.from({ length: numCards }).map((_, idx) => (
          <div key={idx} className={styles.card}>
            Card {idx + 1}
          </div>
        ))}
        {Array.from({ length: numCards }).map((_, idx) => (
          <div key={idx + numCards} className={styles.card}>
            Card {idx + 1}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardCarousel;

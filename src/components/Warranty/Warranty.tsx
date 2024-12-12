import React from "react";
import WarrantySlider from "./WarrantySlider";
import { cards } from "./WarrantyData"; // Data file containing card information
import GradientType from "../GradientType/gradientType"; // Correct path to GradientType
import styles from "./Warranty.module.css";

const Warranty: React.FC = () => {
  const warrantyData = cards.map((card) => ({
    tempId: card.id,
    testimonial: card.title,
    by: card.description,
    imgSrc: card.icon,
  }));

  return (
    <div className={styles.sectionWrap}>
      <div className={styles.topContainer}>
        <div className={styles.copyContainer}>
          <GradientType>OUR WARRANTY COVERAGE</GradientType>
          <p className={styles.paragraph}>
            Explore our range of home warranty coverages that keep your home
            protected year-round. Choose from heating, air conditioning,
            plumbing, and more!
          </p>
        </div>
      </div>

      <div className={styles.sliderContainer}>
        <WarrantySlider />
      </div>
    </div>
  );
};

export default Warranty;

import React from "react";
import { motion } from "framer-motion";
import styles from "./GetStarted.module.css";
import UpgradesPic from "../../media/upgrades.jpg";

const GetStarted = () => {
  const cards = [
    {
      id: 1,
      image:
        "https://assets.cloud.executivehomes.com/static/pages/styles-page/TwoStylesImage.jpg",
      title: "Select Your Style",
      header: "Choose the style that best matches your preferences.",
    },
    {
      id: 2,
      image:
        "https://assets.cloud.executivehomes.com/prod/public/house-styles/STY~TRANSITIONAL/SMD~g-xsZbV9EQ0wUZvd",
      title: "Luxury is Included",
      header:
        "Every home is loaded with premium finishes at no additional cost.",
    },
    {
      id: 3,
      image: `${UpgradesPic}`,
      title: "Customize with Upgrades",
      header:
        "100+ upgrades are available to choose online to personalize your home.",
    },
    {
      id: 4,
      image:
        "https://assets.cloud.executivehomes.com/static/pages/styles-page/TwoStylesImage.jpg",
      title: "Let's Get Started!",
      header:
        "Our simple Purchase Agreement locks in your price and guarantees your home's quality.",
    },
  ];

  return (
    <div className={styles.cardGrid}>
      {cards.map((card) => (
        <motion.div
          key={card.id}
          className={styles.card}
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <img src={card.image} alt={card.title} className={styles.cardImage} />
          <div className={styles.cardOverlay}>
            <h2 className={styles.cardTitle}>{card.title}</h2>
            <h3 className={styles.cardHeader}>{card.header}</h3>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default GetStarted;

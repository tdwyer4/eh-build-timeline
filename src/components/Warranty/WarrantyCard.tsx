import React from "react";
import { motion } from "framer-motion";
import styles from "./WarrantyCard.module.css";

interface CardType {
  icon: string;
  title: string;
  description: string;
  id: number;
}

interface WarrantyCardProps {
  position: number;
  card: CardType;
  handleMove: (position: number) => void;
  cardSize: number;
}

const WarrantyCard: React.FC<WarrantyCardProps> = ({
  position,
  card,
  handleMove,
  cardSize,
}) => {
  const isActive = position === 0;

  return (
    <motion.div
      onClick={() => handleMove(position)}
      className={`${styles.cardContainer} ${
        isActive ? styles.cardActive : styles.cardInactive
      }`}
      animate={{
        width: cardSize,
        height: cardSize,
        x: `calc(-50% + ${position * (cardSize / 1.15)}px)`,
        y: isActive ? 0 : position % 2 ? 10 : -10,
        scale: isActive ? 1 : 0.8,
      }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 30,
      }}
    >
      <img src={card.icon} alt={card.title} className={styles.cardImage} />
      <h3
        className={`${styles.cardHeader} ${
          isActive ? styles.cardHeaderActive : ""
        }`}
      >
        {card.title}
      </h3>
      <p className={styles.cardDesc}>{card.description}</p>
    </motion.div>
  );
};

export default WarrantyCard;

import React from "react";
import styles from "./CardStyle.module.css";
import { motion, MotionValue, useTransform } from "framer-motion";

interface CardProps {
  i: number;
  img: string;
  title: string;
  description: string;
  progress: MotionValue<number>;
  range: [number, number];
  targetScale: number;
}

export default function Card({
  i,
  img,
  title,
  description,
  progress,
  range,
  targetScale,
}: CardProps) {
  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div className={styles.cardContainer}>
      <motion.div
        className={styles.card}
        style={{ scale, top: `calc(-10% + ${i * 25}px)` }}
      >
        <img src={img} alt={title} />
        <div className={styles.cardTextContainer}>
          <p className={styles.cardTitle}>{title}</p>
          <p className={styles.cardDesc}>{description}</p>
        </div>
      </motion.div>
    </div>
  );
}

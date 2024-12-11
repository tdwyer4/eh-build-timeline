import React from "react";
import { motion } from "framer-motion";
import PathCard from "./pathCard";
import readyImage from "../../media/ready.jpg";
import earlyImage from "../../media/early.jpg";
import midImage from "../../media/mid.jpg";
import presoldImage from "../../media/pre.jpg";
import styles from "./pathCardContent.module.css";

interface PathCardContentProps {
  isAnimationComplete: boolean;
  onPhaseSelect: (title: string) => void; // Callback to notify parent
}

export default function PathCardContent({
  isAnimationComplete,
  onPhaseSelect,
}: PathCardContentProps) {
  const phases = [
    {
      image: presoldImage,
      title: "PRE-SOLD",
      buildTime: "5-6 Months",
      backgroundColor: "yellowBG",
    },
    {
      image: earlyImage,
      title: "EARLY CONSTRUCTION",
      buildTime: "3-4 Months",
      backgroundColor: "orangeBG",
    },
    {
      image: midImage,
      title: "MID-CONSTRUCTION",
      buildTime: "2-3 Months",
      backgroundColor: "purpleBG",
    },
    {
      image: readyImage,
      title: "MOVE IN READY",
      buildTime: "Available Now!",
      backgroundColor: "seafoamBG",
    },
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  if (!isAnimationComplete) {
    return null;
  }

  return (
    <div className={styles.gansterWrapper}>
      <motion.div
        className={styles.pathCardContainer}
        initial="hidden"
        animate="visible"
        transition={{
          delay: 1.2,
          staggerChildren: 0.3,
        }}
      >
        {phases.map((phase, index) => (
          <motion.div key={index} variants={cardVariants}>
            <PathCard
              image={phase.image}
              title={phase.title}
              buildTime={phase.buildTime}
              backgroundColor={phase.backgroundColor}
              onClick={() => onPhaseSelect(phase.title)}
            />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

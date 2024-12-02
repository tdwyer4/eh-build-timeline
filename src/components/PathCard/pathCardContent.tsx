import React from 'react';
import { motion } from "framer-motion";
import PathCard from './pathCard';
import readyImage from '../../media/ready.jpg';
import earlyImage from '../../media/early.jpg';
import midImage from '../../media/mid.jpg';
import presoldImage from '../../media/pre.jpg';

import styles from './pathCardContent.module.css';

export default function PathCardContent() {
  const handleClick = (phase: string) => {
    console.log(`Phase clicked: ${phase}`);
  };

  const phases = [
    {
      image: presoldImage,
      title: 'PRE-SOLD',
      buildTime: '5-6 Months',
      backgroundColor: 'yellowBG',
      onClick: () => handleClick('Pre'),
    },
    {
      image: earlyImage,
      title: 'EARLY CONSTRUCTION',
      buildTime: '3-4 Months',
      backgroundColor: 'orangeBG',
      onClick: () => handleClick('Early'),
    },
    {
      image: midImage,
      title: 'MID-CONSTRUCTION',
      buildTime: '2-3 Months',
      backgroundColor: 'purpleBG',
      onClick: () => handleClick('Mid'),
    },
    {
      image: readyImage,
      title: 'MOVE IN READY',
      buildTime: 'Available Now!',
      backgroundColor: 'seafoamBG',
      onClick: () => handleClick('Ready'),
    },
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 40 }, // Cards start faded out and further down
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }, // Cards fade in and move up
  };

  return (
    <div className={styles.gansterWrapper}>
    {/* Cards Section */}
      <motion.div
        className={styles.pathCardContainer}
        initial="hidden"
        animate="visible"
        transition={{
          delay: 1.2, // Delay for cards to start after text animation completes
          staggerChildren: 0.3, // Stagger between card animations
        }}
      >
        {phases.map((phase, index) => (
          <motion.div key={index} variants={cardVariants}>
            <PathCard
              image={phase.image}
              title={phase.title}
              buildTime={phase.buildTime}
              backgroundColor={phase.backgroundColor}
              onClick={phase.onClick}
            />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

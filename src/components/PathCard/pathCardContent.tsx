import React from 'react';
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

  return (
    <div className={styles.gansterWrapper}>
      <div className={styles.pathCardContainer}>
        {phases.map((phase, index) => (
          <PathCard
            key={index}
            image={phase.image}
            title={phase.title}
            buildTime={phase.buildTime}
            backgroundColor={phase.backgroundColor}
            onClick={phase.onClick}
          />
        ))}
      </div>
    </div>
  );
}

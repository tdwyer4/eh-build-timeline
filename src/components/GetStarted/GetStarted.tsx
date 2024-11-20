import styles from "./GetStarted.module.css";
import UpgradesPic from "../../media/upgrades.jpg";
import React, { useState, useEffect, useRef } from "react";
import { motion, animate, useInView } from "framer-motion";

const GetStarted: React.FC = () => {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.leftContainer}>
        <h1 className={styles.title}>Design made easy</h1>
        <h2 className={styles.subtitle}>Now for the fun part!</h2>
        <p className={styles.description}>
          We've developed a turnkey experience to make your new home journey as
          smooth as possible. Just schedule your movers and we'll handle the
          rest!
        </p>

        <div className={styles.statsContainer}>
          <Stat num={2545} suffix="" subheading="Closed Homes" />

          <Stat num={100} decimals={0} suffix="K" subheading="Resale Value" />

          <Stat num={150} suffix="" subheading="Checklist Items" />

          <Stat num={6} suffix=" MONTHS" subheading="Average Build Time" />
        </div>
      </div>

      <div className={styles.rightContainer}>
        <div className={styles.cardContainer}>
          <motion.div
            className={styles.card}
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1, ease: "easeInOut" }}
          >
            <img
              className={styles.cardImage}
              src="https://assets.cloud.executivehomes.com/static/pages/styles-page/TwoStylesImage.jpg"
            />
            <h5 className={styles.cardStep}>Step 1</h5>
            <h3 className={styles.cardTitle}>SELECT YOUR STYLE</h3>
            <p className={styles.cardDescription}>
              Choose the style that best matches your preferences.
            </p>
          </motion.div>
          <motion.div
            className={styles.card}
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2, ease: "easeInOut" }}
          >
            <img
              className={styles.cardImage}
              src="https://assets.cloud.executivehomes.com/prod/public/house-styles/STY~TRANSITIONAL/SMD~g-xsZbV9EQ0wUZvd"
            />
            <h5 className={styles.cardStep}>Step 2</h5>
            <h3 className={styles.cardTitle}>LUXURY IS INCLUDED</h3>
            <p className={styles.cardDescription}>
              Every home is loaded with premium finishes at no additional cost.
            </p>
          </motion.div>
          <motion.div
            className={styles.card}
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3, ease: "easeInOut" }}
          >
            <img className={styles.cardImage} src={UpgradesPic} />
            <h5 className={styles.cardStep}>Step 3</h5>
            <h3 className={styles.cardTitle}>CUSTOMIZE WITH UPGRADES</h3>
            <p className={styles.cardDescription}>
              100+ upgrades are available to choose online to personalize your
              home.
            </p>
          </motion.div>
          <motion.div
            className={styles.card}
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4, ease: "easeInOut" }}
          >
            <img
              className={styles.cardImage}
              src="https://assets.cloud.executivehomes.com/static/pages/styles-page/TwoStylesImage.jpg"
            />
            <h5 className={styles.cardStep}>Step 4</h5>
            <h3 className={styles.cardTitle}>LET'S GET STARTED!</h3>
            <p className={styles.cardDescription}>
              Our simple Purchase Agreement locks in your price and guarantees
              your home's quality.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

interface Props {
  num: number;

  suffix: string;

  decimals?: number;

  subheading: string;
}

const Stat = ({ num, suffix, decimals = 0, subheading }: Props) => {
  const ref = useRef<HTMLSpanElement | null>(null);

  const isInView = useInView(ref);

  useEffect(() => {
    if (!isInView) return;

    animate(0, num, {
      duration: 2.5,

      onUpdate(value) {
        if (!ref.current) return;

        ref.current.textContent = value.toFixed(decimals);
      },
    });
  }, [num, decimals, isInView]);

  return (
    <div className={styles.stat}>
      <p className={styles.statNumber}>
        <span ref={ref}></span>

        {suffix}
      </p>

      <p className={styles.statDescription}>{subheading}</p>
    </div>
  );
};

export default GetStarted;

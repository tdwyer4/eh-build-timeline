import React, { useState, useEffect, useRef } from "react";
import { motion, animate, useInView } from "framer-motion";
import styles from "./Closing.module.css"; // Importing CSS module
import GlowBG from "../../media/glowBG.png";

const Closing: React.FC = () => {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.leftContainer}>
        <h1 className={styles.title}>Easy as that.</h1>
        <h2 className={styles.subtitle}>
          2,500 ON-TIME CLOSINGS…AND COUNTING!
        </h2>
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

      <motion.div
        className={styles.rightContainer}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 2 }}
      >
        <motion.img
          src={GlowBG}
          className={styles.glowBG}
          animate={{ rotate: 360, scale: 1.5 }}
          transition={{ duration: 120, repeat: Infinity }}
        />
        <div className={styles.cardContainer}>
          <motion.div
            className={styles.card}
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1, ease: "easeInOut" }}
          >
            <h3 className={styles.cardTitle}>TITAN TITLE</h3>
            <p className={styles.cardDescription}>
              Each of our homes closing with the all-star team of Kim Plunkett &
              Carrie Brasel at Titan Title. Kim and Carrie have closed more than
              2,500 Executive homes. They'll coordinate the details to make this
              the smoothest home purchase possible.
            </p>
          </motion.div>
          <motion.div
            className={styles.card}
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2, ease: "easeInOut" }}
          >
            <h3 className={styles.cardTitle}>FINANCING</h3>
            <p className={styles.cardDescription}>
              You're welcome to finance your purchase through any lender. Ethan
              Wagner with Flat Branch Home Loans has helped hundreds of our
              homeowners over the years. He offers $2,500 in free closing costs
              to EH customers and can help with any financing questions. Give
              him a shout at 918.527.6798.
            </p>
          </motion.div>
          <motion.div
            className={styles.card}
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3, ease: "easeInOut" }}
          >
            <h3 className={styles.cardTitle}>HOME INSPECTION</h3>
            <p className={styles.cardDescription}>
              Our team is staffed with 10+ home inspectors, but it never hurts
              to have another pair of eyes. You're welcome to have a third-party
              inspection anytime! Unlike resale homes, there's no need to
              negotiate repairs. We guarantee every single detail will meet or
              exceed the Purchase Agreement standards.
            </p>
          </motion.div>
          <motion.div
            className={styles.card}
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4, ease: "easeInOut" }}
          >
            <h3 className={styles.cardTitle}>FINAL VISIT</h3>
            <p className={styles.cardDescription}>
              Our closing process does not include a final walkthrough meeting,
              but does involve our Closing Superintendent and Closing Manager
              completing separate checklists to ensure the finishes and features
              meet our guaranteed standards. You're also welcome to stop by the
              home anytime it's unlocked.
            </p>
          </motion.div>
        </div>
      </motion.div>
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

export default Closing;

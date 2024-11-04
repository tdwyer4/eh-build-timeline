import React from "react";
import { motion } from "framer-motion";
import styles from "./Cta.module.css";
import ctaVideo from "../../media/videos/ctaWizard.mp4";

const CTA = () => {
  return (
    <div className={styles.body}>
      <motion.div
        className={styles.mainContainer}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.div
          className={styles.textContainer}
          initial={{ y: -20 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.h1 className={styles.heading}>
            Your Dream Home Awaits
          </motion.h1>
          <motion.h2 className={styles.subheading}>
            Find your perfect space today
          </motion.h2>
          <div className={styles.buttonContainer}>
            <motion.button className={styles.exploreButton}>
              Explore Homes
            </motion.button>
            <motion.button className={styles.contactButton}>
              Contact Us
            </motion.button>
          </div>
        </motion.div>
        <motion.div
          className={styles.videoContainer}
          initial={{ scale: 0.95 }}
          whileInView={{}}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className={styles.videoFrame}>
            <video
              src={ctaVideo}
              muted
              autoPlay
              loop={true}
              className={styles.videoFit}
            />
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default CTA;

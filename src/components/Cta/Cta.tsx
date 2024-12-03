import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import styles from "./Cta.module.css";
import GradientType from "../GradientType/gradientType";
import ctaVideo from "../../media/videos/ctaWizard.mp4";

// Import images manually
const star1 = require("../../Cta/stars/star1.png");
const star2 = require("../../Cta/stars/star2.png");
const star3 = require("../../Cta/stars/star3.png");
const star4 = require("../../Cta/stars/star4.png");
const star5 = require("../../Cta/stars/star5.png");


// This function generates a random image from the imported images
const getRandomImage = () => {
  const images = [star1, star2, star3, star4, star5];
  const randomIndex = Math.floor(Math.random() * images.length);
  return images[randomIndex];
};

const Star = () => {
  const [position, setPosition] = useState({ x: Math.random() * 100, y: 100 });
  const [opacity, setOpacity] = useState(1);

  useEffect(() => {
    // Animate the position and opacity
    setPosition({ x: Math.random() * 100, y: -20 });
    setTimeout(() => setOpacity(0), 1000); // Fade out after 1 second

    const interval = setInterval(() => {
      setPosition((prev) => ({
        ...prev,
        y: prev.y - 10, // Moves the star up
      }));
    }, 50);

    return () => clearInterval(interval); // Clean up the interval on component unmount
  }, []);

  return (
    <motion.img
      src={getRandomImage()} // Use the imported random image
      className={styles.star}
      style={{
        position: "absolute",
        left: `${position.x}%`,
        bottom: `${position.y}vh`,
        opacity: opacity,
        transition: "opacity 1s ease-out",
        width: "20px", // Adjust size of the stars
        height: "20px", // Adjust size of the stars
      }}
      alt="Star"
    />
  );
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const CTA = () => {
  const [showStars, setShowStars] = useState(true);

  useEffect(() => {
    // Show random stars at intervals
    const interval = setInterval(() => {
      setShowStars(true);
      setTimeout(() => setShowStars(false), 2000); // Hide stars after 2 seconds
    }, 500);

    return () => clearInterval(interval); // Cleanup the interval when component unmounts
  }, []);

  return (
    <div className={styles.body}>
      <motion.div
        className={styles.mainContainer}
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
      >
        <motion.div className={styles.textContainer} variants={fadeInUp}>
          <GradientType delay={0.5}>Your Dream Home Awaits</GradientType>
          <motion.h2 className={styles.subheading} variants={fadeInUp}>
            Find your perfect space today
          </motion.h2>
          <motion.div className={styles.buttonContainer} variants={fadeInUp}>
            <motion.button className={styles.tealButton} variants={fadeInUp}>
              Explore Homes
            </motion.button>
            <motion.button className={styles.purpleButton} variants={fadeInUp}>
              Contact Us
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Radial Gradient Squares */}
        <div className={styles.radialGradient1}></div>
        <div className={styles.radialGradient2}></div>

        {/* Generate Stars if showStars is true */}
        {showStars &&
          Array.from({ length: 10 }).map((_, index) => <Star key={index} />)} {/* Generates 10 stars */}
      </motion.div>
    </div>
  );
};

export default CTA;

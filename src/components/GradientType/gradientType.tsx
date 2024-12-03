import React from "react";
import styles from "./gradientType.module.css";
import { motion } from "framer-motion";

interface GradientTypeProps {
  children: React.ReactNode;
  delay?: number; // Optional delay prop
}

const GradientType: React.FC<GradientTypeProps> = ({ children, delay = 2 }) => {
  return (
    <div className={styles.containerGradientType}>
      <motion.div
        className={styles.gradientText}
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: delay, duration: 0.5, ease: "easeOut" }}
      >
        {children}
      </motion.div>
    </div>
  );
};

export default GradientType;

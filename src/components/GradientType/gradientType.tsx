import React from "react";
import styles from "./gradientType.module.css";
import { motion } from "framer-motion";

interface GradientTypeProps {
  children: React.ReactNode;
}

const GradientType: React.FC<GradientTypeProps> = ({ children }) => {
  return (
    <div className={styles.containerGradientType}>
      <motion.div
        className={styles.gradientText}
        initial={{ scale: 0, y: 0 }}
        whileInView={{ scale: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.5, ease: "easeOut" }}
      >
        {children}
      </motion.div>
    </div>
  );
};

export default GradientType;
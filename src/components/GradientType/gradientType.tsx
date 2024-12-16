import React from "react";
import styles from "./gradientType.module.css";

interface GradientTypeProps {
  children: React.ReactNode;
}

const GradientType: React.FC<GradientTypeProps> = ({ children }) => {
  return (
    <div className={styles.containerGradientType}>
      <div className={styles.gradientText}>
        {children}
      </div>
    </div>
  );
};

export default GradientType;

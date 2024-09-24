import React, { ReactNode } from "react";
import styles from "./ParallaxContent.module.css";

const MoreContent = ({ title, para }: { title: string; para: string }) => {
  return (
    <div className={styles.contentSectionContainer}>
      <h2 className={styles.contentSectionh2}>{title}</h2>
      <div className={styles.contentSectionDivvy}>
        <p className={styles.contentSectionp}>{para}</p>
        <button className={styles.contentSectionButton}>Learn more</button>
      </div>
    </div>
  );
};

export default MoreContent;

import React, { ReactNode } from "react";
import styles from "./ParallaxContent.module.css";

const MoreContent = () => (
  <div className={styles.contentSectionContainer}>
    <h2 className={styles.contentSectionh2}>
      Additional content explaining the above card here
    </h2>
    <div className={styles.contentSectionDivvy}>
      <p className={styles.contentSectionp}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi,
        blanditiis soluta eius quam modi aliquam quaerat odit deleniti minima
        maiores voluptate est ut saepe accusantium maxime doloremque nulla
        consectetur possimus.
      </p>
      <p className={styles.contentSectionp}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
        reiciendis blanditiis aliquam aut fugit sint.
      </p>
      <button className={styles.contentSectionButton}>Learn more</button>
    </div>
  </div>
);

export default MoreContent;

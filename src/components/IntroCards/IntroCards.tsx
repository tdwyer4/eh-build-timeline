import React, { useContext, useRef, useState } from "react";
import { motion } from "framer-motion";
import styles from "./IntroCards.module.css";
import Modal from "../Modal/Modal";
import useModal from "../Modal/useModal";

export default function IntroCards() {
  const scrollRef = useRef(null);
  const { isOpen, toggle } = useModal();

  return (
    <div className={styles.containerIntro}>
      <section className={`${styles.leftIntro} ${styles.bigCard}`}>
        <h3 className="">Why choose Executive?</h3>
        <p className="">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </section>

      <section className={styles.rightIntro} ref={scrollRef}>
        <motion.div
          className={`${styles.smallCard} ${styles.lightCard}`}
          initial={{ scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          <motion.button className={styles.plusButton} onClick={toggle}>
            +
          </motion.button>
          <div className={styles.cardTop}>
            <h2 className={`${styles.num} ${styles.seafoam}`}>Stat 1</h2>
            {/* <h2 className={`${styles.sign} ${styles.greenSign}`}></h2> */}
            {/*<h4 className="">Explanation</h4>*/}
          </div>
        </motion.div>

        <motion.div
          className={`${styles.smallCard} ${styles.lightCard}`}
          initial={{ scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
        >
          <motion.button className={styles.plusButton} onClick={toggle}>
            +
          </motion.button>
          <div className={styles.cardTop}>
            <h2
              className={`${styles.num} ${styles.place} ${styles.seafoamReverse}`}
            >
              Stat 2
            </h2>
            {/*<h4 className="">Explanation</h4>*/}
          </div>
        </motion.div>

        <motion.div
          className={`${styles.smallCard} ${styles.lightCard}`}
          initial={{ scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          <motion.button className={styles.plusButton} onClick={toggle}>
            +
          </motion.button>
          <div className={styles.cardTop}>
            <h2 className={`${styles.num} ${styles.seafoamReverse}`}>Stat 3</h2>
            {/* <h2 className={`${styles.sign} ${styles.purpleSign}`}></h2> */}
            {/*<h4 className={styles.lightEyebrow}>Explanation</h4>*/}
          </div>
        </motion.div>

        <motion.div
          className={`${styles.smallCard} ${styles.lightCard}`}
          initial={{ scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
        >
          <motion.button className={styles.plusButton} onClick={toggle}>
            +
          </motion.button>
          <div className={styles.cardTop}>
            <h2 className={`${styles.num} ${styles.seafoam}`}>Stat 4</h2>
            {/* <h2 className={`${styles.sign} ${styles.percent} ${styles.redSign}`}></h2> */}
            {/* <h4 className="">Explanation</h4> */}
          </div>

          <Modal
            isOpen={isOpen}
            toggle={toggle}
            header="Modal Header"
            desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum."
          ></Modal>
        </motion.div>
      </section>
    </div>
  );
}

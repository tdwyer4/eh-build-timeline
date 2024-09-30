import React, { ReactNode, useState } from "react";
import styles from "./Modal.module.css";
import { motion, AnimatePresence } from "framer-motion";

interface ModalType {
  children?: ReactNode;
  isOpen: boolean;
  toggle: () => void;
  header: string;
  desc: string;
}

export default function Modal(props: ModalType) {
  return (
    <AnimatePresence>
      {props.isOpen && (
        <motion.div
          className={styles.modalOverlay}
          onClick={props.toggle}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className={styles.modalContainer}>
            <motion.div
              onClick={(e) => e.stopPropagation()}
              className={styles.modalBox}
              initial={{ opacity: 0, scale: 1, y: -250 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 1, y: -250 }}
              transition={{
                duration: 0.1,
                delay: 0,
                ease: [0, 0.5, 1, 1.5],
              }}
            >
              {props.children}
              <div className={styles.buttonPlacement}>
                <button className={styles.modalClose} onClick={props.toggle}>
                  X
                </button>
              </div>
              <div className={styles.contentPlacement}>
                <h2 className={styles.modalHeader}>{props.header}</h2>
                <p className={styles.modalDesc}>{props.desc}</p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

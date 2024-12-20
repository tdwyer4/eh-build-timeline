import React from "react";
import styles from "./Manifest.module.css";
import { motion } from "framer-motion";

interface ManifestProps {
  backgroundColor?: string; // Adding backgroundColor prop
}

export default function Manifest({ backgroundColor }: ManifestProps) {
  return (
    <div
      className={styles.containerManifest}
      style={{ backgroundColor }} // Dynamically set background color
    >
      <motion.a
        className={styles.manifest}
        initial={{ scale: 0, y: 0 }}
        whileInView={{ scale: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.5, ease: "easeOut" }}
      >
        <h1>THE EXECUTIVE EXPERIENCE</h1>
      </motion.a>
    </div>
  );
}

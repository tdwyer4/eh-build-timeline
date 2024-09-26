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
        initial={{ opacity: 0, y: 150 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 3.5, duration: 1, ease: "easeOut" }}
      >
        <h1>
          Executive Homes.
          <br />
          Building Distinction
          <br />
          Since 2010.
        </h1>
      </motion.a>
    </div>
  );
}

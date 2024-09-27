import React, { useContext } from "react";
import "./EndCards.scss";
import { motion } from "framer-motion";

export default function EndCards() {
  return (
    <div className="container-cards">
      <div className={`left-card card light-card`}>
        <h3 className={`clean light-heading`}></h3>
        <img className="code" src="" />
      </div>

      <div className={`right-card card light-card`}>
        <h3 className="light-heading"></h3>
        <p className={`clean light-eybrow`}>via Google Lighthouse</p>

        <div className="card-content">
          <motion.img
            className="performance-node perf"
            src=""
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
          />
          <motion.img
            className="performance-node acc"
            src=""
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          />
          <motion.img
            className="performance-node best"
            src=""
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          />
          <motion.img
            className="performance-node seo"
            src=""
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
          />
        </div>
      </div>
    </div>
  );
}

import React from "react";
import { motion } from "framer-motion";
import styles from "./ChooseHouse.module.css";
import FPVideo from "../../media/floorplansV2.mp4";
import PLVideo from "../../media/lots.mp4";
import PLImage from "../../media/PickALot.png";
import FPImage from "../../media/PickFloorPlan.png";

const ChooseHouse = () => {
  const sides = [
    {
      id: 1,
      title: "Choose A Lot",
      paragraph:
        "Start by picking a lot in one of our neighborhoods. The website will identify every floor plan that's a match for your lot. ",
      image: `${PLImage}`,
    },
    {
      id: 2,
      title: "Pick Your Plan",
      paragraph:
        "Or start by picking your floor plan. The website will show you every lot where your plan can be built. ",
      image: `${FPImage}`,
    },
  ];

  return (
    <div className={styles.splitScreen}>
      {sides.map((side, line) => (
        <>
          <motion.div
            key={side.id}
            className={styles.side}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className={styles.title}>{side.title}</h1>
            <p className={styles.paragraph}>{side.paragraph}</p>
            {/* <video src={side.image} className={styles.image} muted autoPlay /> */}
            <motion.img
              src={side.image}
              className={styles.image}
              initial={{
                rotateY: -60,
                scale: 0.7,
                opacity: 0,
                x: 0,
              }}
              whileInView={{
                rotateY: 0,
                scale: 1,
                opacity: 1,
                x: 0,
              }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
            />
          </motion.div>
          {line === 0 && (
            <div className={styles.dividerContainer}>
              <div className={styles.divLine}></div>
              <div className={styles.divBox}>
                <p>OR</p>
              </div>
            </div>
          )}
        </>
      ))}
    </div>
  );
};

export default ChooseHouse;

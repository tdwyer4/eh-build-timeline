// Carousel.tsx
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import styles from "./Carousel.module.css";

const images = [
  "https://www.executivehomes.com/static/media/OneHundredPlusLayoutsImage.02de467e8933a912438e.jpg",
  "https://www.executivehomes.com/static/media/CottagesImage.bd1fe48687e47e05e37d.png",
  "https://www.executivehomes.com/static/media/SideEntryGarageImage.bce2143d7780c333f826.png",
  "https://www.executivehomes.com/static/media/OneHundredPlusLayoutsImage.02de467e8933a912438e.jpg",
  "https://www.executivehomes.com/static/media/CottagesImage.bd1fe48687e47e05e37d.png",
  "https://www.executivehomes.com/static/media/SideEntryGarageImage.bce2143d7780c333f826.png",
  // Add more images as needed
];

const Carousel = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: targetRef });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-55%"]);

  return (
    <div className={styles.carousel} ref={targetRef}>
      <div className={styles.contentContainer}>
        <motion.div className={styles.images} style={{ x }}>
          {images.map((image, index) => (
            <motion.div
              className={styles.imageItem}
              key={index}
              initial={{ opacity: 0, y: 150 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <img src={image} alt={`carousel-image-${index}`} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Carousel;

import React, { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import styles from "./ScrollCarousel.module.css";

interface ScrollCarouselProps {
  cards: { image: string; title: string; paragraph: string }[];
}

const ScrollCarousel: React.FC<ScrollCarouselProps> = ({ cards }) => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [currentCard, setCurrentCard] = useState<number>(0);
  const targetRef2 = useRef(null);
  const { scrollYProgress: scrollYProgressTarget2 } = useScroll({
    target: targetRef2,
  });

  useEffect(() => {
    // Ensure the carousel starts from the first card
    if (carouselRef.current) {
      carouselRef.current.scrollLeft = 0;
    }
  }, []);

  const x = useTransform(scrollYProgressTarget2, [0, 1], ["0%", "-55%"]);

  const headerOpacity = useTransform(scrollYProgressTarget2, [0, 0.1], [1, 0]);

  return (
    <div className={styles.carousel} ref={targetRef2}>
      <div className={styles.contentContainer}>
        <motion.div>
          <div className={styles.headerTitle}>
            <motion.h2 style={{ opacity: headerOpacity }}>
              Initial Preparation
            </motion.h2>
          </div>
        </motion.div>
        <motion.div className={styles.images} style={{ x }}>
          {cards.map((item, index) => (
            <motion.div
              className={styles.imageItem}
              key={index}
              initial={{ opacity: 0, y: 150 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5, ease: "easeOut" }}
            >
              <img src={item.image} alt={`carousel-image-${index}`} />
              <div className={styles.text}>
                <h2>{item.title}</h2>
                <p>{item.paragraph}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default ScrollCarousel;

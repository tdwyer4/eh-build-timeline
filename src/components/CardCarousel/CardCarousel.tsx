import React, { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import styles from "./CardCarousel.module.css";

interface CardCarouselProps {
  cards: { image: string; title: string; paragraph: string }[];
}

const CardCarousel: React.FC<CardCarouselProps> = ({ cards }) => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [currentCard, setCurrentCard] = useState<number>(0);
  const [currentText, setCurrentText] = useState<number>(0);

  useEffect(() => {
    // Ensure the carousel starts from the first card
    if (carouselRef.current) {
      carouselRef.current.scrollLeft = 0;
    }
  }, []);

  // Function to handle scrolling to the next card when a card is clicked
  const scrollToCard = (index: number) => {
    if (carouselRef.current) {
      const cardWidth = carouselRef.current.scrollWidth / cards.length;
      // Offset the scroll slightly so part of the previous and next card is visible
      const scrollAmount = cardWidth * index - cardWidth * 0.5; // Adjust 0.2 to control how much of the next/prev card is visible

      carouselRef.current.scrollTo({
        left: scrollAmount,
        behavior: "smooth",
      });
      setCurrentCard(index);
      setCurrentText(index);
    }
  };

  return (
    <>
      <div className={styles.headerContainer}>
        <motion.div
          className={styles.carouselInfo}
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          <h2 className={styles.carouselHeader}>Make Your Selections</h2>
          <p className={styles.carouselText}>
            This is just some descriptive text to tell you more about making
            selections.
          </p>
        </motion.div>
      </div>
      <div className={styles.carouselContainer}>
        <motion.div
          className={styles.carousel}
          ref={carouselRef}
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          {cards.map((card, index) => (
            <motion.div
              key={index}
              className={`${styles.carouselCard} ${
                currentCard === index ? styles.active : ""
              }`}
              onClick={() => scrollToCard(index)}
              whileTap={{ scale: 1 }}
              initial={{ y: 50 }}
              whileInView={{ y: 0 }}
              transition={{ duration: 0.0, ease: "easeIn" }}
              style={{
                width: "80%", // Make each card take up 80% of the carousel width to show part of the next/previous card
                margin: "0 0%", // Add margins to the left and right to create space for the next/previous cards
              }}
            >
              <img
                src={card.image}
                alt={card.title}
                className={styles.cardImage}
              />
              <h2
                key={index}
                className={`${styles.cardTitle} ${
                  currentText === index ? styles.activeTitle : ""
                }`}
              >
                {card.title}
              </h2>
              <p className={styles.cardDescription}>{card.paragraph}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </>
  );
};

export default CardCarousel;

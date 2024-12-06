import React, { useState, useEffect } from "react";
import WarrantyCard from "./WarrantyCard";
import { cards as warrantyCards } from "../../components/Warranty/WarrantyData"; // Import your cards data
import styles from "./WarrantySlider.module.css";

// Define constants for card sizes
const CARD_SIZE_LG = 365;
const CARD_SIZE_SM = 290;

const WarrantySlider: React.FC = () => {
  const [cardSize, setCardSize] = useState(CARD_SIZE_LG);
  const [selections, setSelections] = useState(warrantyCards);

  const handleMove = (position: number) => {
    const copy = [...selections];

    if (position > 0) {
      for (let i = position; i > 0; i--) {
        const firstEl = copy.shift();
        if (!firstEl) return;
        copy.push(firstEl);
      }
    } else {
      for (let i = position; i < 0; i++) {
        const lastEl = copy.pop();
        if (!lastEl) return;
        copy.unshift(lastEl);
      }
    }

    setSelections(copy);
  };

  useEffect(() => {
    const handleResize = () => {
      setCardSize(window.innerWidth >= 640 ? CARD_SIZE_LG : CARD_SIZE_SM);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className={styles.sliderWrap}>
      <div className={styles.cards}>
        {selections.map((card, idx) => {
          let position = 0;

          if (selections.length % 2) {
            position = idx - (selections.length + 1) / 2;
          } else {
            position = idx - selections.length / 2;
          }

          return (
            <WarrantyCard
              key={card.id}
              card={card}
              position={position}
              handleMove={handleMove}
              cardSize={cardSize}
            />
          );
        })}
      </div>

      <div className={styles.controls}>
        <button
          onClick={() => handleMove(-1)}
          className={styles.prevButton}
          aria-label="Previous Card"
        >
          ←
        </button>
        <button
          onClick={() => handleMove(1)}
          className={styles.nextButton}
          aria-label="Next Card"
        >
          →
        </button>
      </div>
    </div>
  );
};

export default WarrantySlider;

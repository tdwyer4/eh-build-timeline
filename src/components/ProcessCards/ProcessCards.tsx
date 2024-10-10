import React, { useState } from "react";
import { motion, AnimatePresence, easeInOut } from "framer-motion";
import styles from "./ProcessCards.module.css";
import CardImg1 from "../../media/PCard-1.jpg";

const cards = [
  {
    id: 1,
    title: "Pick Your Lot",
    subtitle: "Step 1",
    content: "Content for card 1. Lorem ipsum dolor sit amet.",
    videoSrc:
      "https://www.executivehomes.com/static/media/InnovationDesktopVideo.4dcf81559d735a1523fb.mp4",
    navLabel: "Pick Lot",
  },
  {
    id: 2,
    title: "Choose Your Floor Plan",
    subtitle: "Step 2",
    content:
      "Our in-house design team has created unique layouts centered around wide-open living spaces with convenient features and usable space at every turn.",
    videoSrc:
      "https://www.executivehomes.com/static/media/InnovationDesktopVideo.4dcf81559d735a1523fb.mp4",
    navLabel: "Choose Floor Plan",
  },
  {
    id: 3,
    title: "Choose Styles",
    subtitle: "Step 3",
    content: "Content for card 3. Duis aute irure dolor in reprehenderit.",
    videoSrc:
      "https://www.executivehomes.com/static/media/InnovationDesktopVideo.4dcf81559d735a1523fb.mp4",
    navLabel: "Choose Styles",
  },
  {
    id: 4,
    title: "Select Upgrades",
    subtitle: "Step 4",
    content: "Content for card 4. Duis aute irure dolor in reprehenderit.",
    videoSrc:
      "https://www.executivehomes.com/static/media/InnovationDesktopVideo.4dcf81559d735a1523fb.mp4",
    navLabel: "Select Upgrades",
  },
  {
    id: 5,
    title: "Sign the Purchase Agreement",
    subtitle: "Step 5",
    content: "Content for card 5. Duis aute irure dolor in reprehenderit.",
    videoSrc:
      "https://www.executivehomes.com/static/media/InnovationDesktopVideo.4dcf81559d735a1523fb.mp4",
    navLabel: "Purchase Agreement",
  },
];

export default function ProcessCards() {
  const [activeCardIndex, setActiveCardIndex] = useState(0);
  const [activeCard, setActiveCard] = useState(false);

  const toggleCard = (index: number) => {
    setActiveCardIndex(index);
    setActiveCard(true);
  };

  const goToCard = (index: number) => {
    setActiveCardIndex(index);
  };

  return (
    <div className={styles.containerIntro}>
      <section className={styles.rightIntro}>
        <AnimatePresence>
          {!activeCard && (
            <motion.div
              className={styles.smallCard}
              initial={{ y: 0 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              onClick={() => toggleCard(0)}
              style={{ width: 500, marginTop: 140 }}
            >
              <motion.img src={CardImg1} className={styles.CardImg} />
            </motion.div>
          )}
        </AnimatePresence>

        {!activeCard && (
          <div className={styles.cardContainer}>
            <motion.div
              className={styles.smallCard}
              initial={{ opacity: 0, y: 150 }}
              whileInView={{ opacity: 0.5, y: 0 }}
              viewport={{ once: true }}
            >
              <motion.img src={CardImg1} className={styles.CardImg} />
            </motion.div>
            <motion.div
              className={styles.smallCard}
              initial={{ opacity: 0, y: 150 }}
              whileInView={{ opacity: 0.5, y: 0 }}
              viewport={{ once: true }}
            >
              <motion.img src={CardImg1} className={styles.CardImg} />
            </motion.div>
          </div>
        )}

        <AnimatePresence mode="wait">
          {activeCard && (
            <motion.div
              key={cards[activeCardIndex].id}
              className={styles.expandedCard}
              initial={{ opacity: 0, y: 200 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -200 }}
              transition={{ duration: 0.3 }}
            >
              <motion.video
                className={styles.videoBackground}
                src={cards[activeCardIndex].videoSrc}
                autoPlay
                muted
                loop
              />

              <motion.div className={styles.contentOverlay}>
                <div className={styles.leftLeft}>
                  <h1>{cards[activeCardIndex].title}</h1>
                  <p>{cards[activeCardIndex].subtitle}</p>
                </div>
                <div className={styles.rightRight}>
                  <div className={styles.infoSign}>i</div>
                  <div className={styles.plusSign}>+</div>
                </div>
              </motion.div>
              <p>{cards[activeCardIndex].content}</p>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Dynamic Navigation */}
        <div
          className={`${styles.carouselNavContainer} ${
            activeCard ? styles.active : ""
          }`}
        >
          <div className={styles.carouselNav}>
            {cards.map((card, index) => (
              <button
                key={card.id}
                onClick={() => goToCard(index)}
                className={activeCardIndex === index ? styles.active : ""}
              >
                {card.navLabel}
              </button>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

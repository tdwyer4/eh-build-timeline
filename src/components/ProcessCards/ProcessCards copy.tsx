import { motion, useTransform, useScroll, useMotionValue } from "framer-motion";
import { useRef } from "react";
import styles from "./ProcessCards.module.css";

const ProcessCards = () => {
  return (
    <div className={styles.scrollContainer}>
      <HorizontalScrollCarousel />
    </div>
  );
};

const HorizontalScrollCarousel = () => {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["5%", "-100%"], {
    clamp: true,
  });

  return (
    <section ref={targetRef} className={styles.mainContainer}>
      <div className={styles.cardContainer}>
        <motion.div
          style={{ x }}
          className={styles.card}
          viewport={{ once: true, amount: 5 }}
        >
          {cards.map((card, index) => {
            return (
              <Card
                card={card}
                key={card.id}
                index={index}
                scrollYProgress={scrollYProgress}
              />
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

const Card = ({
  card,
  index,
  scrollYProgress,
}: {
  card: CardType;
  index: number;
  scrollYProgress: any;
}) => {
  const y = useMotionValue(0);
  const scale = useTransform(
    scrollYProgress,
    [index * 0.2 - 0.1, index * 0.2, index * 0.2 + 0.1],
    [0.95, 1, 0.95],
    {
      clamp: false,
    }
  );
  const opacity = useTransform(
    scrollYProgress,
    [index * 0.2 - 0.1, index * 0.2, index * 0.2 + 0.1],
    [1, 1, 1],
    {
      clamp: false,
    }
  );
  return (
    <motion.div
      key={card.id}
      style={{ scale, opacity }}
      className={styles.cardTypeContainer}
      initial={{ opacity: 0, y: 150 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      <div
        style={{
          backgroundImage: `url(${card.url})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className={styles.cardImgContainer}
      ></div>
      <div className={styles.cardTitleContainer}>
        <p className={styles.cardTitle}>{card.title}</p>
      </div>
    </motion.div>
  );
};

export default ProcessCards;

type CardType = {
  url: string;
  title: string;
  id: number;
};

const cards: CardType[] = [
  {
    url: "/imgs/abstract/1.jpg",
    title: "SELECT YOUR STYLE",
    id: 1,
  },
  {
    url: "/imgs/abstract/2.jpg",
    title: "LUXURY IS INCLUDED",
    id: 2,
  },
  {
    url: "/imgs/abstract/3.jpg",
    title: "CUSTOMIZE WITH UPGRADES",
    id: 3,
  },
  {
    url: "/imgs/abstract/4.jpg",
    title: "LET'S GET STARTED!",
    id: 4,
  },
];

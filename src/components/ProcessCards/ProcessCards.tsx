import { motion, useTransform, useScroll } from "framer-motion";
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

  const x = useTransform(scrollYProgress, [0, 1], ["5%", "-70%"], {
    clamp: true,
  });

  return (
    <section ref={targetRef} className={styles.mainContainer}>
      <div className={styles.cardContainer}>
        <motion.div
          style={{ x }}
          className={styles.card}
          viewport={{ once: true, amount: 1 }}
        >
          {cards.map((card) => {
            return <Card card={card} key={card.id} />;
          })}
        </motion.div>
      </div>
    </section>
  );
};

const Card = ({ card }: { card: CardType }) => {
  return (
    <motion.div
      key={card.id}
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
    title: "SELECT STYLE",
    id: 1,
  },
  {
    url: "/imgs/abstract/2.jpg",
    title: "SEE INCLUDED FEATURES",
    id: 2,
  },
  {
    url: "/imgs/abstract/3.jpg",
    title: "CHOOSE UPGRADES",
    id: 3,
  },
  {
    url: "/imgs/abstract/4.jpg",
    title: "SIGN PURCHASE AGREEMENT",
    id: 4,
  },
];

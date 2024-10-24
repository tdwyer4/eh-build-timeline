import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";
import styles from "./CardCarousel.module.css";

const CardCarousel = () => {
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

  const x = useTransform(scrollYProgress, [0, 1], ["10%", "-60%"], {
    clamp: true,
  });

  return (
    <>
      <section ref={targetRef} className={styles.mainContainer}>
        <div className={styles.cardContainer}>
          <SectionTitle />
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
    </>
  );
};

const Card = ({ card }: { card: CardType }) => {
  return (
    <motion.div
      key={card.id}
      className={styles.cardTypeContainer}
      initial={{ opacity: 0, y: 150 }}
      whileInView={{ opacity: 1, y: 0, transition: { duration: 1 } }}
      transition={{ delay: 1, ease: "easeOut" }}
    >
      <img src={card.url} className={styles.cardImgContainer} />
      <div className={styles.cardTitleContainer}>
        <p className={styles.cardTitle}>{card.title}</p>
        <p className={styles.cardDesc}>{card.description}</p>
      </div>
    </motion.div>
  );
};

const SectionTitle = () => {
  return (
    <div className={styles.headerContainer}>
      <motion.div
        className={styles.carouselInfo}
        initial={{ opacity: 0, y: -150 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeInOut" }}
      >
        <h2 className={styles.carouselHeader}>Make Your Selections</h2>
        <p className={styles.carouselText}>
          This is just some descriptive text to tell you more about making
          selections.
        </p>
      </motion.div>
    </div>
  );
};

export default CardCarousel;

type CardType = {
  url: string;
  title: string;
  description: string;
  id: number;
};

const cards: CardType[] = [
  {
    url: "https://www.executivehomes.com/static/media/OneHundredPlusLayoutsImage.02de467e8933a912438e.jpg",
    title: "Layout Designs",
    description: "Discover amazing layout designs for your home.",
    id: 1,
  },
  {
    url: "https://www.executivehomes.com/static/media/CottagesImage.bd1fe48687e47e05e37d.png",
    title: "Cottage Plans",
    description: "Explore cozy cottage plans perfect for small families.",
    id: 2,
  },
  {
    url: "https://www.executivehomes.com/static/media/SideEntryGarageImage.bce2143d7780c333f826.png",
    title: "Garage Entry",
    description: "Side entry garages for a unique and functional home.",
    id: 3,
  },
  {
    url: "https://www.executivehomes.com/static/media/OneHundredPlusLayoutsImage.02de467e8933a912438e.jpg",
    title: "Modern Layouts",
    description: "Modern layout designs for efficient living.",
    id: 4,
  },
  {
    url: "https://www.executivehomes.com/static/media/CottagesImage.bd1fe48687e47e05e37d.png",
    title: "Rustic Cottages",
    description: "Charming rustic cottages for a cozy lifestyle.",
    id: 5,
  },
  {
    url: "https://www.executivehomes.com/static/media/SideEntryGarageImage.bce2143d7780c333f826.png",
    title: "Garage Space",
    description: "Maximize your space with smart garage designs.",
    id: 6,
  },
  {
    url: "https://www.executivehomes.com/static/media/OneHundredPlusLayoutsImage.02de467e8933a912438e.jpg",
    title: "Layout Designs",
    description: "Discover amazing layout designs for your home.",
    id: 7,
  },
  {
    url: "https://www.executivehomes.com/static/media/CottagesImage.bd1fe48687e47e05e37d.png",
    title: "Cottage Plans",
    description: "Explore cozy cottage plans perfect for small families.",
    id: 8,
  },
  {
    url: "https://www.executivehomes.com/static/media/SideEntryGarageImage.bce2143d7780c333f826.png",
    title: "Garage Entry",
    description: "Side entry garages for a unique and functional home.",
    id: 9,
  },
];

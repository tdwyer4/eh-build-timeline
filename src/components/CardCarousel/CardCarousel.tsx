import { motion, useScroll } from "framer-motion";
import { useRef } from "react";
import styles from "./CardCarousel.module.css";
import Card from "./Card";

const CardCarousel = () => {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });
  return (
    <div ref={targetRef} className={styles.mainContainer}>
      <HeaderText />
      <Selections />
    </div>
  );
};

function Selections() {
  const container = useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end end"],
  });

  return (
    <>
      <div className={styles.selectionsContainer}>
        <main className={styles.cardContainer} ref={container}>
          {cards.map((card, i) => {
            const targetScale = 1 - (cards.length - i) * 0.05;
            return (
              <Card
                key={i}
                i={i}
                {...card}
                progress={scrollYProgress}
                range={[i * 0.05, 1]}
                targetScale={targetScale}
              />
            );
          })}
        </main>
      </div>
    </>
  );
}

interface ManifestProps {
  backgroundColor?: string; // Adding backgroundColor prop
}

function HeaderText({ backgroundColor }: ManifestProps) {
  return (
    <div className={styles.headerContainer} style={{ backgroundColor }}>
      <div className={styles.textContainer}>
        <p className={styles.headerText}>Make Your Selections</p>
        <p className={styles.descText}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur.
        </p>
      </div>
    </div>
  );
}

export default CardCarousel;

const cards = [
  {
    img: "https://www.executivehomes.com/static/media/OneHundredPlusLayoutsImage.02de467e8933a912438e.jpg",
    title: "Layout Designs",
    description: "Discover amazing layout designs for your home.",
    id: 1,
  },
  {
    img: "https://www.executivehomes.com/static/media/CottagesImage.bd1fe48687e47e05e37d.png",
    title: "Cottage Plans",
    description: "Explore cozy cottage plans perfect for small families.",
    id: 2,
  },
  {
    img: "https://www.executivehomes.com/static/media/SideEntryGarageImage.bce2143d7780c333f826.png",
    title: "Garage Entry",
    description: "Side entry garages for a unique and functional home.",
    id: 3,
  },
  {
    img: "https://www.executivehomes.com/static/media/OneHundredPlusLayoutsImage.02de467e8933a912438e.jpg",
    title: "Modern Layouts",
    description: "Modern layout designs for efficient living.",
    id: 4,
  },
  {
    img: "https://www.executivehomes.com/static/media/CottagesImage.bd1fe48687e47e05e37d.png",
    title: "Rustic Cottages",
    description: "Charming rustic cottages for a cozy lifestyle.",
    id: 5,
  },
  {
    img: "https://www.executivehomes.com/static/media/SideEntryGarageImage.bce2143d7780c333f826.png",
    title: "Garage Space",
    description: "Maximize your space with smart garage designs.",
    id: 6,
  },
  {
    img: "https://www.executivehomes.com/static/media/OneHundredPlusLayoutsImage.02de467e8933a912438e.jpg",
    title: "Layout Designs",
    description: "Discover amazing layout designs for your home.",
    id: 7,
  },
  {
    img: "https://www.executivehomes.com/static/media/CottagesImage.bd1fe48687e47e05e37d.png",
    title: "Cottage Plans",
    description: "Explore cozy cottage plans perfect for small families.",
    id: 8,
  },
  {
    img: "https://www.executivehomes.com/static/media/SideEntryGarageImage.bce2143d7780c333f826.png",
    title: "Garage Entry",
    description: "Side entry garages for a unique and functional home.",
    id: 9,
  },
];

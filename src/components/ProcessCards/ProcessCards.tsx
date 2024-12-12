import { motion, useScroll } from "framer-motion";
import { useRef } from "react";
import styles from "./ProcessCards.module.css";
import Card from "./Card";
import UpgradesPic from "../../media/upgrades.jpg";

const ProcessCards = () => {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });
  return (
    <div ref={targetRef} className={styles.mainContainer}>
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
            const targetScale = 1 - (cards.length - i) * 0.03;
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

export default ProcessCards;

const cards = [
  {
    img: "https://assets.cloud.executivehomes.com/static/pages/styles-page/TwoStylesImage.jpg",
    title: "Select Your Style",
    description: "Choose the style that best matches your preferences.",
    id: 1,
  },
  {
    img: "https://assets.cloud.executivehomes.com/prod/public/house-styles/STY~TRANSITIONAL/SMD~g-xsZbV9EQ0wUZvd",
    title: "Luxury is Included",
    description:
      "Every home is loaded with premium finishes at no additional cost.",
    id: 2,
  },
  {
    img: `${UpgradesPic}`,
    title: "Customize with Upgrades",
    description:
      "100+ upgrades are available to choose online to personalize your home.",
    id: 3,
  },
  {
    img: "https://www.executivehomes.com/static/media/OneHundredPlusLayoutsImage.02de467e8933a912438e.jpg",
    title: "Let's Get Started!",
    description:
      "Our simple Purchase Agreement locks in your price and guarantees your home's quality.",
    id: 4,
  },
];

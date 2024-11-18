import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import styles from "./Warranty.module.css";
import ACIcon from "../../media/icons/AC.png";
import ApplianceIcon from "../../media/icons/Appliances.png";
import ElectricalIcon from "../../media/icons/Electrical.png";
import HeatingIcon from "../../media/icons/Heating.png";
import HVACIcon from "../../media/icons/HVAC.png";
import MembersIcon from "../../media/icons/Members.png";
import PlumbingIcon from "../../media/icons/Plumbing.png";
import WarrantyIcon from "../../media/icons/Warranty.png";

const CARD_SIZE_LG = 365;
const CARD_SIZE_SM = 290;

const BORDER_SIZE = 0;
const CORNER_CLIP = 0;
const CORNER_LINE_LEN = Math.sqrt(
  CORNER_CLIP * CORNER_CLIP + CORNER_CLIP * CORNER_CLIP
);

const ROTATE_DEG = 0.8;

const STAGGER = 0;
const CENTER_STAGGER = 0;

const SECTION_HEIGHT = 800;

export const Warranty = () => {
  const [cardSize, setCardSize] = useState(CARD_SIZE_LG);

  const [selections, setselections] = useState(WARRANTY_DATA);

  const handleMove = (position: number) => {
    const copy = [...selections];

    if (position > 0) {
      for (let i = position; i > 0; i--) {
        const firstEl = copy.shift();

        if (!firstEl) return;

        copy.push({ ...firstEl, tempId: Math.random() });
      }
    } else {
      for (let i = position; i < 0; i++) {
        const lastEl = copy.pop();

        if (!lastEl) return;

        copy.unshift({ ...lastEl, tempId: Math.random() });
      }
    }

    setselections(copy);
  };

  useEffect(() => {
    const { matches } = window.matchMedia("(min-width: 640px)");

    if (matches) {
      setCardSize(CARD_SIZE_LG);
    } else {
      setCardSize(CARD_SIZE_SM);
    }

    const handleSetCardSize = () => {
      const { matches } = window.matchMedia("(min-width: 640px)");

      if (matches) {
        setCardSize(CARD_SIZE_LG);
      } else {
        setCardSize(CARD_SIZE_SM);
      }
    };

    window.addEventListener("resize", handleSetCardSize);

    return () => window.removeEventListener("resize", handleSetCardSize);
  }, []);

  return (
    <div
      className={styles.sectionWrap}
      style={{
        height: SECTION_HEIGHT,
      }}
    >
      <motion.div className={styles.copyContainer}>
        <h2 className={styles.header}>OUR WARRANTY COVERAGE</h2>
        <p className={styles.paragraph}>
          Explore our range of home warranty coverages that keep your home
          protected year-round. Choose from heating, air conditioning, plumbing,
          and more!
        </p>
      </motion.div>
      {selections.map((t, idx) => {
        let position = 0;

        if (selections.length % 2) {
          position = idx - (selections.length + 1) / 2;
        } else {
          position = idx - selections.length / 2;
        }

        return (
          <SelectionsCard
            key={t.tempId}
            testimonial={t}
            handleMove={handleMove}
            position={position}
            cardSize={cardSize}
          />
        );
      })}
      <div className={styles.btnContainer}>
        <button onClick={() => handleMove(-1)} className={styles.btnWrap}>
          ←
        </button>
        <button onClick={() => handleMove(1)} className={styles.btnWrap}>
          →
        </button>
      </div>
    </div>
  );
};

interface SelectionsProps {
  position: number;
  testimonial: WarrantyType;
  handleMove: Function;
  cardSize: number;
}

const SelectionsCard = ({
  position,
  testimonial,
  handleMove,
  cardSize,
}: SelectionsProps) => {
  const isActive = position === 0;

  return (
    <motion.div
      initial={false}
      onClick={() => handleMove(position)}
      className={`
      ${styles.cardContainer} ${
        isActive ? `${styles.cardActive}` : `${styles.cardInactive}`
      }
      `}
      style={{
        borderWidth: BORDER_SIZE,
      }}
      animate={{
        width: cardSize,
        height: cardSize,
        x: `calc(-50% + ${position * (cardSize / 1.15)}px)`,
        y: `calc(-50% + ${
          isActive ? CENTER_STAGGER : position % 2 ? STAGGER : -STAGGER
        }px)`,
        scale: isActive ? 1 : position % 2 ? ROTATE_DEG : ROTATE_DEG,
      }}
      transition={{
        type: "smooth",
        mass: 3,
        stiffness: 400,
        damping: 50,
      }}
    >
      <span
        className={styles.cardWrap}
        style={{
          right: -BORDER_SIZE,
          top: CORNER_CLIP - BORDER_SIZE,
          width: CORNER_LINE_LEN,
          height: BORDER_SIZE,
        }}
      />
      <img
        src={testimonial.imgSrc}
        alt={`Testimonial image for ${testimonial.by}`}
        className={styles.cardImage}
        style={{}}
      />
      <h3
        className={`${styles.cardHeader} ${
          isActive
            ? `${styles.cardHeaderActive}`
            : `${styles.cardHeaderInactive}`
        }`}
      >
        {testimonial.testimonial}
      </h3>
      <p
        className={`${styles.cardDesc} ${
          isActive ? `${styles.cardDescActive}` : `${styles.cardDescInactive}`
        }`}
      >
        {testimonial.by}
      </p>
    </motion.div>
  );
};

type WarrantyType = {
  tempId: number;
  testimonial: string;
  by: string;
  imgSrc: string;
};

const WARRANTY_DATA: WarrantyType[] = [
  {
    imgSrc: `${HeatingIcon}`,
    testimonial: "Heating",
    by: "If staying warm and cozy is your thing, we’ve got the right home warranty coverage for you. Upgrade to a new HVAC system with exclusive member discounts on top brands.> Heating services include annual maintenance and repair to keep your system running efficiently.",
    tempId: 1,
  },
  {
    imgSrc: `${ACIcon}`,
    testimonial: "Air Conditioning",
    by: "We’ll help make sure your air conditioning keeps its cool so you can too. Keep cool during the summer months with repair services for your AC unit.",
    tempId: 2,
  },
  {
    imgSrc: `${ApplianceIcon}`,
    testimonial: "Kitchen & Laundry Appliances",
    by: "When these home heroes stop working, it’s a good day to have a home warranty. Covering everything from refrigerators to washers and dryers, we help keep your household running.",
    tempId: 3,
  },
  {
    imgSrc: `${ElectricalIcon}`,
    testimonial: "Electrical",
    by: "You don’t have to power through electrical issues. We’ll help you get your spark back (safely of course). Electrical repairs and troubleshooting to keep your home powered and safe.",
    tempId: 4,
  },
  {
    imgSrc: `${PlumbingIcon}`,
    testimonial: "Plumbing",
    by: "Whether you’re dealing with a drip, leak or clog, we’ll help get things flowing again. Full coverage for leaks, clogs, and other plumbing issues that keep water flowing smoothly.",
    tempId: 5,
  },
  {
    imgSrc: `${MembersIcon}`,
    testimonial: "Member Benefits",
    by: "We offer additional services like seasonal HVAC tune-ups and rekeys, as well as partner discounts. Enjoy exclusive discounts and additional services that make maintaining your home easier.",
    tempId: 6,
  },
  {
    imgSrc: `${WarrantyIcon}`,
    testimonial: "Additional Coverage",
    by: "Choose from add-ons like electronics protection, roof leak repair coverage, pool & built-in spa equipment. Expand your coverage with add-ons like electronics protection and roof leak repairs.",
    tempId: 7,
  },
  {
    imgSrc: `${HVACIcon}`,
    testimonial: "New HVAC Program",
    by: "In the market for a new HVAC? Get exclusive pricing on name brand heating and cooling systems. Upgrade to a new HVAC system with exclusive member discounts on top brands.",
    tempId: 8,
  },
];

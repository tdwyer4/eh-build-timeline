import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./FinishQuality.module.css";

import kitchenImage from "../../media/kitchen.jpg";
import livingImage from "../../media/living.jpg";
import bathroomImage from "../../media/bathroom.jpg";
import exteriorImage from "../../media/exterior.jpg";

type Hotpoint = {
  x: number;
  y: number;
  label: string;
  headline: string;
  subhead: string;
  imageSrc: string;
  isActive: boolean;
};

type Category = "kitchen" | "living" | "bathroom" | "exterior";

const backgroundImages: Record<Category, string> = {
  kitchen: kitchenImage,
  living: livingImage,
  bathroom: bathroomImage,
  exterior: exteriorImage,
};

const hotpointsData: Record<Category, Omit<Hotpoint, "isActive">[]> = {
  kitchen: [
    {
      x: 20,
      y: 30,
      label: "Cabinets",
      headline: "Cabinets",
      subhead: "High-quality wood cabinets.",
      imageSrc: kitchenImage,
    },
    {
      x: 40,
      y: 50,
      label: "Stove",
      headline: "Stove",
      subhead: "Modern, energy-efficient stove.",
      imageSrc: kitchenImage,
    },
    {
      x: 60,
      y: 20,
      label: "Sink",
      headline: "Sink",
      subhead: "Stainless steel sink.",
      imageSrc: kitchenImage,
    },
    {
      x: 70,
      y: 80,
      label: "Countertop",
      headline: "Countertop",
      subhead: "Granite countertop surface.",
      imageSrc: kitchenImage,
    },
    {
      x: 85,
      y: 40,
      label: "Lighting",
      headline: "Lighting",
      subhead: "Elegant overhead lighting.",
      imageSrc: kitchenImage,
    },
  ],
  living: [
    {
      x: 25,
      y: 35,
      label: "Sofa",
      headline: "Sofa",
      subhead: "Comfortable, stylish sofa.",
      imageSrc: livingImage,
    },
    {
      x: 45,
      y: 55,
      label: "TV",
      headline: "TV",
      subhead: "Large, high-definition TV.",
      imageSrc: livingImage,
    },
    {
      x: 65,
      y: 25,
      label: "Coffee Table",
      headline: "Coffee Table",
      subhead: "Wooden coffee table.",
      imageSrc: livingImage,
    },
    {
      x: 75,
      y: 85,
      label: "Bookshelf",
      headline: "Bookshelf",
      subhead: "Spacious wooden bookshelf.",
      imageSrc: livingImage,
    },
    {
      x: 90,
      y: 45,
      label: "Rug",
      headline: "Rug",
      subhead: "Soft, luxurious rug.",
      imageSrc: livingImage,
    },
  ],
  bathroom: [
    {
      x: 22,
      y: 32,
      label: "Sink",
      headline: "Sink",
      subhead: "Ceramic bathroom sink.",
      imageSrc: bathroomImage,
    },
    {
      x: 42,
      y: 52,
      label: "Mirror",
      headline: "Mirror",
      subhead: "Wall-mounted bathroom mirror.",
      imageSrc: bathroomImage,
    },
    {
      x: 62,
      y: 22,
      label: "Shower",
      headline: "Shower",
      subhead: "Glass-enclosed shower.",
      imageSrc: bathroomImage,
    },
    {
      x: 72,
      y: 82,
      label: "Toilet",
      headline: "Toilet",
      subhead: "Modern flush toilet.",
      imageSrc: bathroomImage,
    },
    {
      x: 87,
      y: 42,
      label: "Cabinet",
      headline: "Cabinet",
      subhead: "Bathroom storage cabinet.",
      imageSrc: bathroomImage,
    },
  ],
  exterior: [
    {
      x: 18,
      y: 28,
      label: "Patio",
      headline: "Patio",
      subhead: "Outdoor patio area.",
      imageSrc: exteriorImage,
    },
    {
      x: 38,
      y: 48,
      label: "Garden",
      headline: "Garden",
      subhead: "Lush garden space.",
      imageSrc: exteriorImage,
    },
    {
      x: 58,
      y: 18,
      label: "Pool",
      headline: "Pool",
      subhead: "Private swimming pool.",
      imageSrc: exteriorImage,
    },
    {
      x: 68,
      y: 78,
      label: "Fence",
      headline: "Fence",
      subhead: "Wooden privacy fence.",
      imageSrc: exteriorImage,
    },
    {
      x: 83,
      y: 38,
      label: "Garage",
      headline: "Garage",
      subhead: "Two-car garage.",
      imageSrc: exteriorImage,
    },
  ],
};

const FinishQuality: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<Category>("kitchen");
  const [activeHotpoint, setActiveHotpoint] = useState<Hotpoint | null>(null);
  const [tooltipPosition, setTooltipPosition] = useState<{
    top: number;
    left: number;
  }>({ top: 0, left: 0 });

  const tooltipRef = useRef<HTMLDivElement | null>(null);

  const handleHotpointClick = (point: Hotpoint, event: React.MouseEvent) => {
    if (activeHotpoint && activeHotpoint.label === point.label) {
      setActiveHotpoint(null); // Close tooltip if the same hotpoint is clicked again
    } else {
      const target = event.currentTarget as HTMLDivElement;
      const targetRect = target.getBoundingClientRect();

      // Calculate position based on hotpoint's bounding box
      const tooltipTop =
        targetRect.top +
        window.scrollY -
        (tooltipRef.current?.offsetHeight || 150) -
        10; // Adjust for spacing above
      const tooltipLeft =
        targetRect.left +
        window.scrollX +
        targetRect.width / 2 -
        (tooltipRef.current?.offsetWidth || 300) / 2;

      setTooltipPosition({ top: tooltipTop, left: tooltipLeft });
      setActiveHotpoint(point);
    }
  };

  const hotpoints = hotpointsData[activeCategory].map((point) => ({
    ...point,
    isActive: activeHotpoint?.label === point.label,
  }));

  return (
    <div
      className={styles.container}
      style={{ backgroundImage: `url(${backgroundImages[activeCategory]})` }}
    >
      {/* Hotpoints */}
      {hotpoints.map((point, index) => (
        <motion.div
          key={index}
          className={styles.hotpoint}
          style={{ top: `${point.y}vh`, left: `${point.x}vw` }}
          onClick={(event) => handleHotpointClick(point, event)}
        />
      ))}

      {/* Tooltip */}
      <AnimatePresence>
        {activeHotpoint && (
          <motion.div
            ref={tooltipRef}
            className={styles.tooltip}
            style={{
              top: `${tooltipPosition.top}px`,
              left: `${tooltipPosition.left}px`,
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <img
              src={activeHotpoint.imageSrc}
              alt={activeHotpoint.label}
              className={styles.hotpointImage}
            />
            <h1 className={styles.hotpointHeadline}>
              {activeHotpoint.headline}
            </h1>
            <p className={styles.hotpointSubhead}>{activeHotpoint.subhead}</p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Category buttons */}
      <div className={styles.buttonContainer}>
        {(Object.keys(backgroundImages) as Category[]).map((key) => (
          <motion.button
            key={key}
            onClick={() => setActiveCategory(key)}
            whileHover={{ y: -4 }}
            className={styles.button}
          >
            {key.charAt(0).toUpperCase() + key.slice(1)}
          </motion.button>
        ))}
      </div>
    </div>
  );
};

export default FinishQuality;

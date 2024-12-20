import styles from "./GetStarted.module.css";
import React, { useState, useEffect, useRef } from "react";
import {
  motion,
  animate,
  useInView,
  useScroll,
  useTransform,
  MotionValue,
} from "framer-motion";
import PLImage from "../../media/videos/PickALot-V4.mp4";
import FPImage from "../../media/videos/PickFloorPlan-V4.mp4";
import Upgrades from "../../media/videos/Upgrades-V2.mp4";
import Styles from "../../media/videos/Styles.mp4";
import GetStartedStyle from "./GetStartedStyle/GetStartedStyle";

export const GetStarted = () => {
  return (
    <>
      <div className={styles.scrollWrap}>
        <GSFull />
      </div>

      <div className={styles.pagePosition} />
    </>
  );
};

const GSFull = () => {
  return (
    <div className={styles.gsWrap}>
      <Content />
      <Cards />
    </div>
  );
};

const Content = () => {
  return (
    <div className={styles.leftContainer}>
      <h1 className={styles.title}>LET'S Get Started!</h1>
      <h2 className={styles.subtitle}>Now for the fun part!</h2>
      <p className={styles.description}>
        We've developed a turnkey experience to make your new home journey as
        smooth as possible. Just schedule your movers and we'll handle the rest!
      </p>

      <div className={styles.statsContainer}>
        <Stat num={2545} suffix="" subheading="Closed Homes" />

        <Stat num={100} decimals={0} suffix="K" subheading="Resale Value" />

        <Stat num={150} suffix="" subheading="Checklist Items" />

        <Stat num={6} suffix=" MONTHS" subheading="Average Build Time" />
      </div>
    </div>
  );
};

const Cards = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "100% 0%"],
  });

  return (
    <div className={styles.rightContainer} ref={ref}>
      <div className={styles.chooseCardContainer}>
        <ChooseItem
          scrollYProgress={scrollYProgress}
          position={1}
          numItems={5}
          img={PLImage}
          title="Choose A Lot"
          desc="Start by picking a lot in one of our neighborhoods. The website will identify every floor plan that's a match for your lot. "
          altStyle={styles.chooseCard}
        />
        <ChooseItem
          scrollYProgress={scrollYProgress}
          position={2}
          numItems={5}
          img={FPImage}
          title="Pick A Floor Plan"
          desc="Or start by picking your floor plan. The website will show you every lot where your plan can be built. "
          altStyle={styles.chooseCard}
        />
        <ChooseItem
          scrollYProgress={scrollYProgress}
          position={3}
          numItems={5}
          img={Styles}
          title="Select Your Style"
          desc="Choose the style that best matches your preferences. 

"
          altStyle={styles.chooseCard}
        />
        <ChooseItem
          scrollYProgress={scrollYProgress}
          position={4}
          numItems={5}
          img={Upgrades}
          title="Customize With Upgrades"
          desc="100+ upgrades are available to choose online to personalize your home."
          altStyle={styles.chooseCard}
        />
      </div>
    </div>
  );
};

interface Props {
  num: number;

  suffix: string;

  decimals?: number;

  subheading: string;
}

const Stat = ({ num, suffix, decimals = 0, subheading }: Props) => {
  const ref = useRef<HTMLSpanElement | null>(null);

  const isInView = useInView(ref);

  useEffect(() => {
    if (!isInView) return;

    animate(0, num, {
      duration: 2.5,

      onUpdate(value) {
        if (!ref.current) return;

        ref.current.textContent = value.toFixed(decimals);
      },
    });
  }, [num, decimals, isInView]);

  return (
    <div className={styles.stat}>
      <p className={styles.statNumber}>
        <span ref={ref}></span>

        {suffix}
      </p>

      <p className={styles.statDescription}>{subheading}</p>
    </div>
  );
};

const CardItem = ({
  scrollYProgress,
  position,
  numItems,
  img,
  step,
  title,
  desc,
}: {
  scrollYProgress: MotionValue<number>;
  position: number;
  numItems: number;
  img: string;
  step: string;
  title: string;
  desc: string;
}) => {
  const stepSize = 1 / numItems;
  const end = stepSize * position;
  const start = end - stepSize;

  const opacity = useTransform(scrollYProgress, [start, end], [1, 0]);
  const scale = useTransform(scrollYProgress, [start, end], [1, 0.9]);

  return (
    <motion.div
      className={styles.card}
      style={{
        opacity,
        scale,
        backgroundImage: `url(${img})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        height: "300px",
        width: "100%",
      }}
      initial={{ y: 0 }}
      transition={{ duration: 1, ease: "easeInOut" }}
    >
      {/* <h5 className={styles.cardStep}>{step}</h5> */}
      <div className={styles.cardTextBackground}>
        <h3 className={styles.cardTitle}>{title}</h3>
        <p className={styles.cardDescription}>{desc}</p>
      </div>
    </motion.div>
  );
};

const ChooseItem = ({
  scrollYProgress,
  position,
  numItems,
  img,
  title,
  desc,
  altStyle,
}: {
  scrollYProgress: MotionValue<number>;
  position: number;
  numItems: number;
  img: string;
  title: string;
  desc: string;
  altStyle: string;
}) => {
  const stepSize = 1 / numItems;
  const end = stepSize * position;
  const start = end - stepSize;

  const opacity = useTransform(scrollYProgress, [start, end], [1, 0]);
  const scale = useTransform(scrollYProgress, [start, end], [1, 0.9]);

  return (
    <motion.div
      className={altStyle}
      style={{ opacity, scale }}
      initial={{ y: 0 }}
      transition={{ duration: 1, ease: "easeInOut" }}
    >
      <motion.video
        className={styles.chooseCardImage}
        src={img}
        muted
        loop={true}
        autoPlay
      />
      <div className={styles.chooseCardTextContainer}>
        <h3 className={styles.chooseCardTitle}>{title}</h3>
        <p className={styles.chooseCardDescription}>{desc}</p>
      </div>
    </motion.div>
  );
};

const ChooseStyle = ({
  scrollYProgress,
  position,
  numItems,
  title,
  desc,
}: {
  scrollYProgress: MotionValue<number>;
  position: number;
  numItems: number;
  title: string;
  desc: string;
}) => {
  const stepSize = 1 / numItems;
  const end = stepSize * position;
  const start = end - stepSize;

  const opacity = useTransform(scrollYProgress, [start, end], [1, 0]);
  const scale = useTransform(scrollYProgress, [start, end], [1, 0.9]);

  return (
    <motion.div
      className={styles.chooseStyle}
      style={{ opacity, scale }}
      initial={{ y: 0 }}
      transition={{ duration: 1, ease: "easeInOut" }}
    >
      <motion.div
        className={styles.chooseStyleContainer}
        initial={{ rotateY: 0 }}
        whileInView={{ rotateY: 0 }}
        transition={{ duration: 1, ease: "easeInOut" }}
      >
        <GetStartedStyle />
      </motion.div>
      {/* <div className={styles.chooseStyleTextContainer}>
        <h3 className={styles.chooseStyleTitle}>{title}</h3>
        <p className={styles.chooseStyleDescription}>{desc}</p>
      </div> */}
    </motion.div>
  );
};

import React, { useRef } from "react";
import styles from "./VidSection.module.css";
import { motion, MotionValue, useScroll, useTransform } from "framer-motion";
import TopOut from "../../media/videos/phases/8TopOut.mp4";
import HVACRough from "../../media/videos/phases/9HVACRough.mp4";
import ElectricRough from "../../media/videos/phases/10ElectricRough.mp4";
import { VidSectionHeader } from "./VidSectionHeader";

export const RoughVideo = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  return (
    <>
      <div ref={ref} className={styles.vidSliderWrap}>
        <VidSectionHeader
          title="Rough Trades"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat."
        />
        {SLIDES.map((s, idx) => (
          <Slide
            key={s.id}
            slide={s}
            scrollYProgress={scrollYProgress}
            position={idx + 1}
          />
        ))}
      </div>
      {/* <div className={styles.screenBuffer} /> */}
    </>
  );
};

interface SlideProps {
  position: number;
  slide: SlideType;
  scrollYProgress: MotionValue;
}

const Slide = ({ position, slide, scrollYProgress }: SlideProps) => {
  const scaleFromPct = (position - 1) / SLIDES.length;
  const y = useTransform(
    scrollYProgress,
    [scaleFromPct, 1],
    [0, -SLIDE_HEIGHT]
  );

  const isOddSlide = position % 2;

  return (
    <motion.div
      style={{
        height: SLIDE_HEIGHT,
        y: position === SLIDES.length ? undefined : y,
        // background: isOddSlide ? "black" : "white",
        // color: isOddSlide ? "white" : "black",
      }}
      className={styles.slideContainer}
    >
      <motion.div
        className={styles.slideVideoContainer}
        initial={{ scale: 0.85, opacity: 1, borderRadius: 24 }}
        whileInView={{ scale: 0.95, opacity: 1, borderRadius: 24 }}
        transition={{ duration: 1 }}
      >
        <motion.video
          src={slide.video}
          muted
          autoPlay
          loop={true}
          className={styles.slideVideo}
          style={{
            height: "100%",
            width: "100%",
            backgroundSize: "cover",
            backgroundPosition: "center",
            objectFit: "cover",
          }}
        ></motion.video>
        <motion.div
          className={styles.slideVideoOverlay}
          whileInView={{ opacity: 0.3 }}
        />
        <motion.div className={styles.slideTextContainer}>
          <h3 className={styles.slideTitle}>{slide.title}</h3>
          <p className={styles.slideParagraph}>{slide.paragraph}</p>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

const SLIDE_HEIGHT = 960;

type SlideType = {
  id: number;
  title: string;
  paragraph: string;
  video: string;
};

const SLIDES: SlideType[] = [
  {
    id: 1,
    title: "Plumbing Top Out",
    paragraph:
      "For the plumbers, this is their second trip to the home and is a stage referred to as the plumbing “top out.” This is when the water lines and pipes to the various fixtures and showers are installed. The plumbers will return again shortly before closing to install the fixtures.",
    video: `${TopOut}`,
  },
  {
    id: 2,
    title: "HVAC Rough",
    paragraph:
      "This stage is when the furnace and ducts are installed. The HVAC system for each home is specifically designed through a J-Calc completed by a third-party energy company. The system is also tested by an energy rating company to ensure the ducts have less than 4% leakage (compared to 15-25% in non-certified homes!",
    video: `${HVACRough}`,
  },
  {
    id: 3,
    title: "Electric Rough",
    paragraph:
      "Now it's the electrician's turn. At this stage, wiring for fixtures, can lights, recepts, and other features are run throughout the home. The electricians will return later during the fixtures stage to finalize their work. We offer an on-site electric consultation as an upgrade for those who want to personalize their electric locations and features.",
    video: `${ElectricRough}`,
  },
];

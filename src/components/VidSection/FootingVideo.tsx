import React, { useRef } from "react";
import styles from "./VidSection.module.css";
import { motion, MotionValue, useScroll, useTransform } from "framer-motion";
import Pad from "../../media/videos/phases/1Pad.mp4";
import RoughPlumbing from "../../media/videos/phases/2RoughPlumbing.mp4";
import PostTension from "../../media/videos/phases/3PostTension.mp4";
import Termite from "../../media/videos/phases/4Termite.mp4";
import Slab from "../../media/videos/phases/5Slab.mp4";

export const FootingVideo = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  return (
    <>
      <div ref={ref} className={styles.vidSliderWrap}>
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
      </motion.div>
      <motion.div className={styles.slideTextContainer}>
        <h3 className={styles.slideTitle}>{slide.title}</h3>
        <p className={styles.slideParagraph}>{slide.paragraph}</p>
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
    title: "Footings",
    paragraph:
      "The footing is the perimeter foundation and is the first step after the dirt pad is built. You'll notice rebar extending up from the footing - this rebar is tied into the slab concrete to anchor your home into the ground. ",
    video: `${Pad}`,
  },
  {
    id: 2,
    title: "Rough Plumbing",
    paragraph:
      "The plumbers first visit to the home is call the Rough Plumbing phase. This is when the drain pipes and water lines are run. Our team uses laser levels to ensure everything is properly installed. ",
    video: `${RoughPlumbing}`,
  },
  {
    id: 3,
    title: "Post-Tension Cables",
    paragraph:
      "Every Executive home features post-tension cables that are engineered precisely for each layout. The post-tension cables bind the concrete together and provide the home with incredible tensile strength. ",
    video: `${PostTension}`,
  },
  {
    id: 4,
    title: "Termite Treatment",
    paragraph:
      "A termite treatment will be applied before the slab is poured. The treatment comes with a 5-year warranty for extra peace of mind!",
    video: `${Termite}`,
  },
  {
    id: 5,
    title: "Slab",
    paragraph:
      "Once the internal systems are in place, the slab is backfilled and concrete is poured. Framing is up next!.",
    video: `${Slab}`,
  },
];

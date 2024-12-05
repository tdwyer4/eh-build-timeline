import React, { useRef } from "react";
import styles from "./VidSection.module.css";
import { motion, MotionValue, useScroll, useTransform } from "framer-motion";
import SprayFoam from "../../media/videos/phases/11SprayFoam.mp4";
import Drywall from "../../media/videos/phases/12Drywall.mp4";
import Paint from "../../media/videos/phases/14Paint.mp4";
import { VidSectionHeader } from "./VidSectionHeader";
import { SectionHeader } from "../SectionHeaderText/SectionHeaderText";

export const InsulationVideo = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  return (
    <>
      <div ref={ref} className={styles.vidSliderWrap}>
        <SectionHeader
          title="Interior Finishes"
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
            numItems={s.ni}
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
  numItems: number;
}

const Slide = ({ position, slide, scrollYProgress, numItems }: SlideProps) => {
  const scaleFromPct = (position - 1) / SLIDES.length;
  const y = useTransform(
    scrollYProgress,
    [scaleFromPct, 1],
    [0, -SLIDE_HEIGHT]
  );

  const stepSize = 1 / numItems;
  const end = stepSize * position;
  const start = end - stepSize;
  const mid = (start + end) / 2;

  const opacity = useTransform(scrollYProgress, [start, mid, end], [0.9, 1, 0]);
  const scale = useTransform(scrollYProgress, [start, end], [1, 0.9]);

  return (
    <motion.div
      style={{
        height: SLIDE_HEIGHT,
        y: position === SLIDES.length ? undefined : y,
      }}
      className={styles.slideContainer}
    >
      <motion.div
        className={styles.slideVideoContainer}
        style={{ opacity, scale }}
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
          className={styles.slideTextContainer}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className={styles.slideHeaderWrap}>
            <h3 className={styles.slideTitle}>{slide.title}</h3>
            <h5 className={styles.slidePhase}>Interior Finishes</h5>
          </div>
          <p className={styles.slideParagraph}>{slide.paragraph}</p>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

const SLIDE_HEIGHT = 960;

type SlideType = {
  id: number;
  ni: number;
  title: string;
  paragraph: string;
  video: string;
};

const SLIDES: SlideType[] = [
  {
    id: 1,
    ni: 3,
    title: "Spray Foam Insulation",
    paragraph:
      "A state-of-the-art liquid spray foam is used on the exterior living space walls. The foam is sprayed against the exterior walls, then, after a few seconds, the foam rapidly expands and instantly cures.",
    video: `${SprayFoam}`,
  },
  {
    id: 2,
    ni: 3,
    title: "Drywall",
    paragraph:
      "Drywall installation has 3 stages. The first stage is “hanging” the drywall sheets. The second stage of drywall is known as “mud & tape” - this is when mesh tape and joint compounds (“mud”) are applied to conceal and smooth over the drywall joints and screw holes. The third drywall stage is when the finishing textures are applied.",
    video: `${Drywall}`,
  },
  {
    id: 3,
    ni: 3,
    title: "Paint",
    paragraph:
      "Painting involves much more than paint. The painters start by caulking the cabinets and trim, then move to sanding the cabinets and doors, and then tape off areas of the home. Then they're ready to paint!",
    video: `${Paint}`,
  },
];

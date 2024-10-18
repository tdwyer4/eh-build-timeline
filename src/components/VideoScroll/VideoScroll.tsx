import { ReactLenis } from "lenis/dist/lenis-react";
import {
  motion,
  useMotionTemplate,
  useScroll,
  useTransform,
} from "framer-motion";
import { useRef } from "react";
import styles from "./VideoScroll.module.css";
import mainImgBG from "../../media/scrollBG.jpg";

const VideoScroll = ({
  videoMain,
  headingMain,
  descMain,
}: {
  videoMain: string;
  headingMain: string;
  descMain: string;
}) => {
  return (
    <div className={styles.background}>
      <ReactLenis
        root
        options={{
          // Learn more -> https://github.com/darkroomengineering/lenis?tab=readme-ov-file#instance-settings
          lerp: 0.05,
          //   infinite: true,
          //   syncTouch: true,
        }}
      >
        <VideoSection
          videoSrc={videoMain}
          headingSrc={headingMain}
          descSrc={descMain}
        />
      </ReactLenis>
    </div>
  );
};

const SECTION_HEIGHT = 1000;

const VideoSection = ({
  videoSrc,
  headingSrc,
  descSrc,
}: {
  videoSrc: string;
  headingSrc: string;
  descSrc: string;
}) => {
  return (
    <div
      style={{ height: `calc(${SECTION_HEIGHT}px + 100vh)` }}
      className={styles.VideoSectionSection}
    >
      <PhaseVideo video={videoSrc} />
      <DescText heading={headingSrc} desc={descSrc} />

      <div className={styles.VideoSectionBottom} />
    </div>
  );
};

const PhaseVideo = ({ video }: { video: string }) => {
  const ref = useRef(null);
  const { scrollY } = useScroll({ target: ref });

  const clip1 = useTransform(scrollY, [0, 1500], [25, 0]);
  const clip2 = useTransform(scrollY, [0, 1500], [75, 100]);

  const clipPath = useMotionTemplate`polygon(${clip1}% ${clip1}%, ${clip2}% ${clip1}%, ${clip2}% ${clip2}%, ${clip1}% ${clip2}%)`;

  const backgroundSize = useTransform(
    scrollY,
    [0, SECTION_HEIGHT + 500],
    ["170%", "100%"]
  );
  const opacity = useTransform(
    scrollY,
    [SECTION_HEIGHT, SECTION_HEIGHT + 500],
    [0, 1]
  );

  const scale = useTransform(
    scrollY,
    [SECTION_HEIGHT, SECTION_HEIGHT + 500],
    ["100%", "100%"]
  );

  return (
    <motion.video
      ref={ref}
      initial={{ opacity: 1, scale: 0.8, y: 0, backgroundColor: "black" }}
      whileInView={{ opacity: 1, scale: 1, y: 0, backgroundColor: "black" }}
      transition={{ duration: 1, ease: "easeInOut", delay: 0.3 }}
      className={styles.backgroundImage}
      src={video}
      loop={true}
      muted
      autoPlay
      style={{
        clipPath,
        backgroundPosition: "center",
        backgroundSize,
        backgroundRepeat: "no-repeat",
        objectFit: "cover",
      }}
    />
  );
};

const DescText = ({ heading, desc }: { heading: string; desc: string }) => {
  return (
    <div className={styles.parallaxContainer}>
      <TextHold title={heading} para={desc} className={styles.imageOne} />
    </div>
  );
};

const TextHold = ({
  className,
  title,
  para,
}: {
  className?: string;
  title: string;
  para: string;
}) => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start center", "center end"],
  });

  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
  const position = useTransform(scrollYProgress, (pos) => {
    return pos === 1 ? "sticky" : "relative";
  });

  return (
    <motion.div
      className={className}
      ref={targetRef}
      style={{ opacity, position }}
    >
      <h2>{title}</h2>
      <p>{para}</p>
    </motion.div>
  );
};

export default VideoScroll;

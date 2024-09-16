import styles from "./VideoScroll.module.css";
import { useRef } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  MotionValue,
} from "framer-motion";

function useParallax(value: MotionValue<number>, distance: number) {
  return useTransform(value, [0, 1], [-distance, distance]);
}

// Updated to handle video instead of image
function Video({ id, videoUrl }: { id: number; videoUrl: string }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useParallax(scrollYProgress, 300);

  return (
    <div className={styles.gradientBG}>
      <section className={styles.videoSections}>
        <div ref={ref}>
          <video
            className="videoElement"
            src={videoUrl}
            controls
            autoPlay
            muted
            loop
            style={{ width: "100%", height: "auto" }} // Ensure video fits properly
          />
        </div>
        <motion.h2 className={styles.videoTitle} style={{ y }}>
          {`#00${id}`}
        </motion.h2>
      </section>
    </div>
  );
}

export default function VideoScroll() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  // Dynamic video URLs from an external source
  const videoUrls = [
    "https://www.executivehomes.com/static/media/DistinctionDesktopVideo.fd902a225cf0bf00b524.mp4",
    "https://www.executivehomes.com/static/media/InnovationDesktopVideo.4dcf81559d735a1523fb.mp4",
    "https://www.executivehomes.com/static/media/CommunityDesktopVideo.3db15170498a215a80dd.mp4",
    "https://www.executivehomes.com/static/media/ValueDesktopVideo.117e24d42832b1e56a94.mp4",
    "https://www.executivehomes.com/static/media/ForYouDesktopVideo.2d7bfc50fe4b2040cd44.mp4",
  ];

  return (
    <>
      {videoUrls.map((videoUrl, index) => (
        <Video id={index + 1} videoUrl={videoUrl} key={index} />
      ))}
      <motion.div className={styles.progress} style={{ scaleX }} />
    </>
  );
}

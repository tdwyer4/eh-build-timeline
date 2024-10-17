import styles from "./SplineLoader.module.css";
import { useRef, useState, useEffect, startTransition } from "react";
import { motion } from "framer-motion";
import FirstLoad from "./FirstLoad";
import { PreSold } from "./PreSold";
import { EarlyConstruction } from "./EarlyConstruction";
import { MidConstruction } from "./MidConstruction";
import { MoveInReady } from "./MoveInReady";
import Manifest from "../components/Manifest/Manifest";
import HeroVideo from "../media/HeroAnimation2.mp4";
import HeroImage from "../media/particles2.mp4";

export default function SplineLoader() {
  const [currentContent, setCurrentContent] = useState<string>("Load");
  const [videoEnded, setVideoEnded] = useState(false); // video has ended
  const [videoLoaded, setVideoLoaded] = useState(false); // image is preloaded
  const contentRef = useRef<HTMLDivElement | null>(null);

  function handleClick(contentName: string) {
    console.log("Button clicked:", contentName);
    startTransition(() => {
      setCurrentContent(contentName);
    });

    contentRef.current?.scrollIntoView({ behavior: "smooth" });
  }

  // Preload image before the video ends
  useEffect(() => {
    const video = document.createElement("video");
    video.src = HeroImage; // use particle vid
    video.onloadeddata = () => setVideoLoaded(true); // preload particle vid
    video.load();
  }, []);

  // Handle video end event
  function handleVideoEnd() {
    setVideoEnded(true);
  }

  const renderContent = () => {
    switch (currentContent) {
      case "Load":
      default:
        return <FirstLoad />;
      case "Pre":
        return <PreSold />;
      case "Early":
        return <EarlyConstruction />;
      case "Mid":
        return <MidConstruction />;
      case "Ready":
        return <MoveInReady />;
    }
  };

  return (
    <div className={styles.appContainer}>
      <div className={styles.splineContainer}>
        <video
          src={HeroVideo}
          autoPlay
          muted
          onEnded={handleVideoEnd}
          className={`${styles.video} ${videoEnded ? styles.hidden : ""}`} // hidden after video ends
        />
        {videoLoaded &&
          videoEnded && ( // video ends and image shows
            <video
              autoPlay
              muted
              loop={true}
              src={HeroImage}
              className={`${styles.staticImage} ${
                videoEnded ? styles.fadeIn : ""
              }`} // fade-in
            />
          )}

        <div className={styles.manifestContainer}>
          <Manifest />
        </div>

        <motion.div
          className={styles.customControls}
          initial={{ opacity: 0, y: 150 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.7, ease: "easeOut" }}
        >
          <div className={styles.subTextContainer}>
            <h3 className={styles.subText}>
              Choose an option below to find out
            </h3>
          </div>
          <div className={styles.buttonContainer}>
            <motion.div
              onClick={() => handleClick("Load")}
              className={styles.Load}
            ></motion.div>
            <motion.button
              onClick={() => handleClick("Pre")}
              whileTap={{ scale: 0.5 }}
            >
              Pre-Sold
            </motion.button>
            <motion.button onClick={() => handleClick("Early")}>
              Early Construction
            </motion.button>
            <motion.button onClick={() => handleClick("Mid")}>
              Mid Construction
            </motion.button>
            <motion.button onClick={() => handleClick("Ready")}>
              Move-In Ready
            </motion.button>
          </div>
        </motion.div>
      </div>

      <div className={styles.contentSection} ref={contentRef}>
        {renderContent()}
      </div>
    </div>
  );
}

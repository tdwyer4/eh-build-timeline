import styles from "./SplineLoader.module.css";
import { useRef, useState, useEffect, startTransition } from "react";
import { motion } from "framer-motion";
import FirstLoad from "./FirstLoad";
import PreSold from "./PreSold";
import { EarlyConstruction } from "./EarlyConstruction";
import { MidConstruction } from "./MidConstruction";
import { MoveInReady } from "./MoveInReady";
import Manifest from "../components/Manifest/Manifest";
import HeroVideo from "../media/HeroAnimation2.mp4";
import HeroImage from "../media/particles2.mp4";
import ParticlesBackground from "../components/ParticlesBackground/ParticlesBackground";

export default function SplineLoader() {
  const [currentContent, setCurrentContent] = useState<string>("Load");
  const [videoEnded, setVideoEnded] = useState(false); // video has ended
  const [videoLoaded, setVideoLoaded] = useState(false); // image is preloaded
  const contentRef = useRef<HTMLDivElement | null>(null);

  function handleClick(contentName: string) {
    startTransition(() => {
      setCurrentContent(contentName);
    });
  }

  useEffect(() => {
    if (currentContent !== "Load") {
      contentRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [currentContent]);

  // Preload image before the video ends
  useEffect(() => {
    const video = document.createElement("video");
    video.src = HeroImage;
    video.onloadeddata = () => setVideoLoaded(true);
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
        return <PreSold pageTitle="Pre-Sold Phase" />;
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
          className={`${styles.video} ${videoEnded ? styles.hidden : ""}`}
        />
        {videoLoaded && videoEnded && (
          <>
            <video
              autoPlay
              muted
              loop={true}
              src={HeroImage}
              className={`${styles.staticImage} ${
                videoEnded ? styles.fadeIn : ""
              }`} // fade-in
            />
            <motion.div
              className={styles.videoOverlay}
              whileInView={{ opacity: 1 }}
            />
          </>
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
              Building a home is easier than you think. <br /> Pick a phase
              below to get started!
            </h3>
          </div>
          <div className={styles.buttonContainer}>
            <motion.div className={styles.Load}></motion.div>
            <motion.div
              className={`${styles.btnInfoContainer} ${styles.yellowBG}`}
            >
              <h3 className={styles.infoHeader}>PRE-SOLD</h3>
              <div className={styles.infoSub}>
                <p className={styles.infoInfo}>Build Time:</p>
                <p className={styles.infoTime}>5-6 Months</p>
              </div>
              <motion.button
                onClick={() => handleClick("Pre")}
                whileTap={{ scale: 0.5 }}
              >
                Learn More
              </motion.button>
            </motion.div>
            <motion.div
              className={`${styles.btnInfoContainer} ${styles.orangeBG}`}
            >
              <h3 className={styles.infoHeader}>EARLY CONSTRUCTION</h3>
              <div className={styles.infoSub}>
                <p className={styles.infoInfo}>Build Time:</p>
                <p className={styles.infoTime}>3-4 Months</p>
              </div>
              <motion.button
                onClick={() => handleClick("Early")}
                whileTap={{ scale: 0.5 }}
              >
                Learn More
              </motion.button>
            </motion.div>
            <motion.div
              className={`${styles.btnInfoContainer} ${styles.purpleBG}`}
            >
              <h3 className={styles.infoHeader}>MID-CONSTRUCTION</h3>
              <div className={styles.infoSub}>
                <p className={styles.infoInfo}>Build Time:</p>
                <p className={styles.infoTime}>2-3 Months</p>
              </div>
              <motion.button
                onClick={() => handleClick("Mid")}
                whileTap={{ scale: 0.5 }}
              >
                Learn More
              </motion.button>
            </motion.div>
            <motion.div
              className={`${styles.btnInfoContainer} ${styles.seafoamBG}`}
            >
              <h3 className={styles.infoHeader}>MOVE IN READY</h3>
              <div className={styles.infoSub}>
                <p className={styles.infoInfo}>Build Time:</p>
                <p className={styles.infoTime}>Available Now!</p>
              </div>
              <motion.button
                onClick={() => handleClick("Ready")}
                whileTap={{ scale: 0.5 }}
              >
                Learn More
              </motion.button>
            </motion.div>
          </div>
        </motion.div>
      </div>

      <div className={styles.contentSection} ref={contentRef}>
        {renderContent()}
      </div>
    </div>
  );
}

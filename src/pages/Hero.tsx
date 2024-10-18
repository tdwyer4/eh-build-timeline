import styles from "./Hero.module.css";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Manifest from "../components/Manifest/Manifest";
import HeroVideo from "../media/HeroAnimation2.mp4";
import ParticleVideo from "../media/particles2.mp4";

export default function Hero() {
  const [videoEnded, setVideoEnded] = useState(false);
  const [moveUp, setMoveUp] = useState(false);
  const [showVideos, setShowVideos] = useState(false);
  const [expandedVideo, setExpandedVideo] = useState<string | null>(null);

  function handleClick() {
    setMoveUp(true);
    setTimeout(() => setShowVideos(true), 1200);
  }

  function handleVideoClick(position: string) {
    setExpandedVideo(position);
  }

  function handleVideoEnd() {
    setVideoEnded(true);
  }

  useEffect(() => {
    const video = document.createElement("video");
    video.src = ParticleVideo;
    video.onloadeddata = () => setVideoEnded(true);
    video.load();
  }, []);

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
        {videoEnded && (
          <video
            autoPlay
            muted
            loop
            src={ParticleVideo}
            className={`${styles.staticImage} ${
              videoEnded ? styles.fadeIn : ""
            }`}
          />
        )}
        <AnimatePresence>
          {!moveUp && (
            <motion.div
              className={styles.manifestContainer}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ y: -200, opacity: 0 }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
            >
              <Manifest />
            </motion.div>
          )}
        </AnimatePresence>
        <AnimatePresence>
          {!moveUp && (
            <motion.div
              className={styles.customControls}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ y: -200, opacity: 0 }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
            >
              <h3 className={styles.subText}>
                Choose an option below to find out
              </h3>
              <div className={styles.buttonContainer}>
                {["Pre", "Early", "Mid", "Ready"].map((label, index) => (
                  <motion.button
                    key={label}
                    onClick={handleClick}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05, duration: 0.5 }}
                  >
                    {label} Construction
                  </motion.button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {showVideos && (
          <div className={styles.videoContainerWrapper}>
            <motion.div className={styles.videoContainer}>
              {/* Left Video Box */}
              <motion.div
                className={styles.videoPath}
                layout
                initial={{ opacity: 0, scale: 0.75 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.7, duration: 0.3 }}
                onClick={() => handleVideoClick("left")}
              >
                <video
                  src="https://www.executivehomes.com/static/media/ValueDesktopVideo.117e24d42832b1e56a94.mp4"
                  autoPlay
                  muted
                  loop
                  className={styles.videoContent}
                />
                <div className={styles.gradientOverlay}></div>
                <h1 className={styles.leftText}>START WITH FLOORPLAN</h1>
              </motion.div>

              {/* Right Video Box */}
              <motion.div
                className={styles.videoPath}
                layout
                initial={{ opacity: 0, scale: 0.75 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8, duration: 0.3 }}
                onClick={() => handleVideoClick("right")}
              >
                <video
                  src="https://www.executivehomes.com/static/media/EfficiencyDesktopVideo.6b2023a48db712551e9a.mp4"
                  autoPlay
                  muted
                  loop
                  className={styles.videoContent}
                />
                <div className={styles.gradientOverlay}></div>
                <h1 className={styles.rightText}>START WITH LOT</h1>
              </motion.div>
            </motion.div>

            {/* Wrap the heading and subheading in a new motion container */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              <motion.div className={styles.startTextContainer}>
                <h1 className={styles.startHeading}>HOW TO GET STARTED</h1>
                <h3 className={styles.subText}>
                  Choose an option below to find out
                </h3>
              </motion.div>
            </motion.div>
          </div>
        )}

        {expandedVideo && (
          <motion.div
            className={styles.fullscreenContainer}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <video
              src={
                expandedVideo === "left"
                  ? "https://www.executivehomes.com/static/media/ValueDesktopVideo.117e24d42832b1e56a94.mp4"
                  : "https://www.executivehomes.com/static/media/EfficiencyDesktopVideo.6b2023a48db712551e9a.mp4"
              }
              autoPlay
              muted
              loop
              className={styles.fullscreenVideo}
            />
            <div className={styles.gradientOverlay}></div>
            <div className={styles.videoDescription}>
              <h1 className={styles.videoTitle}>
                {expandedVideo === "left"
                  ? "START WITH FLOORPLAN"
                  : "START WITH LOT"}
              </h1>
              <div className={styles.separator}></div>
              <p className={styles.videoText}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
                fringilla ultrices libero, eu tincidunt purus tempus a. Ut
                ultricies ante vel mi imperdiet, vel aliquam arcu finibus. Donec
                sodales turpis sed accumsan mollis. Aliquam rhoncus tellus quam.
                In risus libero, sodales in arcu eu, interdum ultricies lacus.
              </p>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
}

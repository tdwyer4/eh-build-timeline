import PathCardContent from "../PathCard/pathCardContent";
import styles from "./Hero.module.css";  
import HeroContent from './HeroContent';  

function Hero() {
  return (
    <div className={styles.heroContainer}>
        <div className={styles.heroContentContainer}>
            <HeroContent />
        </div>
        <div className={styles.pathCardContent}>
          <div className={styles.textWrapper}>
            <div className={styles.heroSubText}>Building a home is easier than you think.
            Pick a phase below to get started!</div></div>
            <PathCardContent />
        </div>
    </div>
  );
}

export default Hero;

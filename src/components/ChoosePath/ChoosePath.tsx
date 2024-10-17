import { ReactLenis } from "lenis/dist/lenis-react";
import {
  motion,
  useMotionTemplate,
  useScroll,
  useTransform,
} from "framer-motion";
import { useState, useEffect, useRef } from "react";
import styles from "./ChoosePath.module.css";
import { PathText } from "./ChoosePathText";
import { PathMedia } from "./ChoosePathMedia";

const paths = [
  {
    title: "Choose A Lot",
    id: "pick-a-lot",
    src: "https://placehold.co/600x600/000000/FFF",
  },
  {
    title: "Choose a Floor Plan",
    id: "choose-floorplan",
    src: "https://placehold.co/600x600/852423/FFF",
  },
];

const ChoosePath = () => {
  return (
    <div>
      <ReactLenis
        root
        options={{
          // Learn more -> https://github.com/darkroomengineering/lenis?tab=readme-ov-file#instance-settings
          lerp: 0.05,
          //   infinite: true,
          //   syncTouch: true,
        }}
      >
        <PathOverview />
      </ReactLenis>
    </div>
  );
};

function PathOverview() {
  return (
    <div className={styles.background}>
      <div className={styles.heroSection}>
        <div className={styles.heroBottom}>
          <ul>
            {paths.map((path) => (
              <li key={path.id}>
                <PathText>{path.title}</PathText>
              </li>
            ))}
          </ul>
        </div>
        <div className={styles.divColumnContainer}>
          <div className={styles.divColumn}>
            {paths.map((path) => (
              <div key={path.id}>
                <PathMedia src={path.src} children={undefined}></PathMedia>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* <div className={styles.scrollSpace}>Scrolling Space</div> */}
    </div>
  );
}

export default ChoosePath;

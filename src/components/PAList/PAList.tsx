import { ReactLenis } from "lenis/dist/lenis-react";
import {
  motion,
  useMotionTemplate,
  useScroll,
  useTransform,
} from "framer-motion";
// import { SiSpacex } from "react-icons/si";
// import { FiArrowRight, FiMapPin } from "react-icons/fi";
import { useRef } from "react";
import styles from "./PAList.module.css";
import mainImgBG from "../../media/scrollBG.jpg";

const PAList = () => {
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
        <Schedule />
      </ReactLenis>
    </div>
  );
};

const Schedule = () => {
  return (
    <section id="build-schedule" className={styles.buildSchedule}>
      <motion.h1
        initial={{ y: 48, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ ease: "easeInOut", duration: 0.75 }}
        className={styles.buildScheduleHeader}
      >
        Purchase Agreement Signed. What's Next?
      </motion.h1>
      <ScheduleItem
        title="PLANS ARE PREPARED"
        date="Week 1-2"
        location="Short description text here explaining the step."
      />
      <ScheduleItem
        title="Pre-Construction Meeting"
        date="Week 3"
        location="Short description text here explaining the step."
      />
      <ScheduleItem
        title="Plans Finalized"
        date="Week 4"
        location="Short description text here explaining the step."
      />
      <ScheduleItem
        title="Cut Sheet Built"
        date="Week 5"
        location="Short description text here explaining the step."
      />
      <ScheduleItem
        title="Checklist Generated"
        date="Week 6"
        location="Short description text here explaining the step."
      />
      <ScheduleItem
        title="House Automatically Scheduled"
        date="Week 7"
        location="Short description text here explaining the step."
      />
      <ScheduleItemLast
        title="House Starts"
        date="Week 8"
        location="Short description text here explaining the step."
      />
    </section>
  );
};

const ScheduleItem = ({
  title,
  date,
  location,
}: {
  title: string;
  date: string;
  location: string;
}) => {
  return (
    <motion.div
      initial={{ y: 48, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ ease: "easeInOut", duration: 0.75 }}
      className={styles.buildScheduleItem}
    >
      <div className={styles.buildScheduleInfo}>
        <p className={styles.buildScheduleItemPara}>{date}</p>
        <p className={styles.buildScheduleItemTitle}>{title}</p>
      </div>
      <div>
        <p className={styles.buildScheduleItemIcon}>{location}</p>
        {/* <p>+</p> */}
      </div>
    </motion.div>
  );
};

const ScheduleItemLast = ({
  title,
  date,
  location,
}: {
  title: string;
  date: string;
  location: string;
}) => {
  return (
    <motion.div
      initial={{ y: 48, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ ease: "easeInOut", duration: 0.75 }}
      className={styles.buildScheduleItemLast}
    >
      <div className={styles.buildScheduleInfo}>
        <p className={styles.buildScheduleItemParaLast}>{date}</p>
        <p className={styles.buildScheduleItemTitleLast}>{title}</p>
      </div>
      <div>
        <p className={styles.buildScheduleItemIconLast}>{location}</p>
        {/* <p>+</p> */}
      </div>
    </motion.div>
  );
};

export default PAList;

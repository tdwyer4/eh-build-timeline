import { motion } from "framer-motion";
import styles from "./PAList.module.css";

const PAList = () => {
  return (
    <div className={styles.background}>
      <Schedule />
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
        THE PURCHASE AGREEMENT IS SIGNED.{" "}
        <span className={styles.buildScheduleHeaderEnd}>WHAT'S NEXT?</span>
      </motion.h1>
      <ScheduleItem
        title="PLANS ARE PREPARED"
        date="1"
        location="Our in-house plans team works diligently to create   the detailed blueprints for your new home."
      />
      <ScheduleItem
        title="Pre-Construction Meeting"
        date="2"
        location="You'll meet with our Plans Coordinator to review the plans and discuss the upcoming building experience."
      />
      <ScheduleItem
        title="Plans Finalized"
        date="3"
        location="Our team will finalize the plans with any upgrades you might add during the Pre-Con Meeting."
      />
      <ScheduleItem
        title="Cut Sheet Built"
        date="4"
        location="Our proprietary Cut Sheet prepares instructions for the contractors based on the EXACT features in your home. "
      />
      <ScheduleItem
        title="Checklist Created"
        date="5"
        location="Our one-of-a-kind quality assurance checklists are automatically created based on the precise finishes in your home. "
      />
      <ScheduleItem
        title="Schedule Generated"
        date="6"
        location="Every stage of construction is automatically scheduled by our proprietary algorithm."
      />
      <ScheduleItemLast
        title="Construction Begins!"
        date="7"
        location="With everything in place, construction gets rolling. The foundation stage is up first."
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
        <p className={styles.buildScheduleItemIcon}>{location}</p>
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
      initial={{ y: 0, opacity: 1, scale: 1 }}
      animate={{ opacity: [0.7, 1, 0.7] }}
      transition={{ ease: "easeInOut", duration: 3, repeat: Infinity }}
      className={styles.buildScheduleItemLast}
    >
      <div className={styles.buildScheduleInfo}>
        <p className={styles.buildScheduleItemParaLast}>{date}</p>
        <p className={styles.buildScheduleItemTitleLast}>{title}</p>
        <p className={styles.buildScheduleItemIconLast}>{location}</p>
      </div>
    </motion.div>
  );
};

export default PAList;

import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";
import styles from "./Warranty.module.css";
import ACIcon from "../../media/icons/AC.png";
import ApplianceIcon from "../../media/icons/Appliances.png";
import ElectricalIcon from "../../media/icons/Electrical.png";
import HeatingIcon from "../../media/icons/Heating.png";
import HVACIcon from "../../media/icons/HVAC.png";
import MembersIcon from "../../media/icons/Members.png";
import PlumbingIcon from "../../media/icons/Plumbing.png";
import WarrantyIcon from "../../media/icons/Warranty.png";

const Warranty = () => {
  return (
    <div className={styles.bgGradient}>
      <div className={styles.scrollContainer}>
        <HorizontalScrollCarousel />
      </div>
    </div>
  );
};

const HorizontalScrollCarousel = () => {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["10%", "-60%"], {
    clamp: true,
  });

  return (
    <>
      <section ref={targetRef} className={styles.mainContainer}>
        <div className={styles.cardContainer}>
          <SectionTitle />
          <motion.div
            style={{ x }}
            className={styles.card}
            viewport={{ once: true, amount: 1 }}
          >
            {cards.map((card) => {
              return <Card card={card} key={card.id} />;
            })}
          </motion.div>
        </div>
      </section>
    </>
  );
};

const Card = ({ card }: { card: CardType }) => {
  return (
    <motion.div
      key={card.id}
      className={styles.cardTypeContainer}
      initial={{ opacity: 0, y: 0 }}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: { duration: 1, ease: "easeOut" },
      }}
    >
      <img src={card.icon} className={styles.cardImgContainer} />
      <div className={styles.cardTitleContainer}>
        <p className={styles.cardTitle}>{card.title}</p>
        <p className={styles.cardDesc}>{card.description}</p>
      </div>
    </motion.div>
  );
};

const SectionTitle = () => {
  return (
    <div className={styles.headerContainer}>
      <motion.div
        className={styles.carouselInfo}
        initial={{ opacity: 0, y: 0 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeInOut" }}
      >
        <h2 className={styles.carouselHeader}>
          OUR WARRANTY <br /> COVERAGE
        </h2>
        <p className={styles.carouselText}>
          Explore our range of home warranty coverages that keep your home
          protected year-round. Choose from heating, air conditioning, plumbing,
          and more!
        </p>
      </motion.div>
    </div>
  );
};

export default Warranty;

type CardType = {
  icon: string;
  title: string;
  description: string;
  id: number;
};

const cards: CardType[] = [
  {
    icon: `${HeatingIcon}`,
    title: "Heating",
    description:
      "If staying warm and cozy is your thing, we’ve got the right home warranty coverage for you. Upgrade to a new HVAC system with exclusive member discounts on top brands.> Heating services include annual maintenance and repair to keep your system running efficiently.",
    id: 1,
  },
  {
    icon: `${ACIcon}`,
    title: "Air Conditioning",
    description:
      "We’ll help make sure your air conditioning keeps its cool so you can too. Keep cool during the summer months with repair services for your AC unit.",
    id: 2,
  },
  {
    icon: `${ApplianceIcon}`,
    title: "Kitchen & Laundry Appliances",
    description:
      "When these home heroes stop working, it’s a good day to have a home warranty. Covering everything from refrigerators to washers and dryers, we help keep your household running.",
    id: 3,
  },
  {
    icon: `${ElectricalIcon}`,
    title: "Electrical",
    description:
      "You don’t have to power through electrical issues. We’ll help you get your spark back (safely of course). Electrical repairs and troubleshooting to keep your home powered and safe.",
    id: 4,
  },
  {
    icon: `${PlumbingIcon}`,
    title: "Plumbing",
    description:
      "Whether you’re dealing with a drip, leak or clog, we’ll help get things flowing again. Full coverage for leaks, clogs, and other plumbing issues that keep water flowing smoothly.",
    id: 5,
  },
  {
    icon: `${MembersIcon}`,
    title: "Member Benefits",
    description:
      "We offer additional services like seasonal HVAC tune-ups and rekeys, as well as partner discounts. Enjoy exclusive discounts and additional services that make maintaining your home easier.",
    id: 6,
  },
  {
    icon: `${WarrantyIcon}`,
    title: "Additional Coverage",
    description:
      "Choose from add-ons like electronics protection, roof leak repair coverage, pool & built-in spa equipment. Expand your coverage with add-ons like electronics protection and roof leak repairs.",
    id: 7,
  },
  {
    icon: `${HVACIcon}`,
    title: "New HVAC Program",
    description:
      "In the market for a new HVAC? Get exclusive pricing on name brand heating and cooling systems. Upgrade to a new HVAC system with exclusive member discounts on top brands.",
    id: 8,
  },
];

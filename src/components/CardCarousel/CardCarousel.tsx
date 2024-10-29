import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";
import styles from "./CardCarousel.module.css";

const CardCarousel = () => {
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
      <img src={card.url} className={styles.cardImgContainer} />
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
          STREAMLINED SELECTION <br /> EXPERIENCE
        </h2>
        <p className={styles.carouselText}>
          We’ve streamlined the home personalization process so you can choose
          all of the fun, value-added selections, without the time-consuming
          minutiae that’s often associated with custom building. To make it even
          easier, most every selection can be made remotely!
        </p>
      </motion.div>
    </div>
  );
};

export default CardCarousel;

type CardType = {
  url: string;
  title: string;
  description: string;
  id: number;
};

const cards: CardType[] = [
  {
    url: "https://assets.cloud.executivehomes.com/prod/public/catalog-item/CIT~NYV-DHbQeguPXMVW/SMD~T90NB09LtsQWqEMc",
    title: "Masonry",
    description: "Every home features full brick below the plate line. ",
    id: 1,
  },
  {
    url: "https://assets.cloud.executivehomes.com/prod/public/catalog-item/CIT~xusBvPi17Y4ecTey/SMD~lDmKMufAkDFF2nzE",
    title: "Light Fixtures",
    description: "Our lighting vendor can source most anything you'd like! ",
    id: 2,
  },
  {
    url: "https://assets.cloud.executivehomes.com/prod/public/catalog-item/CIT~-qq2eU15drq4_JfU/SMD~mfTG064n_TpLyL1j",
    title: "Paint Colors",
    description:
      "Personalize your colors or choose one of our time-tested combos. ",
    id: 3,
  },
  {
    url: "https://assets.cloud.executivehomes.com/prod/public/catalog-item/CIT~FraxVi0GJGdERbTb/SMD~etT73hz7MdcdSv1P",
    title: "Countertops",
    description: "Dozens of high-end natural stone options are available! ",
    id: 4,
  },
  {
    url: "https://assets.cloud.executivehomes.com/prod/public/catalog-item/CIT~TmqmVUO0vFNma52i/SMD~wLxOcDNHG87zs9CG",
    title: "Backsplash",
    description: "Choose a backsplash to accent your countertop choice.",
    id: 5,
  },
  {
    url: "https://assets.cloud.executivehomes.com/prod/public/catalog-item/CIT~MNw6H0Et13l3iRRF/SMD~j1lKk3ZDOZrkNpGE",
    title: "Floor Stain",
    description: "Every home features real oak floors",
    id: 6,
  },
  {
    url: "https://assets.cloud.executivehomes.com/prod/public/catalog-item/CIT~6RuS72GS_ZNJ3-R2/SMD~EIclyb14nPSmSJbt",
    title: "Tile & Carpet",
    description: "High-end tile and carpet are standard.",
    id: 7,
  },
  {
    url: "https://assets.cloud.executivehomes.com/prod/public/catalog-item/CIT~93YJg1822ETNocCG/SMD~y427fX_82kVM-ZKi",
    title: "Front Door",
    description: "Choose from premium iron and wood options. ",
    id: 8,
  },
];

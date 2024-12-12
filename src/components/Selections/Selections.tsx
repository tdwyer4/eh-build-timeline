import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import styles from "./Selections.module.css";
import { SectionHeader } from "../SectionHeaderText/SectionHeaderText";

const CARD_SIZE_LG = 365;
const CARD_SIZE_SM = 290;

const BORDER_SIZE = 1;

const ROTATE_DEG = 0.8;

const STAGGER = 0;
const CENTER_STAGGER = 0;

// const SECTION_HEIGHT = 800;

export const Selections = () => {
  const [cardSize, setCardSize] = useState(CARD_SIZE_LG);
  const [selections, setselections] = useState(SELECTIONS_DATA);

  const handleMove = (position: number) => {
    const copy = [...selections];

    if (position > 0) {
      for (let i = position; i > 0; i--) {
        const firstEl = copy.shift();

        if (!firstEl) return;

        copy.push({ ...firstEl, tempId: Math.random() });
      }
    } else {
      for (let i = position; i < 0; i++) {
        const lastEl = copy.pop();

        if (!lastEl) return;

        copy.unshift({ ...lastEl, tempId: Math.random() });
      }
    }

    setselections(copy);
  };

  useEffect(() => {
    const { matches } = window.matchMedia("(min-width: 640px)");

    if (matches) {
      setCardSize(CARD_SIZE_LG);
    } else {
      setCardSize(CARD_SIZE_SM);
    }

    const handleSetCardSize = () => {
      const { matches } = window.matchMedia("(min-width: 640px)");

      if (matches) {
        setCardSize(CARD_SIZE_LG);
      } else {
        setCardSize(CARD_SIZE_SM);
      }
    };

    window.addEventListener("resize", handleSetCardSize);

    return () => window.removeEventListener("resize", handleSetCardSize);
  }, []);

  return (
    <div className={styles.sectionWrap} style={{}}>
      <div className={styles.topContainer}>
        <motion.div className={styles.copyContainer}>
          <SectionHeader
            title="STREAMLINED SELECTION EXPERIENCE"
            description="We’ve streamlined the home personalization process so you can choose
            all of the fun, value-added selections, without the time-consuming
            minutiae that’s often associated with custom building. To make it
            even easier, most every selection can be made remotely!"
          />
        </motion.div>
      </div>
      {selections.map((t, idx) => {
        let position = 0;

        if (selections.length % 2) {
          position = idx - (selections.length + 1) / 2;
        } else {
          position = idx - selections.length / 2;
        }

        return (
          <SelectionsCard
            key={t.tempId}
            selection={t}
            handleMove={handleMove}
            position={position}
            cardSize={cardSize}
          />
        );
      })}
      <div className={styles.btnContainer}>
        <button onClick={() => handleMove(-1)} className={styles.btnWrap}>
          ←
        </button>
        <button onClick={() => handleMove(1)} className={styles.btnWrap}>
          →
        </button>
      </div>
    </div>
  );
};

interface SelectionsProps {
  position: number;
  selection: SelectionsType;
  handleMove: Function;
  cardSize: number;
}

const SelectionsCard = ({
  position,
  selection,
  handleMove,
  cardSize,
}: SelectionsProps) => {
  const isActive = position === 0;

  return (
    <motion.div
      initial={false}
      onClick={() => handleMove(position)}
      className={`
      ${styles.cardContainer} ${
        isActive ? `${styles.cardActive}` : `${styles.cardInactive}`
      }
      `}
      style={{
        borderWidth: BORDER_SIZE,
      }}
      animate={{
        width: cardSize,
        height: cardSize,
        x: `calc(-50% + ${position * (cardSize / 1.15)}px)`,
        y: `calc(-50% + ${
          isActive ? CENTER_STAGGER : position % 2 ? STAGGER : -STAGGER
        }px)`,
        scale: isActive ? 1 : position % 2 ? ROTATE_DEG : ROTATE_DEG,
      }}
      transition={{
        type: "smooth",
        mass: 3,
        stiffness: 400,
        damping: 50,
      }}
    >
      <span className={styles.cardWrap} style={{}} />
      <motion.div
        className={styles.cardImage}
        style={{
          backgroundImage: `url(${selection.imgSrc})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          height: "100%",
          width: "100%",
        }}
        initial={{ y: 0 }}
        transition={{ duration: 1, ease: "easeInOut" }}
      >
        <div className={styles.selectionTextBackground}>
          <h3
            className={`${styles.cardHeader} ${
              isActive
                ? `${styles.cardHeaderActive}`
                : `${styles.cardHeaderInactive}`
            }`}
          >
            {selection.title}
          </h3>
          <p
            className={`${styles.cardDesc} ${
              isActive
                ? `${styles.cardDescActive}`
                : `${styles.cardDescInactive}`
            }`}
          >
            {selection.desc}
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
};

type SelectionsType = {
  tempId: number;
  title: string;
  desc: string;
  imgSrc: string;
};

const SELECTIONS_DATA: SelectionsType[] = [
  {
    tempId: 0,
    title: "Masonry",
    desc: "Every home features full brick below the plate line.",
    imgSrc:
      "https://assets.cloud.executivehomes.com/prod/public/catalog-item/CIT~NYV-DHbQeguPXMVW/SMD~T90NB09LtsQWqEMc",
  },
  {
    tempId: 1,
    title: "Light Fixtures",
    desc: "Our lighting vendor can source most anything you'd like! ",
    imgSrc:
      "https://assets.cloud.executivehomes.com/prod/public/catalog-item/CIT~xusBvPi17Y4ecTey/SMD~lDmKMufAkDFF2nzE",
  },
  {
    tempId: 2,
    title: "Paint Colors",
    desc: "Personalize your colors or choose one of our time-tested combos. ",
    imgSrc:
      "https://assets.cloud.executivehomes.com/prod/public/catalog-item/CIT~-qq2eU15drq4_JfU/SMD~mfTG064n_TpLyL1j",
  },
  {
    tempId: 3,
    title: "Countertops",
    desc: "Dozens of high-end natural stone options are available!",
    imgSrc:
      "https://assets.cloud.executivehomes.com/prod/public/catalog-item/CIT~FraxVi0GJGdERbTb/SMD~etT73hz7MdcdSv1P",
  },
  {
    tempId: 4,
    title: "Backsplash",
    desc: "Choose a backsplash to accent your countertop choice.",
    imgSrc:
      "https://assets.cloud.executivehomes.com/prod/public/catalog-item/CIT~TmqmVUO0vFNma52i/SMD~wLxOcDNHG87zs9CG",
  },
  {
    tempId: 5,
    title: "Floor Stain",
    desc: "Every home features real oak floors",
    imgSrc:
      "https://assets.cloud.executivehomes.com/prod/public/catalog-item/CIT~MNw6H0Et13l3iRRF/SMD~j1lKk3ZDOZrkNpGE",
  },
  {
    tempId: 6,
    title: "Tile & Carpet",
    desc: "High-end tile and carpet are standard.",
    imgSrc:
      "https://assets.cloud.executivehomes.com/prod/public/catalog-item/CIT~6RuS72GS_ZNJ3-R2/SMD~EIclyb14nPSmSJbt",
  },
  {
    tempId: 7,
    title: "Front Door",
    desc: "Choose from premium iron and wood options.",
    imgSrc:
      "https://assets.cloud.executivehomes.com/prod/public/catalog-item/CIT~93YJg1822ETNocCG/SMD~y427fX_82kVM-ZKi",
  },
];

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import styles from "./Carousel.module.css";

const content = [
  {
    image:
      "https://www.executivehomes.com/static/media/OneHundredPlusLayoutsImage.02de467e8933a912438e.jpg",
    title: "Layout Designs",
    paragraph: "Discover amazing layout designs for your home.",
  },
  {
    image:
      "https://www.executivehomes.com/static/media/CottagesImage.bd1fe48687e47e05e37d.png",
    title: "Cottage Plans",
    paragraph: "Explore cozy cottage plans perfect for small families.",
  },
  {
    image:
      "https://www.executivehomes.com/static/media/SideEntryGarageImage.bce2143d7780c333f826.png",
    title: "Garage Entry",
    paragraph: "Side entry garages for a unique and functional home.",
  },
  {
    image:
      "https://www.executivehomes.com/static/media/OneHundredPlusLayoutsImage.02de467e8933a912438e.jpg",
    title: "Modern Layouts",
    paragraph: "Modern layout designs for efficient living.",
  },
  {
    image:
      "https://www.executivehomes.com/static/media/CottagesImage.bd1fe48687e47e05e37d.png",
    title: "Rustic Cottages",
    paragraph: "Charming rustic cottages for a cozy lifestyle.",
  },
  {
    image:
      "https://www.executivehomes.com/static/media/SideEntryGarageImage.bce2143d7780c333f826.png",
    title: "Garage Space",
    paragraph: "Maximize your space with smart garage designs.",
  },
];

const Carousel = () => {
  const targetRef2 = useRef(null);
  const { scrollYProgress: scrollYProgressTarget2 } = useScroll({
    target: targetRef2,
  });

  const x = useTransform(scrollYProgressTarget2, [0, 1], ["0%", "-55%"]);

  return (
    <div className={styles.carousel} ref={targetRef2}>
      <div className={styles.contentContainer}>
        <motion.div className={styles.images} style={{ x }}>
          {content.map((item, index) => (
            <motion.div
              className={styles.imageItem}
              key={index}
              initial={{ opacity: 0, y: 150 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <img src={item.image} alt={`carousel-image-${index}`} />
              <div className={styles.text}>
                <h2>{item.title}</h2>
                <p>{item.paragraph}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Carousel;

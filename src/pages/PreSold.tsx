import React from "react";
import styles from "./PageStyles.module.css";
import Timeline from "../components/Timeline-1/Timeline";
import CardCarousel from "../components/CardCarousel/CardCarousel";
import VidSection from "../components/VidSection/VidSection";
import VideoScroll from "../components/VideoScroll/VideoScroll";
import VerticalScroll from "../components/FullSectionScroll/FullSectionScroll";
import BoxAnis from "../components/boxAnis";

export const PreSold = () => {
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

  return (
    <>
      <BoxAnis />

      <CardCarousel cards={content} />

      <VerticalScroll />

      <CardCarousel cards={content} />

      <VideoScroll />

      <VidSection />
    </>
  );
};

// components/EarlyConstruction.tsx
import React from "react";
import VideoParallaxContent from "../components/ParallaxContent/VideoParallaxContent";
import TextParallaxContent from "../components/ParallaxContent/TextParallaxContent";
import MoreContent from "../components/ParallaxContent/MoreContent";
import CardCarousel from "../components/CardCarousel/CardCarousel";
import ScrollCarousel from "../components/ScrollCarousel/ScrollCarousel";
import TimelineTwo from "../components/TimelineTwo/TimelineTwo";
import Manifest from "../components/Manifest/Manifest";
import styles from "./FullPageStyles.module.css";
import IntroCards from "../components/IntroCards/IntroCards";
import VideoScroll from "../components/VideoScroll/VideoScroll";
import ProcessCards from "../components/ProcessCards/ProcessCards";
import ChoosePath from "../components/ChoosePath/ChoosePath";
import ScrollInfo from "../components/ScrollInfo/ScrollInfo";
import PAList from "../components/PAList/PAList";
import PadVideo from "../media/Pad.mp4";
import FramingRoughVideo from "../media/FramingRough.mp4";
import { Communication } from "../components/Communication/Communication";

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
  ];

  return (
    <>
      <div></div>
      <div className={styles.bgwhite}>
        <ChoosePath />
        <ProcessCards />
        <PAList />
        <VideoScroll
          videoMain={PadVideo}
          headingMain="Footing & Slab "
          descMain="This is what the phase of footing and slab looks like."
        />

        {/* <VideoParallaxContent
          video={PadVideo}
          subheading="The foundation is being built."
          heading="Footing & Slab"
        >
          <MoreContent
            title="Initial Preparation"
            para="Lorem ipsum dolor sit amet consectetur adipisicing elit."
          /> 
        </VideoParallaxContent> */}
        <Communication />

        <VideoParallaxContent
          video={FramingRoughVideo}
          subheading=""
          heading="Framing & Rough Trades"
        >
          {/* <MoreContent
            title="Initial Preparation"
            para="Lorem ipsum dolor sit amet consectetur adipisicing elit."
          /> */}
        </VideoParallaxContent>
        <CardCarousel cards={content} />

        <IntroCards />
        <TextParallaxContent
          imgUrl="https://placehold.co/2671x1780/3E454C/566069?text=Section+3"
          subheading="COPYYYYYYYYY"
          heading="and EVEN MORE copyyyyyyyy!"
        >
          <MoreContent
            title="Welcome Home"
            para="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, blanditiis soluta eius quam modi aliquam quaerat odit deleniti minima maiores voluptate est ut saepe accusantium maxime doloremque nulla consectetur possimus."
          />
        </TextParallaxContent>
      </div>
    </>
  );
};

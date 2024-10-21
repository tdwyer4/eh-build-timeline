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
import { VidSection } from "../components/VidSection/VidSection";

export const PreSold = () => {
  return (
    <>
      <div></div>
      <div className={styles.bgwhite}>
        <ChoosePath />
        <ProcessCards />
        <PAList />
        <VidSection video={PadVideo} />
        {/* <VideoScroll
          videoMain={PadVideo}
          headingMain="Footing & Slab "
          descMain="This is what the phase of footing and slab looks like."
        /> */}

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
        <CardCarousel />

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

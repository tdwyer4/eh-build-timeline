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
import FramingRoughVideo from "../media/Framing.mp4";
import PunchoutVideo from "../media/punchout.mp4";
import { Communication } from "../components/Communication/Communication";
import { VidSection } from "../components/VidSection/VidSection";
import ConstructionQuality from "../components/ConstructionQuality/ConstructionQuality";

export const PreSold = () => {
  return (
    <>
      <div></div>
      <div className={styles.bgwhite}>
        <ChoosePath />
        <ProcessCards />
        <PAList />
        <VidSection
          video={PadVideo}
          header1="Slab & Footing"
          description1="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
          header2="Lorem Ipsum 2"
          description2="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
          header3="Lorem Ipsum 3"
          description3="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
          header4="Lorem Ipsum 4"
          description4="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
        />
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

        <VidSection
          video={FramingRoughVideo}
          header1="Framing & Rough Trades"
          description1="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
          header2="Lorem Ipsum 2"
          description2="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
          header3="Lorem Ipsum 3"
          description3="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
          header4="Lorem Ipsum 4"
          description4="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
        />
        <CardCarousel />
        <ConstructionQuality />
        <IntroCards />
        <VidSection
          video={PunchoutVideo}
          header1="Punch Out"
          description1="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
          header2="Lorem Ipsum 2"
          description2="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
          header3="Lorem Ipsum 3"
          description3="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
          header4="Lorem Ipsum 4"
          description4="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
        />
      </div>
    </>
  );
};

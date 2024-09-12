import React, { useState, useRef, useEffect } from "react";
import "./Timeline.css";

interface Hotspot {
  id: number;
  label: string;
  image: string;
  description: string;
  content: string;
}

const hotspotsData: Hotspot[] = [
  {
    id: 1,
    label: "Hotspot 1",
    image:
      "https://www.executivehomes.com/static/media/OneHundredPlusLayoutsImage.02de467e8933a912438e.jpg",
    description: "This is hotspot 1",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    id: 2,
    label: "Hotspot 2",
    image: "image2.jpg",
    description: "This is hotspot 2",
    content: "More content for hotspot 2",
  },
  {
    id: 3,
    label: "Hotspot 3",
    image: "image3.jpg",
    description: "This is hotspot 3",
    content: "More content for hotspot 3",
  },
  {
    id: 4,
    label: "Hotspot 4",
    image: "image4.jpg",
    description: "This is hotspot 4",
    content: "More content for hotspot 4",
  },
  {
    id: 5,
    label: "Hotspot 5",
    image: "image5.jpg",
    description: "This is hotspot 5",
    content: "More content for hotspot 5",
  },
  {
    id: 6,
    label: "Hotspot 6",
    image: "image6.jpg",
    description: "This is hotspot 6",
    content: "More content for hotspot 6",
  },
  {
    id: 7,
    label: "Hotspot 7",
    image: "image7.jpg",
    description: "This is hotspot 7",
    content: "More content for hotspot 7",
  },
  {
    id: 8,
    label: "Hotspot 8",
    image: "image8.jpg",
    description: "This is hotspot 8",
    content: "More content for hotspot 8",
  },
];

const Timeline: React.FC = () => {
  const [activeHotspot, setActiveHotspot] = useState<Hotspot | null>(
    hotspotsData[0]
  ); // Default to the first hotspot
  const timelineRef = useRef<HTMLDivElement>(null);

  // Scroll to active hotspot or the first one when the component mounts
  useEffect(() => {
    if (timelineRef.current && hotspotsData.length > 0) {
      const firstHotspot = document.getElementById(
        `hotspot-${hotspotsData[0].id}`
      );
      if (firstHotspot) {
        const container = timelineRef.current;
        const hotspotTop = firstHotspot.offsetTop;
        const containerHeight = container.clientHeight;
        const scrollPosition =
          hotspotTop - containerHeight / 2 + firstHotspot.clientHeight / 2;

        container.scrollTo({
          top: scrollPosition,
          behavior: "auto", // Use 'smooth' if you prefer a smooth scroll effect
        });
      }
    }
  }, []); // Empty dependency array to run only once on mount

  useEffect(() => {
    if (activeHotspot && timelineRef.current) {
      const hotspotElement = document.getElementById(
        `hotspot-${activeHotspot.id}`
      );
      if (hotspotElement && timelineRef.current) {
        const container = timelineRef.current;
        const hotspotTop = hotspotElement.offsetTop;
        const containerHeight = container.clientHeight;
        const scrollPosition =
          hotspotTop - containerHeight / 2 + hotspotElement.clientHeight / 2;

        container.scrollTo({
          top: scrollPosition,
          behavior: "smooth", // Smooth scroll for active hotspot
        });
      }
    }
  }, [activeHotspot]);

  const handleHotspotClick = (hotspot: Hotspot) => {
    setActiveHotspot(hotspot);
  };

  return (
    <div className="container">
      <div className="timeline-container" ref={timelineRef}>
        <div className="timeline">
          {hotspotsData.map((hotspot) => (
            <div
              key={hotspot.id}
              id={`hotspot-${hotspot.id}`}
              className={`hotspot-container ${
                activeHotspot?.id === hotspot.id ? "active" : ""
              }`} // Keeps the 'active' class applied when the hotspot is selected
              onClick={() => handleHotspotClick(hotspot)}
            >
              <div className="line"></div>
              <div className="line-hor"></div>
              <div className="hotspot">
                <div className="hotspot-label">{hotspot.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="image-container">
        {activeHotspot ? (
          <img src={activeHotspot.image} alt={activeHotspot.label} />
        ) : (
          <p>Please click on a hotspot to see an image</p>
        )}
        <div className="text-container">
          <p>
            {activeHotspot
              ? activeHotspot.content
              : "Select a hotspot to view more details."}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Timeline;

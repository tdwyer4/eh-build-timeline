import { useEffect, useState, useRef } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { Container, ISourceOptions } from "@tsparticles/engine";
import styles from "./ParticlesBackground.module.css";

const ParticlesBackground: React.FC = () => {
  const [init, setInit] = useState(false);

  // Initialize the tsParticles engine
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine); // Load slim version for better performance
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = async (container?: Container): Promise<void> => {
    console.log("Particles container loaded", container);
  };

  const options: ISourceOptions = {
    background: {
      color: { value: "transparent" },
    },
    fpsLimit: 120,
    interactivity: {
      events: {
        onClick: { enable: true, mode: "push" },
        onHover: { enable: true, mode: "repulse" },
      },
      modes: {
        push: { quantity: 4 },
        repulse: { distance: 200, duration: 0.4 },
      },
    },
    particles: {
      color: { value: "#76D5D8" },
      links: {
        color: "#76D5D8",
        distance: 150,
        enable: true,
        opacity: 0.5,
        width: 0.05,
      },
      move: {
        direction: "none",
        enable: true,
        speed: 3,
        outModes: { default: "bounce" },
      },
      number: {
        density: {
          enable: true,
        },
        value: 300, // Control the number of particles here
      },
      opacity: { value: 0.5 },
      shape: { type: "circle" },
      size: { value: { min: 1, max: 2 } },
    },
    detectRetina: true,
  };

  if (init) {
    return (
      <div className={styles.particlesContainer}>
        <Particles
          id="tsparticles"
          options={options}
          className={styles.particlesBackground}
        />
      </div>
    );
  }

  return null;
};

export default ParticlesBackground;

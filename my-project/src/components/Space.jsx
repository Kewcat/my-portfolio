import React from 'react';
import Particles from 'react-tsparticles';

const Space = () => {
  return (
    <Particles
      id="tsparticles"
      options={{
        background: {
          color: "#000000", // Black background
        },
        particles: {
          number: {
            value: 100,
            density: {
              enable: true,
              value_area: 800,
            },
          },
          color: {
            value: "#ffffff", // White particles
          },
          shape: {
            type: "circle",
          },
          opacity: {
            value: 0.5,
            random: true,
          },
          size: {
            value: 3,
          },
          move: {
            enable: true,
            speed: 1,
            direction: "none",
            random: true,
          },
        },
        interactivity: {
          events: {
            onhover: {
              enable: true,
              mode: "repulse",
            },
          },
        },
      }}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: -1, // Ensure particles are behind other content
      }}
    />
  );
};

export default Space;

import MainVideo from "../assets/Walking Girl.mp4";
import React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";

const VideoContainer = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;

  video {
    width: 100%;
    height: 100vh;
    object-fit: cover;

    @media (max-width: 48em) {
      object-position: center 10%;
    }
  }

  @media (max-width: 30em) {
    object-position: center 50%;
  }
`;

const DarkOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1;
  width: 100%;
  height: 100vh;
  background-color: ${(props) => `rgba(${props.theme.bodyRgba}, 0.6)`};
`;

const Title = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 5;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: ${(props) => props.theme.text};

  div {
    display: flex;
  }

  h1 {
    font-family: "Kaushan Script";
    font-size: ${(props) => props.theme.fontxxxxl};
    text-shadow: 1px 1px 1px ${(props) => props.theme.body};

    @media (max-width: 30em) {
      font-size: calc(3rem + 1vw);
    }
  }

  h2 {
    font-family: "Sirin Stencil";
    font-size: ${(props) => props.theme.fontlg};
    text-shadow: 1px 1px 1px ${(props) => props.theme.body};
    text-transform: capitalize;
    font-weight: 300;

    @media (max-width: 30em) {
      font-size: ${(props) => props.theme.fontmd};
      /* margin-top: -1.5rem; */
    }
  }
`;

const CoverVideo = () => {
  //title variants
  const container = {
    hidden: { opacity: 0, pathLength: 0 },
    show: {
      opacity: 1,
      pathLength: 1,
      transition: { delayChildren: 5, staggerChildren: 0.2 },
    },
  };

  const item = {
    hidden: { opacity: 0 },
    show: { opacity: 1 },
  };

  return (
    <VideoContainer>
      <DarkOverlay />
      <Title variants={container} initial="hidden" animate="show">
        <div>
          <motion.h1
            variants={item}
            data-scroll
            data-scroll-speed="4"
            data-scroll-delay="0.18"
          >
            Z
          </motion.h1>

          <motion.h1
            variants={item}
            data-scroll
            data-scroll-speed="4"
            data-scroll-delay="0.16"
          >
            -
          </motion.h1>

          <motion.h1
            variants={item}
            data-scroll
            data-scroll-speed="4"
            data-scroll-delay="0.14"
          >
            F
          </motion.h1>

          <motion.h1
            variants={item}
            data-scroll
            data-scroll-speed="4"
            data-scroll-delay="0.12"
          >
            A
          </motion.h1>

          <motion.h1
            variants={item}
            data-scroll
            data-scroll-speed="4"
            data-scroll-delay="0.10"
          >
            S
          </motion.h1>

          <motion.h1
            variants={item}
            data-scroll
            data-scroll-speed="4"
            data-scroll-delay="0.08"
          >
            H
          </motion.h1>

          <motion.h1
            variants={item}
            data-scroll
            data-scroll-speed="4"
            data-scroll-delay="0.06"
          >
            I
          </motion.h1>

          <motion.h1
            variants={item}
            data-scroll
            data-scroll-speed="4"
            data-scroll-delay="0.04"
          >
            O
          </motion.h1>

          <motion.h1
            variants={item}
            data-scroll
            data-scroll-speed="4"
            data-scroll-delay="0.02"
          >
            N
          </motion.h1>
        </div>

        <motion.h2
          variants={item}
          data-scroll
          data-scroll-speed="2"
          data-scroll-delay="0.04"
        >
          Inspire. Create. Believe
        </motion.h2>
      </Title>
      <video src={MainVideo} type="video/mp4" autoPlay muted loop />
    </VideoContainer>
  );
};

export default CoverVideo;

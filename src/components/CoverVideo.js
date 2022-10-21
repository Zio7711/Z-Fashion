import MainVideo from "../assets/Walking Girl.mp4";
import React from "react";
import styled from "styled-components";

const VideoContainer = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;

  video {
    width: 100%;
    height: 100vh;
    object-fit: cover;
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

const Title = styled.div`
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
  }

  h2 {
    font-family: "Sirin Stencil";
    font-size: ${(props) => props.theme.fontlg};
    text-shadow: 1px 1px 1px ${(props) => props.theme.body};
    text-transform: capitalize;
    font-weight: 300;
  }
`;

const CoverVideo = () => {
  return (
    <VideoContainer>
      <DarkOverlay />
      <Title>
        <div>
          <h1 data-scroll data-scroll-speed="4" data-scroll-delay="0.18">
            Z
          </h1>

          <h1 data-scroll data-scroll-speed="4" data-scroll-delay="0.16">
            -
          </h1>

          <h1 data-scroll data-scroll-speed="4" data-scroll-delay="0.14">
            F
          </h1>

          <h1 data-scroll data-scroll-speed="4" data-scroll-delay="0.12">
            A
          </h1>

          <h1 data-scroll data-scroll-speed="4" data-scroll-delay="0.10">
            S
          </h1>

          <h1 data-scroll data-scroll-speed="4" data-scroll-delay="0.08">
            H
          </h1>

          <h1 data-scroll data-scroll-speed="4" data-scroll-delay="0.06">
            I
          </h1>

          <h1 data-scroll data-scroll-speed="4" data-scroll-delay="0.04">
            O
          </h1>

          <h1 data-scroll data-scroll-speed="4" data-scroll-delay="0.02">
            N
          </h1>
        </div>

        <h2 data-scroll data-scroll-speed="2" data-scroll-delay="0.04">
          Inspire. Create. Believe
        </h2>
      </Title>
      <video src={MainVideo} type="video/mp4" autoPlay muted loop />
    </VideoContainer>
  );
};

export default CoverVideo;

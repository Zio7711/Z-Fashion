import React from "react";
import styled from "styled-components";

const Section = styled.div`
  min-height: 100vh;
  width: 80vw;
  margin: 0 auto;

  display: flex;
  justify-content: center;
  align-items: center;

  position: relative;
`;

const Container = styled.div`
  min-height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
`;

const BannerComponent = styled.h1`
  font-size: ${(props) => props.theme.fontxxxl};
  font-family: "Kaushan Script";
  color: ${(props) => props.theme.text};
  white-space: nowrap;
  line-height: 1;
  text-transform: uppercase;

  span {
    display: block;
    background-color: ${(props) => props.theme.body};
    padding: 1rem 2rem;
  }
`;

const Banner = () => {
  return (
    <Section>
      <Container id="up">
        <BannerComponent>
          <span
            data-scroll
            data-scroll-direction="horizontal"
            data-scroll-target="#up"
            data-scroll-speed="8"
          >
            Fashion is an armour
          </span>
        </BannerComponent>
        <BannerComponent>
          <span
            data-scroll
            data-scroll-direction="horizontal"
            data-scroll-target="#up"
            data-scroll-speed="-6"
          >
            to survive everyday life
          </span>
        </BannerComponent>
        <BannerComponent>
          <span
            data-scroll
            data-scroll-direction="horizontal"
            data-scroll-target="#up"
            data-scroll-speed="6"
          >
            One is never over-dressed or
          </span>
        </BannerComponent>
        <BannerComponent>
          <span
            data-scroll
            data-scroll-direction="horizontal"
            data-scroll-target="#up"
            data-scroll-speed="-4"
          >
            under-dressed
          </span>
        </BannerComponent>
        <BannerComponent>
          <span
            data-scroll
            data-scroll-direction="horizontal"
            data-scroll-target="#up"
            data-scroll-speed="6"
          >
            with a Little Black Dress
          </span>
        </BannerComponent>
      </Container>
    </Section>
  );
};

export default Banner;
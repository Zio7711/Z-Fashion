import React, { useLayoutEffect, useRef } from "react";

import ScrollTrigger from "gsap/ScrollTrigger";
import gsap from "gsap";
import img11 from "../assets/Images/11.webp";
import img12 from "../assets/Images/12.webp";
import img13 from "../assets/Images/13.webp";
import img14 from "../assets/Images/14.webp";
import styled from "styled-components";

const Section = styled.section`
  min-height: 100vh;
  width: 100vw;
  margin: 0 auto;

  display: flex;
  justify-content: center;
  align-items: center;

  position: relative;

  /* background-color: yellow; */
`;

const Title = styled.div`
  font-size: ${(props) => props.theme.fontxxxl};
  font-family: "Kaushan Script";
  font-weight: 300;

  text-shadow: 1px 1px 1px ${(props) => props.theme.body};
  color: ${(props) => props.theme.body};
  position: absolute;
  top: 1rem;
  left: 5%;
  z-index: 12;

  @media (max-width: 64em) {
    font-size: ${(props) => props.theme.fontxxl};
  }

  @media (max-width: 48em) {
    font-size: ${(props) => props.theme.fontxl};
  }
`;

const Overlay = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  width: 30vw;
  height: 90vh;

  /* background-color: aliceblue; */
  box-shadow: 0 0 0 4vw ${(props) => props.theme.text};
  z-index: 11;

  border: 3px solid ${(props) => props.theme.body};

  @media (max-width: 70em) {
    /* box-shadow: 0 0 0 4vw ${(props) => props.theme.text}; */
    width: 40vw;
    height: 80vh;
  }
  @media (max-width: 64em) {
    width: 50vw;
    box-shadow: 0 0 0 60vw ${(props) => props.theme.text};
  }
  @media (max-width: 48em) {
    /* box-shadow: 0 0 0 4vw ${(props) => props.theme.text}; */
    width: 60vw;
  }
  @media (max-width: 30em) {
    /* box-shadow: 0 0 0 4vw ${(props) => props.theme.text}; */
    width: 80vw;
    height: 60vh;
  }
`;

const Text = styled.div`
  font-size: ${(props) => props.theme.fontlg};
  font-weight: 300;
  position: absolute;

  padding: 2rem;

  top: 0;
  right: 0;
  z-index: 11;

  width: 20%;

  @media (max-width: 48em) {
    display: none;
  }
`;

const Container = styled.div`
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 25vw;
  height: auto;

  /* width: 65%; */
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  @media (max-width: 64em) {
    width: 30vw;
  }
  @media (max-width: 48em) {
    width: 40vw;
  }
  @media (max-width: 30em) {
    width: 60vw;
  }
`;

const Item = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  img {
    width: 100%;
    height: auto;
    z-index: 5;
  }
`;

const Product = ({ img, title }) => {
  return (
    <Item>
      <img src={img} alt={title} />
      <h2 style={{ textTransform: "capitalize" }}>{title}</h2>
    </Item>
  );
};

const NewArrivals = () => {
  gsap.registerPlugin(ScrollTrigger);

  const ref = useRef(null);
  const scrollingRef = useRef(null);

  useLayoutEffect(() => {
    let element = ref.current;
    let scrollingElement = scrollingRef.current;

    let t1 = gsap.timeline();

    setTimeout(() => {
      t1.to(element, {
        scrollTrigger: {
          trigger: element,
          start: "top top",
          end: "bottom+=100% top-=100%",
          scrub: true,
          pin: true,
          //   markers: true,
          scroller: ".App",
        },

        ease: "none",
      });

      // vertical scrolling
      t1.fromTo(
        scrollingElement,
        {
          y: 0,
        },
        {
          y: "-100%",
          scrollTrigger: {
            trigger: scrollingElement,
            start: "top top",
            end: "bottom top",
            scrub: true,
            // markers: true,
            scroller: ".App",
          },
        }
      );

      ScrollTrigger.refresh();

      return () => {
        t1.kill();
        ScrollTrigger.kill();
      };
    }, 1000);
  }, []);
  return (
    <Section ref={ref} id="new-arrivals">
      <Title
        data-scroll
        data-scroll-speed="-2"
        data-scroll-direction="horizontal"
      >
        NewArrivals
      </Title>

      <Container ref={scrollingRef}>
        <Product img={img11} title="denim" />
        <Product img={img12} title="cool dresses" />
        <Product img={img13} title="jackets" />
        <Product img={img14} title="t-shirts" />
      </Container>

      <Overlay />

      <Text data-scroll data-scroll-speed="-4">
        There is new collection available for cool clothes in all sizes. This
        collection is a great way to find a new look for you. It offers a
        variety of cool apparel styles to fit your taste, while you can also
        find some cool clothes that you can wear everyday.
        <br />
        <br />
        The first line of clothing you will see on this collection is for men.
        The collection also includes three new styles for women.
        <br />
        <br />
        Give it a try and experience a new look.
      </Text>
    </Section>
  );
};

export default NewArrivals;

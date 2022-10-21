import CoverVideo from "../components/CoverVideo";
import Logo from "../components/Logo";
import NavBar from "../components/NavBar";
import React from "react";
import styled from "styled-components";

const Section = styled.section`
  position: relative;
  min-height: 200vh;
  overflow: hidden;
`;

const Home = () => {
  return (
    <Section>
      <CoverVideo />
      <Logo />
      <NavBar />
    </Section>
  );
};

export default Home;

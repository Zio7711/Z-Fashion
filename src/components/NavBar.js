import React, { useState } from "react";

import { motion } from "framer-motion";
import styled from "styled-components";

const NavContainer = styled(motion.div)`
  position: absolute;
  top: ${(props) => (props.click ? "0" : `-${props.theme.navHeight}`)};
  width: 100vw;
  z-index: 6;

  display: flex;
  justify-content: center;
  align-items: center;

  transition: all 0.3s ease;
`;

const MenuBtn = styled.li`
  background-color: ${(props) => `rgba(${props.theme.textRgba}, 0.7)`};
  list-style-type: style none;
  color: ${(props) => props.theme.body};
  width: 15rem;
  height: 2.5rem;

  display: flex;
  justify-content: center;
  align-items: center;

  clip-path: polygon(0 0, 100% 0, 80% 100%, 20% 100%);
  font-size: ${(props) => props.theme.fontmd};
  font-weight: 600;
  text-transform: uppercase;
  cursor: pointer;

  position: absolute;
  top: 100%;
  left: 50%;
  transform: translateX(-50%);
`;

const MenuItems = styled.ul`
  position: relative;
  height: ${(props) => props.theme.navHeight};
  background-color: ${(props) => props.theme.body};
  color: ${(props) => props.theme.text};
  list-style: none;

  display: flex;
  justify-content: space-around;
  align-items: center;

  width: 100%;
  padding: 0 10rem;
`;

const MenuItem = styled.li`
  text-transform: uppercase;
  color: ${(props) => props.theme.text};
`;

const NavBar = () => {
  const [click, setClick] = useState(false);
  return (
    <NavContainer
      click={click}
      initial={{ y: "-100%" }}
      animate={{ y: 0 }}
      transition={{ duration: 2, delay: 2 }}
    >
      <MenuItems>
        <MenuBtn onClick={() => setClick(!click)}>Menu</MenuBtn>
        <MenuItem>Home</MenuItem>
        <MenuItem>About</MenuItem>
        <MenuItem>Shop</MenuItem>
        <MenuItem>New Arrivals</MenuItem>
      </MenuItems>
    </NavContainer>
  );
};

export default NavBar;
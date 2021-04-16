import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";
import { animateScroll as scroll } from "react-scroll";
import {
  NavHeader,
  NavLink,
  NavItem,
  LogoLink,
  NavLogo,
  NavMenu,
  MobileIcon,
  ResumeLink,
} from "./styles/Navbar";

const Navbar = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  //const closeMobileMenu = () => setClick(false);

  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <>
      <NavHeader>
        <LogoLink to="/">
          <NavLogo onClick={toggleHome} click={click}>
            WBL
          </NavLogo>
        </LogoLink>
        <NavMenu onClick={handleClick} click={click}>
          <NavItem>
            <NavLink
              onClick={handleClick}
              to="about"
              smooth={true}
              duration={500}
              spy={true}
              exact="true"
              offset={-150}
            >
              About
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              onClick={handleClick}
              to="projects"
              smooth={true}
              duration={500}
              spy={true}
              exact="true"
              offset={-60}
            >
              Projects
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              onClick={handleClick}
              to="contact"
              smooth={true}
              duration={500}
              spy={true}
              exact="true"
              offset={-25}
            >
              Contact
            </NavLink>
          </NavItem>
          <NavItem>
            <ResumeLink href="https://docs.google.com/document/d/1tr5Kau-dZy06l9LTryN9LTZfA8722dHxbksYEpqc1w0/edit?usp=sharing">
              Resume
            </ResumeLink>
          </NavItem>
        </NavMenu>
        <MobileIcon onClick={handleClick}>
          {click ? <AiOutlineClose /> : <GiHamburgerMenu />}
        </MobileIcon>
      </NavHeader>
    </>
  );
};

export default Navbar;

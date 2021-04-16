import styled from "styled-components/macro";
import { NavLink as Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";

export const NavHeader = styled.div`
  background: #1d262d;
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1em 1.5em 0.5em 1.5em;
  position: sticky;
  top: 0;
  z-index: 99;
  border-bottom: 3px solid #e76f51;
`;

export const NavLogo = styled.h1`
  font-family: "Covered By Your Grace", cursive;
  font-size: 3rem;
  font-weight: 200;
  text-transform: uppercase;
  letter-spacing: 1px;
  color: #e9c46a;
`;

export const NavLink = styled(ScrollLink)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0.5rem 1rem;
  height: 100%;
  cursor: pointer;

  &:hover,
  &:focus {
    font-weight: 400;
    box-shadow: inset 0 -10px 0 0 #2a9d8f;
    transition: all 0.3s ease-in-out;
  }

  @media (max-width: 800px) {
    font-size: 1rem;
    text-align: center;
    margin: 0.85em 0;
    width: 100%;
    display: table;

    &:hover,
    &:focus {
      color: #e9c46a;
      box-shadow: none;
    }
  }
`;

export const ResumeLink = styled.a`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0.5rem 1rem;
  height: 100%;
  cursor: pointer;

  &:hover,
  &:focus {
    font-weight: 400;
    box-shadow: inset 0 -10px 0 0 #2a9d8f;
    transition: all 0.3s ease-in-out;
  }

  @media (max-width: 800px) {
    font-size: 1rem;
    text-align: center;
    margin: 0.85em 0;
    width: 100%;
    display: table;

    &:hover,
    &:focus {
      color: #e9c46a;
      box-shadow: none;
    }
  }
`;

export const NavItem = styled.li`
  @media (max-width: 800px) {
    width: 100%;
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;

  @media (max-width: 500px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    position: absolute;
    left: 0;
    top: 60px;
    opacity: ${({ click }) => (click ? "1" : "0")};
    transition: all 0.15s ease-in-out;
    background: #101522;
  }
`;

export const LogoLink = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  cursor: pointer;
`;

export const MobileIcon = styled.div`
  display: none;
  color: white;

  @media (max-width: 500px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.5rem;
    cursor: pointer;
  }
`;

import React, { useState } from "react";
import styled from "styled-components";
import { Link, NavLink as DefaultNavLink } from "react-router-dom";
import { motion, AnimateSharedLayout } from "framer-motion";
import { media, DesktopOnly, MobileOnly } from "../../breakpoints";

export const NAV_HEIGHT = 85;

const NavContainer = styled.div`
  height: ${NAV_HEIGHT}px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 128px 0 27px;
  background: #cc0033;

  ${media.lessThan("desktop")} {
    padding: 15px 23px;
  }
`;

const NavLogo = styled.img`
  display: block;
  transition: 0.2s ease;
  height: 100%;

  :hover {
    transform: scale(0.95);
    opacity: 0.9;
  }
`;

const NavLinks = styled.div`
  display: flex;
`;

const StyledNavLink = styled(DefaultNavLink)`
  color: white;
  font-family: Lato;
  font-weight: 700;
  font-size: 26px;
  text-transform: uppercase;
  text-decoration: none;
  position: relative;
  transition: 0.2s ease;

  :hover {
    transform: scale(0.95);
    opacity: 0.9;
  }

  & + & {
    margin-left: 30px;
  }
`;

const NavLinkActive = styled(motion.div)`
  background-color: white;
  position: absolute;
  left: 0;
  right: 0;
  bottom: -4px;
  height: 4px;
`;

const NavLink = ({ children, ...props }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <StyledNavLink
      {...props}
      isActive={(match) => {
        if (match) {
          setIsActive(true);
        } else {
          setIsActive(false);
        }

        return false;
      }}
    >
      {children}
      {isActive && <NavLinkActive layoutId="active" />}
    </StyledNavLink>
  );
};

const Nav = () => {
  return (
    <NavContainer>
      <Link to="/" style={{ height: "calc(100% - 24px)" }}>
        <NavLogo src="logo.png" alt="Rutgers Cognitive Science Logo" />
      </Link>

      <DesktopOnly>
        <AnimateSharedLayout>
          <NavLinks>
            <NavLink to="/" exact>
              Home
            </NavLink>
            <NavLink to="/calendar">Calendar</NavLink>
            <NavLink to="/e-board">E-Board</NavLink>
            <NavLink to="/merch">Merch</NavLink>
            <NavLink to="/spotlight">Spotlight</NavLink>
          </NavLinks>
        </AnimateSharedLayout>
      </DesktopOnly>
    </NavContainer>
  );
};

export default Nav;

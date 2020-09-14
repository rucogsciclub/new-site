import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div``;

const FooterContainer = styled.div`
  background-color: #cc0033;
  padding-top: 57px;
  padding-bottom: 77px;
  padding-left: 128px;
  display: flex;
`;

const FooterLogoContainer = styled.div`
  flex-basis: 200px;
`;

const FooterColumn = styled.div`
  max-width: 200px;

  & + & {
    margin-left: 70px;
  }
`;

const FooterColumnHeader = styled.h1`
  font-family: Lato;
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  line-height: 24px;
  color: #ffffff;
  margin-bottom: 32px;
`;

const FooterText = styled.p`
  font-family: Lato;
  font-style: normal;
  font-weight: normal;
  font-size: 15px;
  line-height: 25px;
  color: #ffffff;
  display: block;
  text-decoration: none;

  :hover {
    opacity: 0.8;
  }
`;

const FooterLink = (props) => (
  <FooterText as={props.href ? "a" : Link} {...props} />
);

const CopyrightContainer = styled.div`
  font-family: Lato;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 67px;
  color: #ffffff;
  text-align: center;
  background-color: #bd002f;

  & > * {
    margin-left: 42px;
  }
`;

const Footer = () => {
  return (
    <Container>
      <FooterContainer>
        <FooterLogoContainer>
          <img src="footer-logo.png" alt="Rutgers Cognitive Science Logo" />
        </FooterLogoContainer>

        <FooterColumn>
          <FooterColumnHeader>Site Map</FooterColumnHeader>
          <FooterLink to="/">Home</FooterLink>
          <FooterLink to="/calendar">Calendar</FooterLink>
          <FooterLink to="/e-board">E-Board</FooterLink>
          <FooterLink to="/merch">Merchandise</FooterLink>
          <FooterLink to="/spotlight">Spotlight</FooterLink>
          <FooterLink href="#">Class Help</FooterLink>
          <FooterLink href="#">Blog</FooterLink>
        </FooterColumn>

        <FooterColumn>
          <FooterColumnHeader>Location</FooterColumnHeader>
          <FooterLink>
            15 Seminary Place,
            <br /> New Brunswick, NJ <br />
            08901
          </FooterLink>
        </FooterColumn>

        <FooterColumn>
          <FooterColumnHeader>Social Media</FooterColumnHeader>
          <FooterLink href="https://www.facebook.com/RUCogSciClub/">
            Facebook
          </FooterLink>
          <FooterLink href="https://www.instagram.com/rucogsciclub/">
            Instagram
          </FooterLink>
          <FooterLink href="https://twitter.com/rucogsciclub/">
            Twitter
          </FooterLink>
          <FooterLink href="#">Discord</FooterLink>
        </FooterColumn>

        <FooterColumn>
          <FooterColumnHeader>Terms</FooterColumnHeader>
          <FooterLink>Mission Statement</FooterLink>
          <FooterLink>Bylaws</FooterLink>
          <FooterLink>Constitution</FooterLink>
        </FooterColumn>
      </FooterContainer>

      <CopyrightContainer>
        <span>Copyright &copy; 2020</span> <span>•</span>{" "}
        <span>All rights reserved.</span>
      </CopyrightContainer>
    </Container>
  );
};

export default Footer;

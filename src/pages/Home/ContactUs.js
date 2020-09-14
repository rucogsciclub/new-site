import React from "react";
import styled from "styled-components";
import EmailLink from "../../EmailLink";

const Header = styled.h1`
  font-family: Lato;
  font-style: normal;
  font-weight: bold;
  font-size: 35px;
  line-height: 32px;
  color: #333333;
  margin-bottom: 29px;
`;

const P = styled.p`
  font-family: Lato;
  font-style: normal;
  font-weight: normal;
  font-size: 26px;
  line-height: 38px;
  color: #333333;
  margin-bottom: 41px;
`;

const Container = styled.div`
  max-width: 950px;
  margin: 0 auto;
  margin-top: 46px;
`;

const ContactUs = () => (
  <Container>
    <Header>Need to Contact Us?</Header>
    <P>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat.
    </P>
    <EmailLink email="rutgerscognitivescienceclub@gmail.com" />
  </Container>
);

export default ContactUs;

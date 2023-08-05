import React from "react";
import styled from "styled-components";
import EmailLink from "../../EmailLink";
import DiscordLink from "../../DiscordLink"

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
      We're always looking to hear from you! Whether it's questions, comments,
      concerns, or ideas for the club, feel free to send us an email! 
      You can also keep in touch with all things RU-CogSci by joining our Discord.
    </P>
    <EmailLink email="rutgerscognitivescienceclub@gmail.com" />
    <DiscordLink inviteLink= "Join our Discord!" />
  </Container>
);

export default ContactUs;

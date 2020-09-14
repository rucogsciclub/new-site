import React from "react";
import styled from "styled-components";
import BackToTop from "../../components/BackToTop";
import Jumbo from "./Jumbo";
import Gallery from "./Gallery";
import ContactUs from "./ContactUs";

const MainContainer = styled.div`
  padding: 107px 0 126px 0;
  background: url(bg-pattern.png);
  background-size: cover;
  background-repeat: no-repeat;
`;

const Home = () => (
  <>
    <Jumbo />
    <BackToTop />
    <MainContainer>
      <Gallery
        items={[
          {
            title: "About Us",
            img: "eboard.png",
            text:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
          },
          {
            title: "Mission and Values",
            img: "neuro.png",
            text:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
          },
        ]}
      />
      <ContactUs />
    </MainContainer>
  </>
);

export default Home;

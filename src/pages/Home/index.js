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
              "The Rutgers University Cognitive Scicence Club (RU-CogSci) is a student run organization at Rutgers university, of course! Members of our club are passionate about the field of cognitive science and are interested in impacting the world through a deeper understanding of the brain and mind.",
          },
          {
            title: "Mission and Values",
            img: "neuro.png",
            text:
              "As a club, our focus is to provide a rich, diverse community to encourage the development of the personal, academic, and professional life of undergraduate students that have a passion in cognitive science. Our club runs multiple events throughout the semester. We bring in professors, graduate students, and industry professionals to talk about their research and the work they do in the field. We also host panels with guest speakers and debates of cutting edge topics.",
          },
        ]}
      />
      <ContactUs />
    </MainContainer>
  </>
);

export default Home;

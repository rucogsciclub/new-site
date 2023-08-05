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
              "The Rutgers University Cognitive Scicence Club (RU-CogSci) is a student run organization at Rutgers university, of course! Members of our club are passionate about the field of cognitive science and are interested in impacting the world through a deeper understanding of the brain and mind. As a club, our focus is to provide a rich, diverse community to encourage the development of the personal, academic, and professional life of undergraduate students that have a passion in cognitive science.",
          },
          {
            title: "Mission and Values",
            img: "neuro.png",
            text:
              "The purpose of this organization shall be to provide a network for students with an interest in cognitive science. Our organization seeks to empower members to engage in a strong network, build lasting relationships, expand thinking, and respect and encourage diversity of thought. We will expose students to scientific literature of the interdisciplinary of cognitive science, guest speakers, and events that will help students in their professional growth. We shall also strive to raise awareness of the cognitive science field, major, minor, and research options in the Rutgers University community.",
          },
        ]}
      />
      <ContactUs />
    </MainContainer>
  </>
);

export default Home;

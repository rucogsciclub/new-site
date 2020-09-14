import React, { useState } from "react";
import { Subheader, Header, HeaderGroup } from "../../components/Header";
import PageContainer from "../../components/Content";
import styled from "styled-components";

const LeftArrow = () => (
  <svg
    width="23"
    height="38"
    viewBox="0 0 23 38"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M0.603266 17.429L17.4286 0.604011C17.8177 0.214554 18.3372 0 18.8911 0C19.445 0 19.9645 0.214554 20.3536 0.604011L21.5927 1.84277C22.399 2.64996 22.399 3.96188 21.5927 4.76784L7.46409 18.8965L21.6084 33.0408C21.9975 33.4302 22.2124 33.9494 22.2124 34.503C22.2124 35.0572 21.9975 35.5764 21.6084 35.9662L20.3693 37.2046C19.9799 37.5941 19.4607 37.8086 18.9068 37.8086C18.3529 37.8086 17.8334 37.5941 17.4443 37.2046L0.603266 20.3642C0.213194 19.9735 -0.00105286 19.4519 0.000177383 18.8974C-0.00105286 18.3407 0.213194 17.8194 0.603266 17.429Z"
      fill="#BBB1B1"
      fill-opacity="0.5"
    />
  </svg>
);

const RightArrow = () => (
  <svg
    width="23"
    height="38"
    viewBox="0 0 23 38"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M21.6091 17.429L4.78383 0.604011C4.39468 0.214554 3.8752 0 3.32129 0C2.76738 0 2.2479 0.214554 1.85875 0.604011L0.619688 1.84277C-0.186582 2.64996 -0.186582 3.96188 0.619688 4.76784L14.7483 18.8965L0.604011 33.0408C0.214862 33.4302 0 33.9494 0 34.503C0 35.0572 0.214862 35.5764 0.604011 35.9662L1.84308 37.2046C2.23253 37.5941 2.75171 37.8086 3.30561 37.8086C3.85952 37.8086 4.379 37.5941 4.76815 37.2046L21.6091 20.3642C21.9992 19.9735 22.2135 19.4519 22.2122 18.8974C22.2135 18.3407 21.9992 17.8194 21.6091 17.429Z"
      fill="#BBB1B1"
      fill-opacity="0.5"
    />
  </svg>
);

const SpotlightContainer = styled.div`
  display: flex;
`;

const SpotlightCard = styled.div`
  background: #fefefe;
  box-shadow: 0px 4px 36px rgba(0, 0, 0, 0.28);
  border-radius: 19px;
  padding: 48px;
  width: 100%;
  max-width: 904px;
`;

const SpotlightHeader = styled.div`
  font-family: Lato;
  font-style: normal;
  font-weight: 300;
  font-size: 48px;
  line-height: 58px;
  color: #000000;
`;

const SpotlightMeta = styled.div`
  font-family: Lato;
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  line-height: 32px;
  color: #6bbabf;
`;

const SpotlightText = styled.div`
  font-family: Lato;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 32px;
  color: #333333;
`;

const SpotlightLink = styled.div`
  font-family: Lato;
  font-style: normal;
  font-weight: bold;
  font-size: 17px;
  line-height: 32px;
  color: #6bbabf;
`;

const SpotlightItem = () => {
  return (
    <SpotlightCard>
      <SpotlightHeader>Sammi Scalese</SpotlightHeader>
      <SpotlightMeta>YYYY</SpotlightMeta>
      <SpotlightMeta>Major(s), minor(s)</SpotlightMeta>
      <SpotlightText>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </SpotlightText>
      <SpotlightLink>https://www.examplesocialmedialink.com</SpotlightLink>
    </SpotlightCard>
  );
};

const Spotlight = () => {
  const [selectedIndex, setSelectedIndex] = useState(1);

  const members = [
    {
      name: "Sammi Scalese",
      year: "YYYY",
      degree: "Major(s), minor(s)",
      desc:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      link: "https://www.examplesocialmedialink.com",
    },
    {
      name: "Sammi Scalese",
      year: "YYYY",
      degree: "Major(s), minor(s)",
      desc:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      link: "https://www.examplesocialmedialink.com",
    },
    {
      name: "Sammi Scalese",
      year: "YYYY",
      degree: "Major(s), minor(s)",
      desc:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      link: "https://www.examplesocialmedialink.com",
    },
  ];

  return (
    <div>
      <HeaderGroup>
        <Header>Member Spotlight</Header>
        <Subheader>
          “Lorem ipsum dolor sit amet, consectetur adipiscing elit”{" "}
        </Subheader>
      </HeaderGroup>
      <PageContainer>
        <SpotlightContainer>
          <SpotlightItem data={members[selectedIndex]} />
        </SpotlightContainer>
      </PageContainer>
    </div>
  );
};

export default Spotlight;

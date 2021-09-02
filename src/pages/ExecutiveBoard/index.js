import React from "react";
import DefaultPageContainer from "../../components/Content";
import PageTitle from "../../components/PageTitle";
import styled from "styled-components";
import { AnimateSharedLayout, motion } from "framer-motion";
import MainPage from "../../components/Page";
//import images from "../ExecutiveBoard/images"
import { Header, HeaderGroup, Subheader } from "../../components/Header";

const PageContainer = styled(DefaultPageContainer)`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-row-gap: 83px;
  justify: center;
`;

const BoardMemberProfile = styled.img`
  alt: "Headshot",
  object-fit: fill;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.14);
  border-radius: 1px;
  width: 180px;
  height: 180px;
`;

const BoardMemberContainer = styled.div`
  display: flex;
  flex-direction: column;
  alignItems: 'center';
  width: 180px;
  justifyContent: 'center';
`;

const BoardMemberMajor = styled.div`
  font-family: Lato;
  font-style: normal;
  font-weight: normal;
  font-size: 200x;
  line-height: 140.62%;
  text-align: center;
  display: flex;
  justifyContent: 'center';
  flex-direction: column;

  color: #000000;
`;

const BoardMemberName = styled.div`
  font-family: Lato;
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  line-height: 140.62%;
  color: #000000;
  text-align: center;
  display: flex;
  justifyContent: 'center';
  flex-direction: column;

  margin-top: 13px;
`;

const BoardMemberPosition = styled.div`
  font-family: Lato;
  font-style: normal;
  font-weight: 300;
  font-size: 220x;
  line-height: 140.62%;
  text-align: center;
  display: flex;
  justifyContent: 'center';
  flex-direction: column;

  color: #000000;
`;

const BoardMember = ({ name, major, position, image }) => {
  return (
    <BoardMemberContainer>
      <BoardMemberProfile src={image}></BoardMemberProfile>
      <BoardMemberName>{name}</BoardMemberName>
      <BoardMemberMajor>Major: {major}</BoardMemberMajor>
      <BoardMemberPosition>{position}</BoardMemberPosition>
    </BoardMemberContainer>
  );
};

const ExecutiveBoard = () => {
  const members = [
    { name: "Ayaan Memon",  major: "CBN, Music", position: "President", image: "AYAAN.png" },

    { name: "Luna Lee", major: "HR, Psychology", position: "Vice President", image: "LUNA.jpg" },

    { name: "Peter Tilton", major: "CS, Cog Sci", position: "Treasurer", image: "PETER.jpg" },
    { name: "Veda Kota", major: "Cog Sci, Philosophy", position: "Event Coordinator", image: "VEDA.jpg" },

    { name: "Connie Chen", major: "CS, Cog Sci", position: "Event Coordinator" , image: "logo.png" }, /*logo indicates missing picture*/

    { name: "Cynthia Chen",  major: "Cog Sci", position: "Graphic Designer", image: "CYNTHIA.jpg" },

    { name: "Jessica Kehoe", major: "Cog Sci", position: "Graphic Designer", image: "logo.png" },
    { name: "Amr Ahmed", major: "Computer Science", position: "Technology Director", image: "AMR.png" },
    { name: "Aarif Razak",  major: "CS, Psychology", position: "Technology Director", image: "AARIF.jpg" },
    { name: "Duncan Wood",  major: "Economics, CS",  position: "Community Director", image: "DUNCAN.jpg" },
    { name: "Maryam Khalid", major: "Cog Sci", position: "Marketing Director", image: "MARYAM.jpg" },
    { name: "Katherine (Kate) Liu", major: "Computer Science", position: "Marketing Director", image: "KATHERINE.jpg" },



  ];

  return (
    <MainPage>
      <HeaderGroup>
        <Header>Executive Board</Header>
        <Subheader> 2020-2021  </Subheader>
      </HeaderGroup>

      <PageContainer>
        {members.map((member) => (
          <BoardMember name={member.name} major = {member.major} position={member.position} image={member.image} />
        ))}
      </PageContainer>
    </MainPage>
  );
};

export default ExecutiveBoard;

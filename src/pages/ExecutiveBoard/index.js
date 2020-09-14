import React from "react";
import DefaultPageContainer from "../../components/Content";
import PageTitle from "../../components/PageTitle";
import styled from "styled-components";
import { AnimateSharedLayout, motion } from "framer-motion";
import MainPage from "../../components/Page";
import { Header, HeaderGroup, Subheader } from "../../components/Header";

const PageContainer = styled(DefaultPageContainer)`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-row-gap: 83px;
  justify: center;
`;

const BoardMemberProfile = styled.div`
  background: #f2f2f2;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.14);
  border-radius: 1px;
  width: 180px;
  height: 180px;
`;

const BoardMemberContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const BoardMemberName = styled.div`
  font-family: Lato;
  font-style: normal;
  font-weight: bold;
  font-size: 30px;
  line-height: 140.62%;
  color: #000000;
  margin-top: 13px;
`;

const BoardMemberPosition = styled.div`
  font-family: Lato;
  font-style: normal;
  font-weight: 300;
  font-size: 22px;
  line-height: 140.62%;
  color: #000000;
`;

const BoardMember = ({ name, position, src }) => {
  return (
    <BoardMemberContainer>
      <BoardMemberProfile></BoardMemberProfile>
      <BoardMemberName>Name</BoardMemberName>
      <BoardMemberPosition>Position</BoardMemberPosition>
    </BoardMemberContainer>
  );
};

const ExecutiveBoard = () => {
  const members = [
    { name: "Name", position: "Positon" },

    { name: "Name", position: "Positon" },

    { name: "Name", position: "Positon" },
    { name: "Name", position: "Positon" },
    { name: "Name", position: "Positon" },

    { name: "Name", position: "Positon" },
    { name: "Name", position: "Positon" },

    { name: "Name", position: "Positon" },

    { name: "Name", position: "Positon" },
    { name: "Name", position: "Positon" },

    { name: "Name", position: "Positon" },

    { name: "Name", position: "Positon" },

    { name: "Name", position: "Positon" },
    { name: "Name", position: "Positon" },

    { name: "Name", position: "Positon" },
    { name: "Name", position: "Positon" },

    { name: "Name", position: "Positon" },
    { name: "Name", position: "Positon" },
    { name: "Name", position: "Positon" },
  ];

  return (
    <MainPage>
      <HeaderGroup>
        <Header>Executive Board</Header>
        <Subheader>&lt; 2020-2021 &gt; </Subheader>
      </HeaderGroup>

      <PageContainer>
        {members.map((member) => (
          <BoardMember name={member.name} position={member.position} />
        ))}
      </PageContainer>
    </MainPage>
  );
};

export default ExecutiveBoard;

import React from "react";
import styled from "styled-components";

const DiscordLinkContainer = styled.div`
  display: flex;
  align-items: center;
  font-family: Lato;
  font-style: normal;
  font-weight: normal;
  font-size: 30px;
  line-height: 36px;
  color: #178cff;
`;

const DiscordIcon = styled.div`
  width: 32px;
  height: 32px;
  background: url(Discord-Logo-Color.svg);
  margin-right: 13px;
  background-repeat: no-repeat;
`;

const DiscordLinkText = styled.a`
  text-decoration: none;
  color: inherit;
  border-bottom: 1px solid #178cff;
`;
//Adding the generated link here https://discord.gg/D5tN6CcAZG
const DiscordLink = ({ inviteLink }) => {
  return (
    <DiscordLinkContainer>
      <DiscordIcon />
      <DiscordLinkText href= "https://discord.gg/D5tN6CcAZG">{inviteLink}</DiscordLinkText>
    </DiscordLinkContainer>
  );
};

export default DiscordLink;

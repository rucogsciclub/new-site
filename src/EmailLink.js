import React from "react";
import styled from "styled-components";

const EmailLinkContainer = styled.div`
  display: flex;
  align-items: center;
  font-family: Lato;
  font-style: normal;
  font-weight: normal;
  font-size: 30px;
  line-height: 36px;
  color: #178cff;
`;

const EmailIcon = styled.div`
  width: 32px;
  height: 32px;
  background: url(email-icon.svg);
  margin-right: 13px;
  background-repeat: no-repeat;
`;

const EmailLinkText = styled.a`
  text-decoration: none;
  color: inherit;
  border-bottom: 1px solid #178cff;
`;

const EmailLink = ({ email }) => {
  return (
    <EmailLinkContainer>
      <EmailIcon />
      <EmailLinkText href={`mailto:${email}`}>{email}</EmailLinkText>
    </EmailLinkContainer>
  );
};

export default EmailLink;

import React from "react";
import styled from "styled-components";

import { NAV_HEIGHT } from "../../components/Nav";
import { ArrowDown as DefaultArrowDown } from "../../components/Arrow";
import { DesktopOnly, media } from "../../breakpoints";

const JumboContainer = styled.div`
  background: #cc0033 url(jumbo-bg.png) no-repeat;
  background-size: cover;
  padding-bottom: 24px;
  margin-top: -${NAV_HEIGHT}px;
  padding-top: 240px;

  ${media.lessThan("desktop")`
    padding-top: 100px;
  `}
`;

const JumboInnerContainer = styled.div`
  padding: 0 128px;

  ${media.lessThan("desktop")`
    padding: 16px;
  `}
`;

const JumboTextContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 13px;
`;

const JumboLeftText = styled.h1`
  font-family: Lato;
  font-style: normal;
  font-weight: normal;
  font-size: 92px;
  line-height: 110px;
  color: #ffffff;
`;

const JumboRightText = styled.h1`
  font-family: Lato;
  font-style: normal;
  font-weight: normal;
  font-size: 66px;
  line-height: 79px;
  text-align: right;
  color: #ffffff;

  ${media.lessThan("desktop")`
    font-size: 24px;
    line-height: 29px;
    text-align: center;
  `}
`;

const ContactUsButton = styled.button`
  font-size: 19px;
  font-family: Lato;
  font-weight: 700;
  text-transform: uppercase;
  border: 4px solid white;
  padding: 13px 54px;
  color: white;
  background: none;
  margin-left: auto;
  display: block;
  margin-bottom: 79px;
`;

const BecomeAMember = styled.div`
  text-align: center;
  text-transform: uppercase;
  font-family: Lato;
  font-style: normal;
  font-weight: normal;
  font-size: 17px;
  line-height: 32px;
  margin-bottom: 38px;
  color: #ffffff;
`;

const ArrowDown = styled(DefaultArrowDown)`
  fill: rgba(255, 255, 255, 0.5);
  margin: 0 auto;
  display: block;
`;

const Jumbo = () => (
  <JumboContainer>
    <JumboInnerContainer>
      <JumboTextContainer>
        <DesktopOnly>
          <JumboLeftText>
            Hello! <br />
            Bonjour! <br />
            Namaste!
          </JumboLeftText>
        </DesktopOnly>
        <JumboRightText>
          Welcome to the <br />
          Rutgers University <br />
          Cognitive Science Club!
        </JumboRightText>
      </JumboTextContainer>
      {/*<DesktopOnly>
        <ContactUsButton>Contact Us</ContactUsButton>
      </DesktopOnly>*/}
    </JumboInnerContainer>
    <BecomeAMember>Become A Member</BecomeAMember>
    <DesktopOnly>
      <ArrowDown />
    </DesktopOnly>
  </JumboContainer>
);

export default Jumbo;

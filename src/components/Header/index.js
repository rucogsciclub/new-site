import styled from "styled-components";

const HeaderGroup = styled.div`
  padding: 128px 80px;
  background: #cc0033 url(jumbo-bg.png) no-repeat;
  background-size: cover;
  margin-top: -85px;
  padding-top: calc(69px + 85px);
`;

const Header = styled.div`
  font-family: Lato;
  font-style: normal;
  font-weight: bold;
  font-size: 55px;
  line-height: 66px;
  color: #ffffff;
`;

const Subheader = styled.div`
  font-family: Lato;
  font-style: normal;
  font-weight: 600;
  font-size: 36px;
  line-height: 140.62%;
  color: #ffffff;
`;

export { HeaderGroup, Header, Subheader };

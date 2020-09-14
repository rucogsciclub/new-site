import styled from "styled-components";

const PageTitle = styled.div`
  font-family: Lato;
  font-style: normal;
  font-weight: bold;
  font-size: 55px;
  line-height: 66px;
  color: ${(p) => (p.light ? "#FFFFFF" : "#000000")};
`;

export default PageTitle;

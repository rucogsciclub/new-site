import styled from "styled-components";
import { NAV_HEIGHT } from "../Nav";

const Page = styled.div`
  margin-top: -${NAV_HEIGHT}px;
  padding-top: ${NAV_HEIGHT}px;
`;

export default Page;

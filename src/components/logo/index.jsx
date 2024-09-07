import styled from "styled-components";
import { logoImage } from "../../assets/images";
const AppLogo = ({ useColored }) => {
  return (
    <LogoWrapper $useColored={useColored}>
      <img src={logoImage}  />
      <h3></h3>
    </LogoWrapper>
  );
};

export default AppLogo;

const LogoWrapper = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 8px;


  & > img {
    width: ${({ $useColored }) => ($useColored ? "160px" : "162px")};
    height: ${({ $useColored }) => ($useColored ? "60px" : "62px")};
  }
`;

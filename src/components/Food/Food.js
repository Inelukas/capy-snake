import styled from "styled-components";
import capybara from "../../assets/capybara.png";

const StyledFood = styled.div`
  position: absolute;
  top: ${({ $topcoor }) => $topcoor};
  left: ${({ $leftcoor }) => $leftcoor};
  z-index: 2;
`;

const StyledIconContainer = styled.div`
  display: grid;
  place-content: center;
  width: 30px;
  height: 30px;
`;

const StyledIcon = styled.img`
  width: 25px;
  height: 25px;
`;

export default function Food({ foodPosition }) {
  return (
    <StyledFood
      $topcoor={`${foodPosition.y}px`}
      $leftcoor={`${foodPosition.x}px`}
    >
      <StyledIconContainer>
        <StyledIcon src={capybara} alt="Capybara Food" />
      </StyledIconContainer>
    </StyledFood>
  );
}

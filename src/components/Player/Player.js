import { useEffect, useRef } from "react";
import styled from "styled-components";
import capybara from "../../assets/capybara.png";

const StyledPlayer = styled.div`
  position: absolute;
  top: ${({ $topcoor }) => $topcoor};
  left: ${({ $leftcoor }) => $leftcoor};
  font-size: 1.5rem;
  outline: none;
`;

const StyledIconContainer = styled.div`
  display: grid;
  place-content: center;
  width: 30px;
  height: 30px;
`;

const StyledIcon = styled.img`
  width: 35px;
  height: 35px;
  rotate: ${(props) => (props.gameOn ? "unset" : "calc(180deg)")};
`;

export default function Player({ onDirection, playerPosition, gameOn }) {
  const playerRef = useRef(null);

  useEffect(() => {
    if (playerRef.current) {
      playerRef.current.focus();
    }
  }, [playerPosition]);

  useEffect(() => {
    function handleBlur() {
      if (playerRef.current) {
        playerRef.current.focus();
      }
    }

    const playerElement = playerRef.current;
    if (playerElement) {
      playerElement.addEventListener("blur", handleBlur);
    }

    return () => {
      if (playerElement) {
        playerElement.removeEventListener("blur", handleBlur);
      }
    };
  }, []);

  return (
    <StyledPlayer
      ref={playerRef}
      tabIndex={0}
      onKeyDown={onDirection}
      $topcoor={`${playerPosition.y}px`}
      $leftcoor={`${playerPosition.x}px`}
    >
      <StyledIconContainer>
        <StyledIcon src={capybara} alt="Capybara" gameOn={gameOn} />
      </StyledIconContainer>
    </StyledPlayer>
  );
}

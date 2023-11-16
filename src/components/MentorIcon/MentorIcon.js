import React from 'react';
import styled from 'styled-components';

function MentorIcon() {
  return (
    <StyledSVG
      xmlns="http://www.w3.org/2000/svg"
      width="26"
      height="23"
    >
      <path
        fill="#FFF"
        d="M13.084.23a.751.751 0 00-.736.75v14.267a.75.75 0 101.5 0V.98a.75.75 0 00-.763-.75zM24.44 4.504a.752.752 0 00-.284.064l-6.44 2.875a.752.752 0 000 1.37l6.44 2.884a.75.75 0 00.612-1.369L19.861 8.13l4.907-2.191a.753.753 0 00.38-.99.752.752 0 00-.708-.444zM1.371 9.663a.752.752 0 00-.74.938C2.41 17.447 8.603 22.23 15.685 22.23a.75.75 0 100-1.501A14.053 14.053 0 012.083 10.225a.75.75 0 00-.712-.561v-.001z"
      ></path>
    </StyledSVG>
  );
}

const StyledSVG = styled.svg`
  &:hover {
    & > path {
      fill: var(--green);
    }
  }
`;

export default MentorIcon;

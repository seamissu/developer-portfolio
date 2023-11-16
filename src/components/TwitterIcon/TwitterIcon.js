import React from 'react';
import styled from 'styled-components';

function TwitterIcon() {
  return (
    <StyledSVG
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="20"
    >
      <path
        fill="#FFF"
        d="M23.492 2.705a9.563 9.563 0 01-2.742.751 4.788 4.788 0 002.1-2.643 9.536 9.536 0 01-3.033 1.159 4.778 4.778 0 00-8.14 4.357 13.564 13.564 0 01-9.844-4.99 4.774 4.774 0 00-.646 2.4 4.778 4.778 0 002.124 3.977 4.765 4.765 0 01-2.163-.598v.061a4.778 4.778 0 003.832 4.684 4.812 4.812 0 01-2.158.082 4.78 4.78 0 004.462 3.316 9.584 9.584 0 01-5.932 2.045 9.66 9.66 0 01-1.14-.067 13.508 13.508 0 007.32 2.146c8.787 0 13.59-7.277 13.59-13.589 0-.205-.004-.412-.013-.617a9.71 9.71 0 002.381-2.471l.002-.003z"
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

export default TwitterIcon;

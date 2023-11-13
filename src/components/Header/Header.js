import React from 'react';
import Image from 'next/image';

import styled from 'styled-components';

function Header() {
  return (
    <Wrapper>
      <Superheader>
        <Logo>adamkeyes</Logo>
        <div>four icons</div>
      </Superheader>
      <div class="hero">
        <h1>{"Nice to meet you! I'm Adam Keyes."}</h1>
        <p>
          {
            "Based in the UK, I'm a front-end developer passionate about building accessible web apps that users love."
          }
        </p>
        <a>Contact me </a>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.header`
  grid-area: header;
  background-color: var(--black);
  padding-left: 165px;
  padding-right: 165px;
`;

const Superheader = styled.nav`
  display: flex;
  justify-content: space-between;
`;

const Logo = styled.p`
  font-size: 32px;
  font-weight: var(--font-weight-bold);
  color: var(--white);
`;

export default Header;

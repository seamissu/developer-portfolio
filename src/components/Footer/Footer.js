import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';

import { QUERIES } from '@/app/constants';

function Footer() {
  return (
    <Wrapper>
      <Line />

      <SubFooter>
        <Logo>adamkeyes</Logo>
        <Imagewrapper>
          <Image
            src="/images/icon-github.svg"
            alt="github logo"
            width={25}
            height={24}
          />
          <Image
            src="/images/icon-frontend-mentor.svg"
            alt="frontend mentor logo"
            width={26}
            height={23}
          />
          <Image
            src="/images/icon-linkedin.svg"
            alt="linkedin logo"
            width={25}
            height={24}
          />

          <Image
            src="/images/icon-twitter.svg"
            alt="twitter logo"
            width={24}
            height={20}
          />
        </Imagewrapper>
      </SubFooter>
    </Wrapper>
  );
}

const Wrapper = styled.footer`
  grid-area: footer;
  background-color: var(--dark-gray);

  margin-left: -160px;
  margin-right: -160px;
  padding-left: 160px;
  padding-right: 160px;

  @media ${QUERIES.tabletAndDown} {
    margin-left: -30px;
    margin-right: -30px;
    padding-left: 30px;
    padding-right: 30px;
  }

  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1px 1fr;
  gap: 50px;
`;

const Line = styled.div`
  border-bottom: 1px solid var(--white);
`;

const SubFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 128px;
  position: relative;
  padding-right: 20px;
`;

const Logo = styled.p`
  font-size: 32px;
  font-weight: var(--font-weight-bold);
  color: var(--white);
`;

const Imagewrapper = styled.div`
  display: flex;
  gap: 30px;
  align-items: center;
`;

export default Footer;

import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';

import { QUERIES } from '@/app/constants';

import GithubIcon from '../GithubIcon';
import MentorIcon from '../MentorIcon';
import LinkedinIcon from '../LinkedinIcon';
import TwitterIcon from '../TwitterIcon';

function Footer() {
  return (
    <Wrapper>
      <Line />

      <SubFooter>
        <Logo>adamkeyes</Logo>
        <IconWrapper>
          <GithubIcon />
          <MentorIcon />
          <LinkedinIcon />
          <TwitterIcon />
        </IconWrapper>
      </SubFooter>
    </Wrapper>
  );
}

const Wrapper = styled.footer`
  grid-area: footer;
  background-color: var(--dark-gray);

  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1px 1fr;
  gap: 50px;

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

  @media ${QUERIES.mobileAndDown} {
    margin-left: -20px;
    margin-right: -20px;
    padding-left: 20px;
    padding-right: 20px;

    gap: 35px;
  }
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

  @media ${QUERIES.mobileAndDown} {
    justify-content: revert;
    flex-direction: column;
    padding-right: revert;
    gap: 20px;
  }
`;

const Logo = styled.p`
  font-size: 32px;
  font-weight: var(--font-weight-bold);
  color: var(--white);

  @media ${QUERIES.mobileAndDown} {
    font-size: 24px;
  }
`;

const IconWrapper = styled.div`
  display: flex;
  gap: 30px;
  align-items: center;
`;

export default Footer;

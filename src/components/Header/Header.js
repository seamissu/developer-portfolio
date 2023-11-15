import React from 'react';
import Image from 'next/image';

import styled from 'styled-components';
import { QUERIES } from '@/app/constants';

function Header({ executeScroll }) {
  return (
    <Wrapper>
      <Image
        className="profile desktop"
        src="/images/image-profile-desktop.webp"
        alt="profile image"
        height={720}
        width={445}
      />
      <Image
        className="profile tablet"
        src="/images/image-profile-tablet.webp"
        alt="profile image"
        height={600}
        width={322}
      />
      <Image
        className="profile mobile"
        src="/images/image-profile-mobile.webp"
        alt="profile image"
        height={383}
        width={174}
      />
      <Superheader>
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
      </Superheader>
      <Hero>
        <HelloHeading>
          {`Nice to`}
          <span>
            {` meet you! I'm`} <Namespan>Adam Keyes</Namespan>.
          </span>
        </HelloHeading>
        <Intro>
          {
            "Based in the UK, I'm a front-end developer passionate about building accessible web apps that users love."
          }
        </Intro>
        <Button onClick={executeScroll}>Contact me</Button>
      </Hero>
      <Image
        className="circle pattern"
        src="/images/pattern-circle.svg"
        alt="decorative pattern"
        width={129}
        height={129}
      />
      <Image
        className="rings header"
        src="/images/pattern-rings.svg"
        alt="decorative pattern"
        width={530}
        height={129}
      />
    </Wrapper>
  );
}

const Wrapper = styled.header`
  grid-area: header;
  background-color: var(--black);
  position: relative;
  border-bottom: 1px solid var(--white);
`;

const Superheader = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 128px;
  position: relative;
  padding-right: 20px;

  @media ${QUERIES.tabletAndDown} {
    margin-bottom: 90px;
    padding-right: revert;
  }

  @media ${QUERIES.mobileAndDown} {
    justify-content: revert;
    flex-direction: column;
    gap: 20px;
    margin-bottom: 310px;
  }
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

const Hero = styled.div`
  color: var(--white);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 60px;
  position: relative;

  @media ${QUERIES.tabletAndDown} {
    gap: 34px;
  }

  @media ${QUERIES.mobileAndDown} {
    gap: 24px;
    align-items: center;
  }
`;

const HelloHeading = styled.h1`
  font-size: var(--font-size-heading-extra-large);
  // font-size: 5.5vw;
  font-weight: var(--font-weight-bold);
  line-height: 88px;
  max-width: 750px;
  letter-spacing: -2.5px;

  @media ${QUERIES.tabletAndDown} {
    font-size: 72px;
    max-width: 440px;

    & > span {
      display: table;
    }
  }

  @media ${QUERIES.mobileAndDown} {
    font-size: 40px;
    line-height: 40px;
    text-align: center;
    max-width: 340px;

    & > span {
      display: revert;
    }
  }
`;

const Namespan = styled.span`
  border-bottom: 6px solid var(--green);

  @media ${QUERIES.mobileAndDown} {
    border-bottom: 4px solid var(--green);
  }
`;

const Intro = styled.p`
  font-size: var(--font-size-text-large);
  font-weight: var(--font-weight-medium);
  line-height: 28px;
  color: var(--gray);
  max-width: 450px;

  @media ${QUERIES.mobileAndDown} {
    font-size: var(--font-size-text-medium);
    line-height: 26px;
    text-align: center;
  }
`;

const Button = styled.button`
  font-size: var(--font-size-text-medium);
  font-weight: var(--font-weight-bold);
  color: var(--white);
  text-transform: uppercase;
  letter-spacing: 2px;

  border: none;
  padding: 0;
  background-color: transparent;
  border-bottom: 2px solid var(--green);

  &:hover {
    color: var(--green);
    cursor: pointer;
  }

  @media ${QUERIES.mobileAndDown} {
    padding-bottom: 6px;
  }
`;

export default Header;

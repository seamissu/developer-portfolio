import React from 'react';
import Image from 'next/image';

import styled from 'styled-components';

function Header() {
  return (
    <Wrapper>
      <Image
        style={{ position: 'absolute', top: '0px', right: '0px' }}
        src="/images/image-profile-desktop.webp"
        alt="profile image"
        height={720}
        width={445}
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
          {`Nice to meet you! I'm`} <Namespan>Adam Keyes</Namespan>.
        </HelloHeading>
        <Intro>
          {
            "Based in the UK, I'm a front-end developer passionate about building accessible web apps that users love."
          }
        </Intro>
        <Link href="/">Contact me</Link>
      </Hero>
      {/* <hr /> */}
    </Wrapper>
  );
}

const Wrapper = styled.header`
  grid-area: header;
  background-color: var(--black);
  /* padding-left: 160px;
  padding-right: 160px;
  padding-top: 40px; */
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
`;

const HelloHeading = styled.h1`
  font-size: var(--font-size-heading-extra-large);
  // font-size: 5.5vw;
  font-weight: var(--font-weight-bold);
  line-height: 88px;
  max-width: 750px;
  letter-spacing: -2.5px;
`;

const Namespan = styled.span`
  border-bottom: 6px solid var(--green);
`;

const Intro = styled.p`
  font-size: var(--font-size-text-large);
  font-weight: var(--font-weight-medium);
  line-height: 28px;
  color: var(--gray);
  max-width: 450px;
`;

const Link = styled.a`
  font-size: var(--font-size-text-medium);
  font-weight: var(--font-weight-bold);
  text-decoration: none;
  color: var(--white);
  text-transform: uppercase;
  border-bottom: 2px solid var(--green);
`;

export default Header;

import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';

import { QUERIES } from '@/app/constants';

function Experience() {
  return (
    <Wrapper>
      <article>
        <Heading>HTML</Heading>
        <Duration>4 Years Experience</Duration>
      </article>
      <article>
        <Heading>CSS</Heading>
        <Duration>4 Years Experience</Duration>
      </article>
      <article>
        <Heading>JavaScript</Heading>
        <Duration>4 Years Experience</Duration>
      </article>
      <article>
        <Heading>Accessibility</Heading>
        <Duration>4 Years Experience</Duration>
      </article>
      <article>
        <Heading>React</Heading>
        <Duration>3 Years Experience</Duration>
      </article>
      <article>
        <Heading>Sass</Heading>
        <Duration>3 Years Experience</Duration>
      </article>
      <Image
        className="rings experience"
        src="/images/pattern-rings.svg"
        alt="decorative pattern"
        width={530}
        height={129}
      />
    </Wrapper>
  );
}

const Wrapper = styled.section`
  grid-area: experience;
  background-color: var(--black);
  color: var(--white);

  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 1fr);

  @media ${QUERIES.tabletAndDown} {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(3, 1fr);
    gap: 50px 10px;
  }

  margin-top: 70px;
  margin-bottom: 80px;
  position: relative;

  @media ${QUERIES.mobileAndDown} {
    grid-template-columns: 1fr;
    grid-template-rows: repeat(6, 70px);
    justify-content: center;
    justify-items: center;
    gap: 24px;

    border-bottom: 1px solid var(--white);
  }
`;

const Heading = styled.h2`
  font-size: var(--font-size-heading-large);
  font-weight: var(--font-weight-bold);
  letter-spacing: -1.5px;

  @media ${QUERIES.tabletAndDown} {
    font-size: 40px;
  }

  @media ${QUERIES.mobileAndDown} {
    font-size: 32px;
    letter-spacing: -1px;
    text-align: center;
  }
`;

const Duration = styled.p`
  color: var(--gray);
  font-size: var(--font-size-text-large);
  font-weight: var(--font-weight-medium);

  @media ${QUERIES.mobileAndDown} {
    font-size: var(--font-size-text-medium);
    text-align: center;
  }
`;

export default Experience;

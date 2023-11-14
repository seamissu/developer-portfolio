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
    gap: 50px;
  }

  margin-top: 70px;
  margin-bottom: 80px;

  position: relative;
`;

const Heading = styled.h2`
  font-size: var(--font-size-heading-large);
  font-weight: var(--font-weight-bold);
  letter-spacing: -1.5px;
`;

const Duration = styled.p`
  color: var(--gray);
  font-size: var(--font-size-text-large);
  font-weight: var(--font-weight-medium);
`;

export default Experience;

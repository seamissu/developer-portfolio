'use client';

import Image from 'next/image';
import styled from 'styled-components';
import GlobalStyles from '@/components/GlobalStyles';

export default function Home() {
  return (
    <>
      <Wrapper>
        <header>header</header>
        <section>experience</section>
        <main>projects</main>
        <div>form</div>
        <footer>footer</footer>
      </Wrapper>

      <GlobalStyles />
    </>
  );
}

const Wrapper = styled.div`
  display: grid;
  min-height: 100%;
  grid-template-areas:
    'header'
    'experience'
    'projects'
    'form'
    'footer';
  grid-template-columns: 820px 320px 1800px 500px 180px;

  & > header,
  & > section,
  & > main,
  & > div,
  & > footer {
    border: 2px solid black;
  }

  & > header {
    grid-area: header;
  }
  & > section {
    grid-area: experience;
  }

  & > main {
    grid-area: projects;
  }

  & > div {
    grid-area: form;
  }

  & > footer {
    grid-area: footer;
  }
`;

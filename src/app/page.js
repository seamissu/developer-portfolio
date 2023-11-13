'use client';

import styled from 'styled-components';
import GlobalStyles from '@/components/GlobalStyles';

import Header from '@/components/Header';

export default function Home() {
  return (
    <>
      <Wrapper>
        <Header />
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
  grid-template-rows: 820px 320px 1800px 500px 180px;

  & > header,
  & > section,
  & > main,
  & > div,
  & > footer {
    border: 2px solid black;
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

'use client';

import styled from 'styled-components';
import GlobalStyles from '@/components/GlobalStyles';

import Header from '@/components/Header';
import Experience from '@/components/Experience';
import Project from '@/components/Project';

export default function Home() {
  return (
    <>
      <Wrapper>
        <Header />
        <Experience />
        <Project />
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
  background-color: var(--black);

  grid-template-areas:
    'header'
    'experience'
    'projects'
    'form'
    'footer';
  grid-template-rows: 820px 400px 1fr 500px 180px;

  padding-left: 160px;
  padding-right: 160px;
  padding-top: 40px;

  & > header {
    border: 2px solid red;
  }

  & > section {
    border: 2px solid green;
  }
  & > main {
    border: 2px solid deeppink;
  }

  & > div,
  & > footer {
    border: 2px solid black;
  }

  & > div {
    grid-area: form;
  }

  & > footer {
    grid-area: footer;
  }
`;

'use client';

import styled from 'styled-components';
import GlobalStyles from '@/components/GlobalStyles';

import Header from '@/components/Header';
import Experience from '@/components/Experience';
import Project from '@/components/Project';
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Wrapper>
        <Header />
        <Experience />
        <Project />
        <ContactForm />
        <Footer />
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

  & > div {
    border: 2px solid yellow;
  }

  & > footer {
    border: 2px solid navy;
  }
`;

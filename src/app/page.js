'use client';

import styled from 'styled-components';
import GlobalStyles from '@/components/GlobalStyles';
import React from 'react';

import Header from '@/components/Header';
import Experience from '@/components/Experience';
import Project from '@/components/Project';
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';

import { QUERIES } from './constants';

export default function Home() {
  const formRef = React.useRef(null);

  function executeScroll() {
    formRef.current.scrollIntoView({ behavior: 'smooth' });
  }

  return (
    <>
      <Wrapper>
        <Header executeScroll={executeScroll} />
        <Experience />
        <Project executeScroll={executeScroll} />
        <ContactForm formRef={formRef} />
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
  overflow: hidden;

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

  @media ${QUERIES.tabletAndDown} {
    padding-left: 30px;
    padding-right: 30px;
    padding-top: 30px;

    grid-template-rows: 650px 560px 1fr 750px 120px;
  }

  @media ${QUERIES.mobileAndDown} {
    padding-left: 16px;
    padding-right: 16px;
    padding-top: 20px;

    grid-template-rows: 720px 740px 1fr 680px 180px;
  }
`;

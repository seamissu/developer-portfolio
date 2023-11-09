'use client';

import Image from 'next/image';
import styled from 'styled-components';
import GlobalStyles from '@/components/GlobalStyles';

export default function Home() {
  return (
    <>
      <Wrapper>abc</Wrapper>
      <GlobalStyles />
    </>
  );
}

const Wrapper = styled.div`
  background-color: red;
`;

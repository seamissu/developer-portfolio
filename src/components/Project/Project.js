import React from 'react';
import Image from 'next/image';
import styled from 'styled-components';

import { QUERIES } from '@/app/constants';

function Project({ executeScroll }) {
  return (
    <Wrapper>
      <Title>
        <Heading>Projects</Heading>
        <Button onClick={executeScroll}>Contact me</Button>
      </Title>
      <ProjectGrid>
        <Article>
          <ImageWrapper>
            <Image
              style={{ width: '100%', height: 'auto' }}
              alt=""
              src="/images/thumbnail-project-1-large.webp"
              width={540}
              height={400}
            />
            <LinkPanel>
              <Link href="/">View project</Link>
              <Link href="/">View code</Link>
            </LinkPanel>
          </ImageWrapper>

          <Name>Design portfolio</Name>
          <Tags>
            <Tag>HTML</Tag>
            <Tag>CSS</Tag>
          </Tags>
          <Anchors>
            <Anchor href="/">View project</Anchor>
            <Anchor href="/">View code</Anchor>
          </Anchors>
        </Article>

        <Article>
          <ImageWrapper>
            <Image
              style={{ width: '100%', height: 'auto' }}
              alt=""
              src="/images/thumbnail-project-2-large.webp"
              width={540}
              height={400}
            />
            <LinkPanel>
              <Link href="/">View project</Link>
              <Link href="/">View code</Link>
            </LinkPanel>
          </ImageWrapper>
          <Name>E-learning landing page</Name>
          <Tags>
            <Tag>HTML</Tag>
            <Tag>CSS</Tag>
          </Tags>
          <Anchors>
            <Anchor href="/">View project</Anchor>
            <Anchor href="/">View code</Anchor>
          </Anchors>
        </Article>

        <Article>
          <ImageWrapper>
            <Image
              style={{ width: '100%', height: 'auto' }}
              alt=""
              src="/images/thumbnail-project-3-large.webp"
              width={540}
              height={400}
            />
            <LinkPanel>
              <Link href="/">View project</Link>
              <Link href="/">View code</Link>
            </LinkPanel>
          </ImageWrapper>
          <Name>Todo web app</Name>
          <Tags>
            <Tag>HTML</Tag>
            <Tag>CSS</Tag>
            <Tag>JavaScript</Tag>
          </Tags>
          <Anchors>
            <Anchor href="/">View project</Anchor>
            <Anchor href="/">View code</Anchor>
          </Anchors>
        </Article>

        <Article>
          <ImageWrapper>
            <Image
              style={{ width: '100%', height: 'auto' }}
              alt=""
              src="/images/thumbnail-project-4-large.webp"
              width={540}
              height={400}
            />
            <LinkPanel>
              <Link href="/">View project</Link>
              <Link href="/">View code</Link>
            </LinkPanel>
          </ImageWrapper>
          <Name>Entertainment web app</Name>
          <Tags>
            <Tag>HTML</Tag>
            <Tag>CSS</Tag>
            <Tag>JavaScript</Tag>
          </Tags>
          <Anchors>
            <Anchor href="/">View project</Anchor>
            <Anchor href="/">View code</Anchor>
          </Anchors>
        </Article>

        <Article>
          <ImageWrapper>
            <Image
              style={{ width: '100%', height: 'auto' }}
              alt=""
              src="/images/thumbnail-project-5-large.webp"
              width={540}
              height={400}
            />
            <LinkPanel>
              <Link href="/">View project</Link>
              <Link href="/">View code</Link>
            </LinkPanel>
          </ImageWrapper>
          <Name>Memory Game</Name>
          <Tags>
            <Tag>HTML</Tag>
            <Tag>CSS</Tag>
            <Tag>JavaScript</Tag>
          </Tags>
          <Anchors>
            <Anchor href="/">View project</Anchor>
            <Anchor href="/">View code</Anchor>
          </Anchors>
        </Article>

        <Article>
          <ImageWrapper>
            <Image
              style={{ width: '100%', height: 'auto' }}
              alt=""
              src="/images/thumbnail-project-6-large.webp"
              width={540}
              height={400}
            />
            <LinkPanel>
              <Link href="/">View project</Link>
              <Link href="/">View code</Link>
            </LinkPanel>
          </ImageWrapper>
          <Name>Art gallery showcase</Name>
          <Tags>
            <Tag>HTML</Tag>
            <Tag>CSS</Tag>
            <Tag>JavaScript</Tag>
          </Tags>
          <Anchors>
            <Anchor href="/">View project</Anchor>
            <Anchor href="/">View code</Anchor>
          </Anchors>
        </Article>
      </ProjectGrid>
    </Wrapper>
  );
}

const Wrapper = styled.main`
  grid-area: projects;
  color: var(--white);
  display: grid;
  grid-template-areas:
    'heading'
    'project';
  grid-template-rows: 90px 1fr;
  gap: 80px;
  margin-bottom: 80px;

  @media ${QUERIES.mobileAndDown} {
    gap: 40px;
  }
`;

const Title = styled.div`
  grid-area: heading;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-content: center;
  align-items: center;
`;

const Heading = styled.h1`
  font-size: var(--font-size-heading-extra-large);
  font-weight: var(--font-weight-bold);
  letter-spacing: -2.5px;

  @media ${QUERIES.tabletAndDown} {
    font-size: 72px;
  }

  @media ${QUERIES.mobileAndDown} {
    font-size: 40px;
    line-height: 40px;
    letter-spacing: -1px;
  }
`;

const Button = styled.button`
  justify-self: end;

  font-size: var(--font-size-text-medium);
  font-weight: var(--font-weight-bold);
  text-transform: uppercase;
  letter-spacing: 2px;

  border: none;
  padding: 0;
  background: none;

  color: var(--white);
  border-bottom: 2px solid var(--green);

  &:hover {
    color: var(--green);
    cursor: pointer;
  }
`;

const ProjectGrid = styled.div`
  grid-area: project;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  gap: 24px 48px;

  @media ${QUERIES.tabletAndDown} {
    gap: 60px 20px;
  }

  @media ${QUERIES.mobileAndDown} {
    grid-template-columns: 1fr;
    grid-template-rows: repeat(6, 1fr);
    gap: 40px;
  }
`;

const Article = styled.article`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const ImageWrapper = styled.div`
  position: relative;

  @media (min-width: 1100px) {
    &:hover {
      & > img {
        opacity: 0.3;
      }

      & > div {
        display: revert;
        position: absolute;
        top: 0px;
        left: 0px;
        right: 0px;
        bottom: 0px;
        width: 160px;
        height: 160px;
        margin: auto;

        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 40px;
      }

      & > div > a {
        display: revert;
        text-align: center;
        letter-spacing: 2px;
      }
    }
  }
`;

const Name = styled.p`
  font-size: var(--font-size-heading-medium);
  font-weight: var(--font-weight-bold);
  text-transform: uppercase;
`;

const LinkPanel = styled.div`
  display: none;
`;

const Link = styled.a`
  display: none;
  text-decoration: none;
  font-size: var(--font-size-text-medium);
  font-weight: var(--font-weight-bold);
  text-transform: uppercase;
  border-bottom: 2px solid var(--green);
  color: var(--white);

  &:hover {
    color: var(--green);
  }
`;

const Anchors = styled.div`
  display: none;

  @media ${QUERIES.tabletAndDown} {
    display: block;
  }
`;

const Anchor = styled.a`
  display: none;
  text-decoration: none;
  font-size: var(--font-size-text-medium);
  font-weight: var(--font-weight-bold);
  text-transform: uppercase;
  border-bottom: 2px solid var(--green);
  color: var(--white);
  letter-spacing: 2px;
  padding-bottom: 6px;
  margin-right: 18px;
  line-height: 2.5;

  &:hover {
    color: var(--green);
  }

  @media ${QUERIES.tabletAndDown} {
    display: revert;
  }
`;

const Tags = styled.ul`
  list-style-type: none;
  padding: 0;
  line-height: 1;
`;

const Tag = styled.li`
  display: inline;
  margin-right: 18px;
  font-size: var(--font-size-text-large);
  font-weight: var(--font-weight-medium);
  color: var(--gray);
  text-transform: uppercase;
`;
export default Project;

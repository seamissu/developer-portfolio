import React from 'react';
import Image from 'next/image';
import styled from 'styled-components';

function Project() {
  return (
    <Wrapper>
      <Title>
        <Heading>Projects</Heading>
        <Button>Contact me</Button>
      </Title>
      <ProjectGrid>
        <Article>
          <Image
            style={{ width: '100%', height: 'auto' }}
            alt=""
            src="/images/thumbnail-project-1-large.webp"
            width={540}
            height={400}
          />
          <Name>Design portfolio</Name>
          <Tags>
            <Tag>HTML</Tag>
            <Tag>CSS</Tag>
          </Tags>
          <Link>View project</Link>
          <Link>View code</Link>
        </Article>

        <Article>
          <Image
            style={{ width: '100%', height: 'auto' }}
            alt=""
            src="/images/thumbnail-project-2-large.webp"
            width={540}
            height={400}
          />
          <Name>E-learning landing page</Name>
          <Tags>
            <Tag>HTML</Tag>
            <Tag>CSS</Tag>
          </Tags>
          <Link>View project</Link>
          <Link>View code</Link>
        </Article>

        <Article>
          <Image
            style={{ width: '100%', height: 'auto' }}
            alt=""
            src="/images/thumbnail-project-3-large.webp"
            width={540}
            height={400}
          />
          <Name>Todo web app</Name>
          <Tags>
            <Tag>HTML</Tag>
            <Tag>CSS</Tag>
            <Tag>JavaScript</Tag>
          </Tags>
          <Link>View project</Link>
          <Link>View code</Link>
        </Article>

        <Article>
          <Image
            style={{ width: '100%', height: 'auto' }}
            alt=""
            src="/images/thumbnail-project-4-large.webp"
            width={540}
            height={400}
          />
          <Name>Entertainment web app</Name>
          <Tags>
            <Tag>HTML</Tag>
            <Tag>CSS</Tag>
            <Tag>JavaScript</Tag>
          </Tags>
          <Link>View project</Link>
          <Link>View code</Link>
        </Article>

        <Article>
          <Image
            style={{ width: '100%', height: 'auto' }}
            alt=""
            src="/images/thumbnail-project-5-large.webp"
            width={540}
            height={400}
          />
          <Name>Memory Game</Name>
          <Tags>
            <Tag>HTML</Tag>
            <Tag>CSS</Tag>
            <Tag>JavaScript</Tag>
          </Tags>
          <Link>View project</Link>
          <Link>View code</Link>
        </Article>

        <Article>
          <Image
            style={{ width: '100%', height: 'auto' }}
            alt=""
            src="/images/thumbnail-project-6-large.webp"
            width={540}
            height={400}
          />
          <Name>Art gallery showcase</Name>
          <Tags>
            <Tag>HTML</Tag>
            <Tag>CSS</Tag>
            <Tag>JavaScript</Tag>
          </Tags>
          <Link>View project</Link>
          <Link>View code</Link>
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
`;

const ProjectGrid = styled.div`
  grid-area: project;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  gap: 24px 48px;
`;

const Article = styled.article`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const Name = styled.p`
  font-size: var(--font-size-heading-medium);
  font-weight: var(--font-weight-bold);
  text-transform: uppercase;
`;

const Link = styled.a`
  display: none;
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

import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';

import { QUERIES } from '@/app/constants';

function ContactForm() {
  return (
    <Wrapper>
      <ContactInfo>
        <Heading>Contact</Heading>
        <Prompt>
          I would love to hear about your project and how I could
          help. Please fill in the form, and I’ll get back to you as
          soon as possible.
        </Prompt>
      </ContactInfo>
      <Form>
        <Label>
          Name
          <Input required={true} type="text" />
        </Label>
        <Label>
          Email
          <Input required={true} type="email" />
        </Label>
        <Label>
          Message
          <Input required={true} type="text" />
        </Label>
        <Button>Send message</Button>
      </Form>
      <Image
        className="rings contactform"
        src="/images/pattern-rings.svg"
        alt="decorative pattern"
        width={530}
        height={129}
      />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  grid-area: form;
  background-color: var(--dark-gray);

  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr;
  align-content: center;

  padding-top: 50px;
  gap: 110px;

  margin-left: -160px;
  margin-right: -160px;
  padding-left: 160px;
  padding-right: 160px;

  @media ${QUERIES.tabletAndDown} {
    margin-left: -30px;
    margin-right: -30px;
    padding-left: 140px;
    padding-right: 140px;

    grid-template-columns: 1fr;
    grid-template-rows: 220px 1fr;
    gap: 10px;
    align-content: revert;
  }

  @media ${QUERIES.mobileAndDown} {
    margin-left: -20px;
    margin-right: -20px;
    padding-left: 20px;
    padding-right: 20px;
    grid-template-columns: 1fr;
    grid-template-rows: 190px 1fr;
    gap: 0px;
  }

  position: relative;
`;

const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;

  @media ${QUERIES.tabletAndDown} {
    align-items: center;
  }

  @media ${QUERIES.mobileAndDown} {
    gap: 20px;
  }
`;

const Heading = styled.h1`
  font-size: var(--font-size-heading-extra-large);
  font-weight: var(--font-weight-bold);
  color: var(--white);
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

const Prompt = styled.p`
  font-size: var(--font-size-text-large);
  font-weight: var(--font-weight-medium);
  color: var(--gray);
  line-height: 28px;
  max-width: 445px;

  @media ${QUERIES.tabletAndDown} {
    text-align: center;
  }

  @media ${QUERIES.mobileAndDown} {
    font-size: var(--font-size-text-medium);
    line-height: 26px;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 40px;
  padding-top: 30px;

  @media ${QUERIES.mobileAndDown} {
    padding-top: 0px;
  }
`;

const Label = styled.label`
  display: block;
  color: var(--white);
  font-size: var(--font-size-text-medium);
  font-weight: var(--font-weight-medium);
  text-transform: uppercase;
  padding-left: 20px;
  border-bottom: 1px solid var(--white);

  &:last-of-type > input {
    line-height: 5;
  }
`;

const Input = styled.input`
  border: none;
  padding: 0;
  background: none;
  width: 100%;

  color: var(--white);

  margin-left: -20px;
`;

const Button = styled.button`
  align-self: flex-end;

  padding: 0;
  background: none;
  border: none;

  color: var(--white);
  font-size: var(--font-size-text-medium);
  font-weight: var(--font-weight-bold);
  text-transform: uppercase;
  letter-spacing: 2px;
  border-bottom: 2px solid var(--green);
  padding-bottom: 6px;

  &:hover {
    color: var(--green);
    cursor: pointer;
  }
`;

export default ContactForm;

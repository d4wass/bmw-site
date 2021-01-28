import React, { useState, useRef, useEffect } from 'react';
import styled, { css } from 'styled-components';
import FormImage from 'components/molecules/Form/FormImage';
import FormSectionContent from 'components/molecules/Form/FormSectionContent';
import Form from 'components/molecules/Form/Form';
import ThanksInfo from 'components/molecules/ThanksInfo';
import Title from 'components/atoms/Title';
import gsap from 'gsap';

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: ${({ formStyle }) => (formStyle ? '0 10vw' : '0')};

  @media ${({ theme }) => theme.breakpoints.tablet} {
    flex-direction: row-reverse;
    justify-content: center;
    padding: 180px 0;
    position: relative;

    ${({ formStyle }) =>
      formStyle &&
      css`
        background-color: #fff;
        flex-direction: column;
        padding: 90px;
        box-shadow: 3px 3px 60px rgba(0, 0, 0, 0.1);
        max-width: 50vw;
        position: relative;
        z-index: 2;
      `}
  }

  @media ${({ theme }) => theme.breakpoints.desktop} {
    ${({ formStyle }) =>
      formStyle &&
      css`
        max-width: 42vw;
      `}
  }
`;

const FromSection = () => {
  const [isSend, setSend] = useState(false);
  const wrapper = useRef(null);

  useEffect(() => {
    const elements = [...wrapper.current.childNodes].filter((items) => items.id !== 'form');

    gsap.set([elements.filter((items) => items.id !== 'form')], { autoAlpha: 0 });
    const tl = gsap.timeline({
      defaults: { ease: 'power3.inOut' },
      scrollTrigger: {
        trigger: wrapper.current,
        toggleActions: 'play none none reverse',
      },
    });

    tl.fromTo(elements, { autoAlpha: 0 }, { duration: 1, autoAlpha: 1, stagger: 0.2, delay: 3.5 });
  });

  const handleSend = () => {
    setSend(!isSend);

    if (isSend) {
      document.body.style.overflow = 'auto';
      document.body.style.position = 'static';
    } else {
      document.body.style.overflow = 'hidden';
    }
  };

  return (
    <>
      {isSend && <ThanksInfo handleClose={handleSend} />}
      <StyledWrapper className="form-section" ref={wrapper}>
        <FormImage />
        <StyledWrapper formStyle id="form">
          <FormSectionContent />
          <Title formStyle>Wypełnij formularz swoimi danymi.</Title>
          <Form handleSend={handleSend} />
        </StyledWrapper>
        <FormImage second />
      </StyledWrapper>
    </>
  );
};

export default FromSection;

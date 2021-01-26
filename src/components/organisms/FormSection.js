import React, { useState, useRef, useEffect } from 'react';
import styled, { css } from 'styled-components';
import FormImage from 'components/molecules/Form/FormImage';
import FormSectionContent from 'components/molecules/Form/FormSectionContent';
import Form from 'components/molecules/Form/Form';
import ThanksInfo from 'components/molecules/ThanksInfo';
import gsap from 'gsap';

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: ${({ form }) => (form ? '0' : '60px 32px')};

  @media ${({ theme }) => theme.breakpoints.desktop} {
    flex-direction: row-reverse;
    justify-content: center;
    padding: 180px 0;
    position: relative;

    ${({ form }) =>
      form &&
      css`
        background-color: #fff;
        flex-direction: column;
        padding: 90px;
        box-shadow: 3px 3px 60px rgba(0, 0, 0, 0.1);
        max-width: 42vw;
        position: relative;
        z-index: 2;
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
    <StyledWrapper className="form-section" ref={wrapper}>
      {isSend && <ThanksInfo handleClose={handleSend} />}
      <FormImage />
      <StyledWrapper form id="form">
        <FormSectionContent />
        <Form handleSend={handleSend} />
      </StyledWrapper>
      <FormImage second />
    </StyledWrapper>
  );
};

export default FromSection;

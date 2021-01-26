import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import Title from 'components/atoms/Title';
import SubTitle from 'components/atoms/SubTitle';
import ILogo from 'assets/bmw_i_logo@2x.png';
import Button from 'components/atoms/Button';
import gsap from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';

gsap.registerPlugin(ScrollToPlugin);

const StyledButtonWrapper = styled.div`
  align-self: center;
`;

const StyledWrapper = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  flex-direction: column;
  justify-content: space-around;
  padding: 5vh 10vw 0;
  position: absolute;
  z-index: 2;

  @media ${({ theme }) => theme.breakpoints.desktop} {
    padding: 5vh 15vw 0;
  }
`;

const StyledWrapperInner = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  height: 40%;
`;

const StyledImage = styled.img`
  max-height: 15%;
  width: 15%;
  margin-bottom: 20px;

  @media ${({ theme }) => theme.breakpoints.desktop} {
    height: 13%;
    width: 8%;
  }
`;

const StyledButton = styled(Button)`
  @media ${({ theme }) => theme.breakpoints.desktop} {
    max-width: 372px;
    width: 100%;
    height: 63px;
    font-size: 1.8rem;
    padding: 15px 90px;
  }
`;

const StyledTitle = styled(Title)`
  opacity: 0;
`;

const StyledSubTitle = styled(SubTitle)`
  opacity: 0;
`;

const HeaderContent = () => {
  const title = useRef(null);
  const subtitle = useRef(null);

  gsap.set(title.current, { autoAlpha: 0 });
  const tl = gsap.timeline({ defaults: { ease: 'power3.easeOut' } });

  useEffect(() => {
    tl.to(title.current, { autoAlpha: 1, y: -20, duration: 0.7 });
    tl.to(subtitle.current, { autoAlpha: 1, y: -20, duration: 1 });
  });

  const handleClick = () => {
    tl.to(window, { duration: 0.5, scrollTo: { y: '#form' } });
  };

  return (
    <StyledWrapper>
      <StyledWrapperInner>
        <StyledImage src={ILogo} />
        <StyledTitle ref={title} header>
          Nowe BMW iX
        </StyledTitle>
        <StyledSubTitle ref={subtitle} header>
          Pionier nowej ery.
        </StyledSubTitle>
      </StyledWrapperInner>
      <StyledButtonWrapper>
        <StyledButton header onClick={handleClick}>
          Umów jazdę próbną
        </StyledButton>
      </StyledButtonWrapper>
    </StyledWrapper>
  );
};

export default HeaderContent;

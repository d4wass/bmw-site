import React, { useState, useEffect } from 'react';
import styled, { css } from 'styled-components';
import Hamburger from 'components/atoms/Hamburger';
import Logo from 'assets/BMW-logo@2x.png';
import Title from 'components/atoms/Title';
import Button from 'components/atoms/Button';
import gsap from 'gsap';

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  z-index: 1;
  align-items: center;
  width: 100%;

  @media ${({ theme }) => theme.breakpoints.desktop} {
    padding: 5vh 15vw 0;
  }
`;

const StyledContentWrapper = styled.div`
  display: ${({ navSubtitle }) => (navSubtitle ? 'none' : 'flex')};
  width: 100%;
  height: 12vh;
  padding: 3vh 10vw;

  ${({ navContent }) =>
    navContent &&
    css`
      align-items: center;
      justify-content: space-between;
    `}

  @media ${({ theme }) => theme.breakpoints.desktop} {
    display: flex;
    padding: 0;
    height: 6vh;
    width: 100%;
    flex-direction: ${({ navContent }) => (navContent ? 'row-reverse' : 'row')};
    justify-content: ${({ navSubtitle }) => (navSubtitle ? 'flex-end' : null)};
  }
`;

const StyledTitle = styled(Title)`
  @media ${({ theme }) => theme.breakpoints.desktop} {
    width: 110px;
    font-size: 1.6rem;
    padding: 0;
    text-transform: capitalize;
    margin-right: 10%;
  }
`;

const StyledLogo = styled.img`
  position: ${({ isActive }) => (isActive ? 'fixed' : 'absolute')};
  z-index: 1;
  height: 100%;
  max-height: 6vh;
  right: 10%;

  @media ${({ theme }) => theme.breakpoints.desktop} {
    height: 100%;
    position: static;
  }
`;

const StyledList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 20% 15% 0;
  visibility: ${({ isVisible }) => (isVisible ? 'visible' : 'hidden')};
  transition: visibility 0.3s 0.1s ease-in-out;
  height: 70%;

  @media ${({ theme }) => theme.breakpoints.desktop} {
    visibility: visible;
    width: 95%;
    height: 100%;
    flex-direction: row;
    justify-content: flex-start;
    margin: 0;
  }
`;

const StyledButton = styled(Button)`
  margin: 0 auto;
`;

const StyledListItem = styled.li`
  padding: 12% 0;
  list-style: none;
  margin-bottom: 12%;
  width: 100%;
  display: flex;
  justify-content: center;
  border-bottom: 1px solid #343434;

  @media ${({ theme }) => theme.breakpoints.desktop} {
    padding: 0 5% 0 0;
    display: block;
    margin-bottom: 0;
    justify-content: flex-start;
    border: none;
    width: auto;
  }
`;

const StyledListItemLink = styled.a`
  text-decoration: none;
  font-size: 1.6rem;
  color: #fff;
  font-weight: ${({ theme }) => theme.font.weight.semiBold};
  transition: all 0.3s ease-in-out;
  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.colors.blue};
  }

  @media ${({ theme }) => theme.breakpoints.desktop} {
    width: 100%;
  }
`;

const StyledListWrapper = styled.nav`
  height: 100vh;
  width: 100vw;
  background-color: hsla(0, 0%, 0%, 1);
  position: ${({ isActive }) => (isActive ? 'fixed' : 'absolute')};
  z-index: 0;
  top: 0;
  left: 0;
  transform: translateY(-100vh);
  transition: all 0.3s 0.1s ease-in-out;

  @media ${({ theme }) => theme.breakpoints.desktop} {
    background-color: transparent;
    height: 100%;
    width: 100%;
    position: static;
    transform: none;
    border-bottom: 1px solid rgba(255, 255, 255, 0.5);
    margin-right: 5%;
  }

  ${({ isActive }) =>
    isActive &&
    css`
      transform: translateY(0);
    `}
`;

const Navigation = () => {
  const [isVisible, setVisible] = useState(false);
  const [isDesktop, setDesktop] = useState(window.innerWidth > 1450);
  const tl = gsap.timeline({ defaults: { ease: 'power3.easeOut' } });

  const clickFn = () => setVisible(!isVisible);

  const updateWidth = () => {
    setDesktop(window.innerWidth > 1450);
  };

  useEffect(() => {
    window.addEventListener('resize', updateWidth);
    return () => window.removeEventListener('resize', updateWidth);
  });

  const handleClick = (section) => {
    tl.to(window, { duration: 0.5, scrollTo: { y: `#${section}` } });
    if (!isDesktop) {
      setVisible(false);
    }
  };

  return (
    <StyledWrapper>
      <StyledContentWrapper navContent>
        <StyledLogo src={Logo} />
        <Hamburger handleClick={clickFn} isActive={isVisible} />
        <StyledListWrapper isActive={isVisible}>
          <StyledList isVisible={isVisible}>
            <StyledListItem>
              <StyledListItemLink onClick={() => handleClick('about')}>
                Nowe BMW iX
              </StyledListItemLink>
            </StyledListItem>
            <StyledListItem>
              <StyledListItemLink onClick={() => handleClick('aero')}>
                {!isDesktop ? 'INNOWACYJNA AERODYNAMIKA' : 'Innowacyjna Areodynamika'}
              </StyledListItemLink>
            </StyledListItem>
            {!isDesktop && (
              <StyledListItem>
                <StyledListItemLink onClick={() => handleClick('gallery')}>
                  GALERIA
                </StyledListItemLink>
              </StyledListItem>
            )}
          </StyledList>
          {!isDesktop && (
            <StyledButton onClick={() => handleClick('form')}>Umów jazdę próbną</StyledButton>
          )}
        </StyledListWrapper>
      </StyledContentWrapper>
      <StyledContentWrapper navSubtitle>
        <StyledTitle header>Radość z Jazdy</StyledTitle>
      </StyledContentWrapper>
    </StyledWrapper>
  );
};

export default Navigation;

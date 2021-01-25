import React from 'react';
import styled from 'styled-components';
import Navbar from 'components/molecules/Header/Navbar';
import bg from 'assets/image/slider1.png';
import bgDesktop from 'assets/image/bg-desktop.png';
import HeaderContent from 'components/molecules/Header/HeaderContent';

const StyledWrapper = styled.div`
  display: flex;
  height: 100vh;
  flex-direction: column;
  padding: 0 32px;
  background-image: url(${bg});
  background-repeat: no-repeat;
  background-size: cover;

  @media ${({ theme }) => theme.breakpoints.desktop} {
    background-image: url(${bgDesktop});
    padding: 0 280px;
  }
`;

const HeaderSection = () => (
  <header>
    <Navbar />
    <StyledWrapper>
      <HeaderContent />
    </StyledWrapper>
  </header>
);

export default HeaderSection;

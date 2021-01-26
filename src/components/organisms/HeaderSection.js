import React from 'react';
import styled from 'styled-components';
import Navigation from 'components/molecules/Navigation';
import Slider from './Slider';

const StyledWrapper = styled.div`
  display: flex;
  height: 100vh;
  flex-direction: column;

  @media ${({ theme }) => theme.breakpoints.desktop} {
    padding: 0;
  }
`;

const HeaderSection = () => (
  <header>
    <Navigation />
    <StyledWrapper>
      <Slider />
    </StyledWrapper>
  </header>
);

export default HeaderSection;

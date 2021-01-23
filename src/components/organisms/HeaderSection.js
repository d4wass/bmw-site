import React from 'react';
import styled from 'styled-components';
import Button from 'components/atoms/Button';
import Navbar from 'components/molecules/Header/Navbar';
import bg from 'assets/image/slider1.png';
import HeadingTitle from 'components/molecules/Header/HeadingTitle';

const StyledWrapper = styled.div`
  display: flex;
  height: 100vh;
  flex-direction: column;
  padding: 0 32px;
  background-image: url(${bg});
  background-repeat: no-repeat;
  background-size: cover;
`;

const StyledButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

const HeaderSection = () => (
  <header>
    <Navbar />
    <StyledWrapper>
      <HeadingTitle />
      <StyledButtonWrapper>
        <Button>Umów jazdę próbną</Button>
      </StyledButtonWrapper>
    </StyledWrapper>
  </header>
);

export default HeaderSection;

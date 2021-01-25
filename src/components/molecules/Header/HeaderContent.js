import React from 'react';
import styled from 'styled-components';
import Title from 'components/atoms/Title';
import SubTitle from 'components/atoms/SubTitle';
import ILogo from 'assets/bmw_i_logo@2x.png';
import Button from 'components/atoms/Button';

const StyledButtonWrapper = styled.div`
  align-self: center;
`;

const StyledWrapper = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: space-around;
  padding-top: 80px;
`;

const StyledImage = styled.img`
  max-height: 32px;
  width: 60px;

  @media ${({ theme }) => theme.breakpoints.desktop} {
    max-height: 48px;
    width: 90px;
  }
`;

const StyledButton = styled(Button)`
  @media ${({ theme }) => theme.breakpoints.desktop} {
    max-width: 372px;
    width: 372px;
    height: 63px;
    font-size: 1.8rem;
    padding: 15px 90px;
  }
`;

const HeaderContent = () => (
  <StyledWrapper>
    <div>
      <StyledImage src={ILogo} />
      <Title header>Nowe BMW iX</Title>
      <SubTitle header>Pionier nowej ery.</SubTitle>
    </div>
    <StyledButtonWrapper>
      <StyledButton>Umów jazdę próbną</StyledButton>
    </StyledButtonWrapper>
  </StyledWrapper>
);

export default HeaderContent;

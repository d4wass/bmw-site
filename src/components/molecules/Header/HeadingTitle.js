import React from 'react';
import styled from 'styled-components';
import Title from 'components/atoms/Title';
import SubTitle from 'components/atoms/SubTitle';
import { ReactComponent as ILogo } from 'assets/bmw_i_logo.svg';

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 50vw;
  margin: 76px 0 224px 0;
`;

const HeadingTitle = () => (
  <StyledWrapper>
    <ILogo />
    <Title header>Nowe BMW iX</Title>
    <SubTitle header>Pionier nowej ery</SubTitle>
  </StyledWrapper>
);

export default HeadingTitle;

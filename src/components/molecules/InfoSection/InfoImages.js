import React from 'react';
import styled, { css } from 'styled-components';
import firstImage from 'assets/image/foto1_1@2x.png';
import secondImage from 'assets/image/foto1_2@2x.png';

const StyledWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 60px;
  height: 330px;
`;

const StyledImageWrapper = styled.div`
  background-image: ${({ image }) => `url(${image})`};
  background-repeat: no-repeat;

  ${({ first }) =>
    first &&
    css`
      height: 110px;
      width: 30vw;
      background-size: cover;
      align-self: flex-end;
    `}

  ${({ second }) =>
    second &&
    css`
      height: 240px;
      width: 70vw;
      margin-left: 10px;
      background-size: cover;
    `}
`;

const InfoImages = () => (
  <StyledWrapper>
    <StyledImageWrapper image={firstImage} first />
    <StyledImageWrapper image={secondImage} second />
  </StyledWrapper>
);

export default InfoImages;

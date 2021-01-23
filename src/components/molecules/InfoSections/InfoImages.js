import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import firstImage from 'assets/image/foto1_1@2x.png';
import secondImage from 'assets/image/foto1_2@2x.png';
import thirdImage from 'assets/image/foto2_1@2x.png';
import fourthImage from 'assets/image/foto2_2@2x.png';

const StyledWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: ${({ reverse }) => (reverse ? '0 0 60px 0' : '60px 0 0 0')};
  height: 330px;
`;

const StyledImageWrapper = styled.div`
  background-image: ${({ image }) => `url(${image})`};
  background-repeat: no-repeat;

  ${({ first }) =>
    first &&
    css`
      height: ${({ reverse }) => (reverse ? '240px' : '110px')};
      width: ${({ reverse }) => (reverse ? '70vw' : '30vw')};
      background-size: cover;
      align-self: flex-end;
    `}

  ${({ second }) =>
    second &&
    css`
      height: ${({ reverse }) => (reverse ? '110px' : '240px')};
      width: ${({ reverse }) => (reverse ? '30vw' : '70vw')};
      margin-left: 10px;
      background-size: cover;
    `}
`;

const InfoImages = ({ reverse }) => (
  <StyledWrapper reverse={reverse}>
    <StyledImageWrapper image={reverse ? thirdImage : firstImage} reverse={reverse} first />
    <StyledImageWrapper image={reverse ? fourthImage : secondImage} reverse={reverse} second />
  </StyledWrapper>
);

InfoImages.propTypes = {
  reverse: PropTypes.bool,
};

InfoImages.defaultProps = {
  reverse: false,
};

export default InfoImages;

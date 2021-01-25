import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import firstImage from 'assets/image/foto1_1@2x.png';
import firstImageDesk from 'assets/image/foto1_1@2x_Desk.png';
import secondImage from 'assets/image/foto1_2@2x.png';
import secondImageDesk from 'assets/image/foto1_2@2x_Desk.png';
import thirdImage from 'assets/image/foto2_1@2x.png';
import thirdImageDesk from 'assets/image/foto2_1@2x_Desk.png';
import fourthImage from 'assets/image/foto2_2@2x.png';
import fourthImageDesk from 'assets/image/foto2_2@2x_Desk.png';

const StyledWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  height: 270px;
  margin-bottom: ${({ reverse }) => reverse && '60px'};

  @media ${({ theme }) => theme.breakpoints.desktop} {
    height: 626px;
    flex-direction: row;
  }
`;

const StyledImageWrapper = styled.div`
  background-image: ${({ image }) => `url(${image})`};
  background-repeat: no-repeat;

  @media ${({ theme }) => theme.breakpoints.desktop} {
    background-image: ${({ imageDesk }) => `url(${imageDesk})`};

    ${({ first }) =>
      first &&
      css`
        height: ${({ reverse }) => (reverse ? '536px' : '320px')};
        width: ${({ reverse }) => (reverse ? '536px' : '320px')};
        background-size: cover;
        align-self: flex-end;
      `}

    ${({ second }) =>
      second &&
      css`
        height: ${({ reverse }) => (reverse ? '320px' : '536px')};
        width: ${({ reverse }) => (reverse ? '320px' : '536px')};
        margin-left: 10px;
        background-size: cover;
      `}
  }

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
    <StyledImageWrapper
      image={reverse ? thirdImage : firstImage}
      imageDesk={reverse ? thirdImageDesk : firstImageDesk}
      reverse={reverse}
      first
    />
    <StyledImageWrapper
      image={reverse ? fourthImage : secondImage}
      imageDesk={reverse ? fourthImageDesk : secondImageDesk}
      reverse={reverse}
      second
    />
  </StyledWrapper>
);

InfoImages.propTypes = {
  reverse: PropTypes.bool,
};

InfoImages.defaultProps = {
  reverse: false,
};

export default InfoImages;

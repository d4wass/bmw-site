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
  height: 40vh;
  width: 100%;
  margin-bottom: ${({ reverse }) => reverse && '60px'};

  @media ${({ theme }) => theme.breakpoints.tablet} {
    height: 90vh;
  }

  @media ${({ theme }) => theme.breakpoints.desktop} {
    height: 65%;
    flex-direction: row;
    padding-right: 80px;
  }
`;

const StyledImageWrapper = styled.div`
  background-image: ${({ image }) => `url(${image})`};
  background-repeat: no-repeat;
  background-position: 50% 50%;

  @media ${({ theme }) => theme.breakpoints.tablet} {
    ${({ first }) =>
      first &&
      css`
        height: ${({ reverse }) => (reverse ? '550px' : '360px')};
        width: ${({ reverse }) => (reverse ? '65vw' : '35vw')};
        background-size: cover;
        align-self: flex-end;
      `}

    ${({ second }) =>
      second &&
      css`
        height: ${({ reverse }) => (reverse ? '360px' : '550px')};
        width: ${({ reverse }) => (reverse ? '35vw' : '65vw')};
        margin-left: 10px;
        background-size: cover;
      `}
  }

  @media ${({ theme }) => theme.breakpoints.desktop} {
    background-image: ${({ imageDesk }) => `url(${imageDesk})`};

    ${({ first }) =>
      first &&
      css`
        height: ${({ reverse }) => (reverse ? '80%' : '50%')};
        width: ${({ reverse }) => (reverse ? '80%' : '50%')};
        background-size: cover;
        align-self: flex-end;
      `}

    ${({ second }) =>
      second &&
      css`
        height: ${({ reverse }) => (reverse ? '50%' : '80%')};
        width: ${({ reverse }) => (reverse ? '50%' : '80%')};
        margin-left: 10px;
        background-size: cover;
      `}
  }

  ${({ first }) =>
    first &&
    css`
      height: ${({ reverse }) => (reverse ? '240px' : '110px')};
      width: ${({ reverse }) => (reverse ? '60vw' : '40vw')};
      background-size: cover;
      align-self: flex-end;
    `}

  ${({ second }) =>
    second &&
    css`
      height: ${({ reverse }) => (reverse ? '110px' : '240px')};
      width: ${({ reverse }) => (reverse ? '40vw' : '60vw')};
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

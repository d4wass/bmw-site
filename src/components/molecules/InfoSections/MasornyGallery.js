import React from 'react';
import styled, { css } from 'styled-components';
import imageGallery from 'assets/image/gallery/imageGallery.png';
import imageGallery1 from 'assets/image/gallery/imageGallery1.png';
import imageGallery2 from 'assets/image/gallery/imageGallery2.png';
import imageGallery3 from 'assets/image/gallery/imageGallery3.png';
import imageGallery4 from 'assets/image/gallery/imageGallery4.png';

const StyledGridWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
  grid-gap: 5px;
  grid-auto-rows: minmax(115px, auto);
  grid-auto-flow: row dense;
  padding: 10px 10px 70px 10px;
`;

const StyledImage = styled.div`
  background-image: ${({ image }) => `url(${image})`};
  background-repeat: no-repeat;
  background-size: contain;

  ${({ span1 }) =>
    span1 &&
    css`
      grid-column-end: span 6;
      grid-row-end: span 2;
    `}

  ${({ span2 }) =>
    span2 &&
    css`
      grid-column-end: span 2;
    `}

  ${({ span3 }) =>
    span3 &&
    css`
      grid-column-end: span 4;
    `}

  ${({ span4 }) =>
    span4 &&
    css`
      grid-column-end: span 3;
    `}
`;

const MasornyGallery = () => {
  return (
    <StyledGridWrapper>
      <StyledImage span1 image={imageGallery} />
      <StyledImage span2 image={imageGallery4} />
      <StyledImage span3 image={imageGallery3} />
      <StyledImage span4 image={imageGallery1} />
      <StyledImage span4 image={imageGallery2} />
    </StyledGridWrapper>
  );
};

export default MasornyGallery;

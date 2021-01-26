import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledSlide = styled.img`
  position: absolute;
  z-index: 0;
  width: 100%;
  height: 100%;
  opacity: ${({ index, current }) => (index === current ? 1 : 0)};
  transition: all 0.3s ease-in-out;
  user-select: none;
`;

const Slide = ({ item, current, index }) => (
  <StyledSlide src={item} current={current} index={index} />
);

Slide.propTypes = {
  item: PropTypes.string.isRequired,
  current: PropTypes.number.isRequired,
  index: PropTypes.number.isRequired,
};
export default Slide;

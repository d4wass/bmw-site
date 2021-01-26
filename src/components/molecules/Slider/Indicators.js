import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledWrapper = styled.div`
  position: absolute;
  width: 20%;
  left: 26%;
  bottom: 5%;
  z-index: 2;

  @media ${({ theme }) => theme.breakpoints.desktop} {
    width: 20%;
    left: 15%;
    bottom: 10%;
  }
`;

const StyledIndicator = styled.span`
  position: absolute;
  left: ${({ current }) => `${current * 75}px`};
  height: 5px;
  width: 60px;
  background-color: ${({ theme }) => theme.colors.blue};
  display: block;
  transition: all 0.3s ease-in-out;
`;

const StyledIndicatorsItems = styled.ul`
  padding: 0;
  display: grid;
  grid-template-columns: ${({ items }) =>
    items ? `repeat(${items.length}, 1fr)` : 'repeat(3, 1fr)'};
  height: 5px;
  width: 210px;
  border-radius: 30px;
`;

const StyledIndicatorItem = styled.li`
  cursor: pointer;
  max-height: 100%;
  display: flex;
  margin-right: 15px;
  width: 60px;
  background-color: #fff;
`;

const Indicators = ({ slides, handleChange, current }) => {
  return (
    <StyledWrapper>
      <StyledIndicator current={current} />
      <StyledIndicatorsItems items={slides}>
        {slides.map((slide, index) => (
          <StyledIndicatorItem onClick={() => handleChange(index)} />
        ))}
      </StyledIndicatorsItems>
    </StyledWrapper>
  );
};

Indicators.propTypes = {
  slides: PropTypes.arrayOf(PropTypes.string).isRequired,
  handleChange: PropTypes.func.isRequired,
  current: PropTypes.number.isRequired,
};

export default Indicators;

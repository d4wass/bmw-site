import React from 'react';
import styled, { keyframes } from 'styled-components';
import PropTypes from 'prop-types';

const ripple = keyframes`
  0% { box-shadow: 0px 0px 0px 1px rgba(0, 0, 0, 0.0) }
  50% { box-shadow: 0px 0px 0px 15px rgba(0, 0, 0, 0.1) }
  100% { box-shadow: 0px 0px 0px 15px rgba(0, 0, 0, 0) }
`;

const StyledWrapper = styled.div`
  margin: 16px 0;
`;

const StyledLabel = styled.label`
  display: inline-block;
  min-height: 20px;
  position: relative;
  padding: 0 30px;
  margin-bottom: 0;
  cursor: pointer;
  vertical-align: bottom;
  user-select: none;

  &:before,
  &:after {
    position: absolute;
    content: '';
    border-radius: 50%;
    transition: all 0.2s ease;
    transition-property: transform, border-color;
  }

  &:before {
    left: 0;
    top: 0;
    width: 20px;
    height: 20px;
    border: 2px solid #707070;
  }

  &:after {
    top: 5px;
    left: 5px;
    width: 10px;
    height: 10px;
    transform: scale(0);
    background: ${({ theme }) => theme.colors.blue};
  }
`;

const StyledInput = styled.input`
  display: none;

  &:checked + ${StyledLabel}:before {
    border-color: ${({ theme }) => theme.colors.blue};
    animation: ${ripple} 0.2s linear forwards;
  }

  &:checked + ${StyledLabel}:after {
    transform: scale(1);
  }
`;

const RadioButton = ({ children, id, checked, handleButton }) => {
  return (
    <StyledWrapper>
      <StyledInput id={id} type="radio" checked={checked} onChange={handleButton} />
      <StyledLabel htmlFor={id}>{children}</StyledLabel>
    </StyledWrapper>
  );
};

RadioButton.propTypes = {
  children: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  checked: PropTypes.bool.isRequired,
  handleButton: PropTypes.func.isRequired,
};

export default RadioButton;

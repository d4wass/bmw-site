import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

const StyledButton = styled.button`
  position: ${({ isActive }) => (isActive ? 'fixed' : 'absolute')};
  z-index: 1;
  border: none;
  cursor: pointer;
  background-color: transparent;
  outline: none;
  display: inline-block;

  @media ${({ theme }) => theme.breakpoints.desktop} {
    display: none;
  }
`;

const StyledBox = styled.span`
  width: 30px;
  height: 20px;
  display: inline-block;
  position: relative;
`;

const HamburgerLine = css`
  width: 100%;
  height: 2px;
  border-radius: 20px;
  background-color: ${({ theme }) => theme.colors.white};
  position: absolute;
`;

const StyledInner = styled.span`
  ${HamburgerLine};
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  transition: background-color 0.1s 0.2s ease-in-out;
  background-color: ${({ isActive }) =>
    isActive ? 'transparent' : `${({ theme }) => theme.colors.white}`};

  &:after,
  &:before {
    ${HamburgerLine};
    content: '';
    left: 0;
    transition: transform 0.2s 0.2s ease-in-out;
  }

  &:before {
    top: -8px;
    ${({ isActive }) =>
      isActive &&
      css`
        transform: translateY(8px) rotate(45deg);
      `}
  }

  &:after {
    top: 8px;
    ${({ isActive }) =>
      isActive &&
      css`
        transform: translateY(-8px) rotate(-45deg);
      `}
  }

  ${({ isActive }) =>
    isActive &&
    css`
      background-color: transparent;
    `}
`;

const MenuButton = ({ isActive, handleClick }) => (
  <StyledButton isActive={isActive} onClick={handleClick}>
    <StyledBox isActive={isActive}>
      <StyledInner isActive={isActive} />
    </StyledBox>
  </StyledButton>
);

MenuButton.propTypes = {
  isActive: PropTypes.bool.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default MenuButton;

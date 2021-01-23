import React from 'react';
import styled, { css } from 'styled-components';
import NavigationItem from 'components/atoms/NavigationItem';
import Button from 'components/atoms/Button';
import PropTypes from 'prop-types';

const navigationItem = ['NOWE BMW iX', 'INNOWACYJNA AERODYNAMIKA', 'GALERIA'];

const StyledWrapper = styled.div`
  position: absolute;
  top: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

const StyledList = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  max-width: 250px;
  margin-bottom: 140px;
  visibility: ${({ isVisible }) => (isVisible ? 'visible' : 'hidden')};
  transition: visibility 0.3s 0.1s ease-in-out;
`;

const StyledNavWrapper = styled.nav`
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  z-index: 0;
  top: 0;
  left: 0;
  background-color: ${({ theme }) => theme.colors.black};
  transform: translateY(-100vh);
  transition: all 0.3s 0.1s ease-in-out;
  ${({ isActive }) =>
    isActive &&
    css`
      transform: translateY(0);
    `}
`;

const StyledSpan = styled.span`
  display: ${({ isActive }) => (isActive ? 'block' : 'none')};
  ${({ isActive }) =>
    isActive &&
    css`
      position: absolute;
      z-index: 1;
      left: 0;
      top: 80px;
      background-color: #343434;
      height: 1px;
      width: 70vw;
    `}
`;

const Navigation = ({ isVisible }) => (
  <StyledWrapper>
    <StyledSpan isActive={isVisible} />
    <StyledNavWrapper isActive={isVisible}>
      <StyledList isVisible={isVisible}>
        {navigationItem.map((item) => (
          <NavigationItem>{item}</NavigationItem>
        ))}
      </StyledList>
      <Button>Umów jazdę próbną</Button>
    </StyledNavWrapper>
  </StyledWrapper>
);

Navigation.propTypes = {
  isVisible: PropTypes.bool.isRequired,
};

export default Navigation;

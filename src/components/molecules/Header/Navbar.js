import React, { useState } from 'react';
import styled from 'styled-components';
import Hamburger from 'components/atoms/Hamburger';
import Logo from 'assets/BMW-logo@2x.png';
import Navigation from 'components/molecules/Navigation';

const StyledWrapper = styled.div`
  display: flex;
  position: absolute;
  height: 80px;
  top: 0;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 20px 32px;

  @media ${({ theme }) => theme.breakpoints.desktop} {
    padding: 20px 280px;
  }
`;

const StyledLogo = styled.img`
  position: ${({ isActive }) => (isActive ? 'fixed' : 'absolute')};
  z-index: 1;
  height: 40px;
  width: 40px;
`;

const StyledNavItem = styled.div`
  height: 40px;
  width: 40px;
  display: flex;
  align-items: center;
`;

const Navbar = () => {
  const [isVisible, setVisible] = useState(false);
  const handleClick = () => setVisible(!isVisible);

  return (
    <StyledWrapper>
      <StyledNavItem>
        <Hamburger handleClick={handleClick} isActive={isVisible} />
      </StyledNavItem>
      <StyledNavItem>
        <StyledLogo src={Logo} />
      </StyledNavItem>
      <Navigation isVisible={isVisible} handleClick={handleClick} navBtn />
    </StyledWrapper>
  );
};

export default Navbar;

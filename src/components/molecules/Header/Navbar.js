import React, { useState } from 'react';
import styled from 'styled-components';
import Hamburger from 'components/atoms/Hamburger';
import { ReactComponent as Logo } from 'assets/BMW-logo.svg';
import Navigation from 'components/molecules/Navigation';

const StyledWrapper = styled.div`
  position: absolute;
  top: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 20px 32px;
`;

const StyledLogo = styled(Logo)`
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
        <StyledLogo as={Logo} />
      </StyledNavItem>
      <Navigation isVisible={isVisible} handleClick={handleClick} navBtn />
    </StyledWrapper>
  );
};

export default Navbar;

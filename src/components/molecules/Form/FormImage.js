import React, { useEffect, useState } from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import formImage from 'assets/image/form/bmw-ix-front@2x.png';
import { ReactComponent as Path } from 'assets/image/form/Path 17.svg';
import { ReactComponent as DesktopPath } from 'assets/image/form/Path 14.svg';
import { ReactComponent as SecondPath } from 'assets/image/form/Path 16.svg';
import { ReactComponent as DesktopSecondPath } from 'assets/image/form/Path 13.svg';
import formSecondImage from 'assets/image/form/bmw-ix-front-sec@2x.png';

const StyledWrapper = styled.div`
  position: relative;
  height: 250px;

  @media ${({ theme }) => theme.breakpoints.desktop} {
    height: 700px;
    position: absolute;
    left: 70%;

    ${({ second }) =>
      second &&
      css`
        top: 0;
        left: 29%;
      `}
  }
`;

const StyledImage = styled.img`
  position: absolute;
  z-index: 1;
  height: 30vh;
  width: auto;
  left: ${({ second }) => (second ? 'none' : '-33%')};
  right: ${({ second }) => second && 0};

  @media ${({ theme }) => theme.breakpoints.desktop} {
    left: ${({ second }) => (second ? '-55px' : '-26px')};
    height: 50%;
  }
`;

const StyledPath = styled(Path)`
  position: absolute;
  z-index: -1;
  left: -33%;
  top: 35%;

  @media ${({ theme }) => theme.breakpoints.desktop} {
    left: 80px;
  }
`;

const StyledDesktopPath = styled(DesktopPath)`
  position: absolute;
  z-index: -1;
  @media ${({ theme }) => theme.breakpoints.desktop} {
    top: 450px;
    right: -280px;
  }
`;

const StyledDesktopSecondPath = styled(DesktopSecondPath)`
  position: absolute;

  @media ${({ theme }) => theme.breakpoints.desktop} {
    top: -310px;
    left: 120px;
  }
`;

const StyledSecondPath = styled(SecondPath)`
  position: absolute;
  z-index: -1;
  right: 0;
  top: -80%;

  @media ${({ theme }) => theme.breakpoints.desktop} {
    top: -120px;
    left: -50px;
  }
`;

const StyledContentWrapper = styled.div`
  height: inherit;
  width: inherit;
  position: relative;

  ${({ second }) => second && css``}

  @media ${({ theme }) => theme.breakpoints.desktop} {
    top: 20%;
    left: -200px;

    ${({ second }) =>
      second &&
      css`
        top: 90%;
        left: -256px;
      `}
  }
`;

const FormImage = ({ second }) => {
  const [isDesktop, setDesktop] = useState(window.innerWidth > 1450);

  const updateWidth = () => {
    setDesktop(window.innerWidth > 1450);
  };

  useEffect(() => {
    window.addEventListener('resize', updateWidth);
    return () => window.removeEventListener('resize', updateWidth);
  });

  return (
    <StyledWrapper second={second}>
      <StyledContentWrapper second={second}>
        <StyledImage src={second ? formSecondImage : formImage} second={second} />
        {second ? <StyledSecondPath /> : <StyledPath />}
        {isDesktop && second && <StyledDesktopSecondPath />}
        {isDesktop && !second && <StyledDesktopPath />}
      </StyledContentWrapper>
    </StyledWrapper>
  );
};

FormImage.propTypes = {
  second: PropTypes.bool,
};

FormImage.defaultProps = {
  second: false,
};

export default FormImage;

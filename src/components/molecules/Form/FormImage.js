import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import formImage from 'assets/image/form/bmw-ix-front@2x.png';
import { ReactComponent as Path } from 'assets/image/form/Path 17.svg';
import { ReactComponent as SecondPath } from 'assets/image/form/Path 16.svg';
import formSecondImage from 'assets/image/form/bmw-ix-front-sec@2x.png';

const StyledWrapper = styled.div`
  position: relative;
  height: 250px;
`;

const StyledImage = styled.img`
  position: absolute;
  z-index: 1;
  height: 30vh;
  width: auto;
`;

const StyledPath = styled(Path)`
  position: absolute;
  z-index: -1;
  left: 15px;
  top: 176px;
`;

const StyledSecondPath = styled(SecondPath)`
  position: absolute;
  z-index: -1;
  left: -100px;
  top: -180px;
`;

const StyledContentWrapper = styled.div`
  position: absolute;
  top: -100px;
  left: -200px;

  ${({ second }) =>
    second &&
    css`
      top: 0;
      left: 127px;
    `}
`;

const FormImage = ({ second }) => (
  <StyledWrapper>
    <StyledContentWrapper second={second}>
      <StyledImage src={second ? formSecondImage : formImage} />
      {second ? <StyledSecondPath /> : <StyledPath />}
    </StyledContentWrapper>
  </StyledWrapper>
);

FormImage.propTypes = {
  second: PropTypes.bool,
};

FormImage.defaultProps = {
  second: false,
};

export default FormImage;

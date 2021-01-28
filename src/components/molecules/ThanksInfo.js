import React from 'react';
import styled from 'styled-components';
import Paragraph from 'components/atoms/Paragraph';
import Button from 'components/atoms/Button';
import Title from 'components/atoms/Title';
import PropTypes from 'prop-types';

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  height: 122vh;
  width: 100vw;
  background-color: hsla(270, 100%, 0%, 1);
  z-index: 10;

  @media ${({ theme }) => theme.breakpoints.desktop} {
    background-color: hsla(270, 100%, 0%, 0.5);
    height: 112vh;
  }
`;

const StyledTitle = styled(Title)`
  color: ${({ theme }) => theme.colors.white};
  font-size: 2.4rem;
  margin-bottom: 10px;
`;

const StyledParagraph = styled(Paragraph)`
  color: ${({ theme }) => theme.colors.white};
  margin-bottom: 60px;
  max-width: 270px;
  text-align: center;
  line-height: 2.4;
`;
const StyledButton = styled(Button)`
  width: 140px;
`;

const ThanksInfo = ({ handleClose }) => (
  <StyledWrapper>
    <StyledTitle>DZIĘKUJEMY</StyledTitle>
    <StyledParagraph>Skontaktujemy się z Tobą w najbliższym możliwym terminie</StyledParagraph>
    <StyledButton onClick={handleClose}>OK</StyledButton>
  </StyledWrapper>
);

ThanksInfo.propTypes = {
  handleClose: PropTypes.func.isRequired,
};

export default ThanksInfo;

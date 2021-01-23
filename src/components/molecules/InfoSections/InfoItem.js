import React from 'react';
import Paragraph from 'components/atoms/Paragraph';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding-bottom: 30px;
`;

const StyledSpan = styled.span`
  position: relative;
  width: 100%;
  height: 1px;
  margin: 15px 0;
  background-color: #dcdcdc;

  ${({ inner }) =>
    inner &&
    css`
      position: absolute;
      background-color: #6d6d6d;
      width: 20px;
      margin: 0;
      height: 1px;
    `}
`;

const StyledTitle = styled.h3`
  font-size: 1.3rem;
  width: 60vw;
  font-family: 'Cairo', sans-serif;
  font-weight: ${({ theme }) => theme.font.weight.bold};
  color: ${({ theme }) => theme.colors.black};
`;

const InfoItem = ({ title, content }) => (
  <StyledWrapper>
    <StyledTitle>{title}</StyledTitle>
    <StyledSpan>
      <StyledSpan inner />
    </StyledSpan>
    <Paragraph>{content}</Paragraph>
  </StyledWrapper>
);

InfoItem.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};

export default InfoItem;

import styled, { css } from 'styled-components';
import React from 'react';
import PropTypes from 'prop-types';

const StyledTitle = styled.h1`
  font-family: 'Cairo', sans-serif;
  font-size: 2.4rem;
  font-weight: ${({ theme }) => theme.font.weight.bold};
  color: ${({ theme }) => theme.colors.black};

  ${({ footer }) =>
    footer &&
    css`
      font-family: 'Roboto', sans-serif;
      font-size: 2rem;
      font-weight: 300;
      margin-bottom: 30px;
    `}

  ${({ header }) =>
    header &&
    css`
      font-size: 4.8rem;
      color: ${({ theme }) => theme.colors.white};
      line-height: 5.6rem;
      padding: 17px 0;
    `}
`;

const Title = ({ children, footer, header }) => (
  <StyledTitle footer={footer} header={header}>
    {children}
  </StyledTitle>
);

Title.propTypes = {
  children: PropTypes.string.isRequired,
  footer: PropTypes.bool,
  header: PropTypes.bool,
};

Title.defaultProps = {
  footer: false,
  header: false,
};

export default Title;

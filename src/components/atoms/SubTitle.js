import styled, { css } from 'styled-components';
import React from 'react';
import PropTypes from 'prop-types';

const StyledSubtitle = styled.h2`
  font-family: 'Open Sans', sans-serif;
  font-size: 1.6rem;
  font-weight: ${({ theme }) => theme.font.weight.light};
  color: ${({ theme }) => theme.colors.subtitle};

  ${({ header }) =>
    header &&
    css`
      font-family: 'Roboto', sans-serif;
      text-transform: uppercase;
    `}

  ${({ info }) =>
    info &&
    css`
      font-family: 'Open Sans', sans-serif;
      margin-bottom: 15px;
    `}
`;

const Subtitle = ({ children, header, info }) => (
  <StyledSubtitle header={header} info={info}>
    {children}
  </StyledSubtitle>
);

Subtitle.propTypes = {
  children: PropTypes.string.isRequired,
  header: PropTypes.bool,
  info: PropTypes.bool,
};

Subtitle.defaultProps = {
  header: false,
  info: false,
};

export default Subtitle;

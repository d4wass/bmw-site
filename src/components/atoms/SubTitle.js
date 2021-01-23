import styled, { css } from 'styled-components';
import React from 'react';
import PropTypes from 'prop-types';

const StyledSubtitle = styled.h2`
  font-family: 'Open Sans', sans-serif;
  font-size: 1.6rem;
  font-weight: ${({ theme }) => theme.font.weight.light};
  color: ${({ theme }) => theme.colors.subtitle};

  ${({ theme }) => theme.letterSpacingMixin(0)}
  ${({ header }) =>
    header &&
    css`
      font-family: 'Roboto', sans-serif;
      text-transform: uppercase;
    `}
`;

const Subtitle = ({ children, header }) => (
  <StyledSubtitle header={header}>{children}</StyledSubtitle>
);

Subtitle.propTypes = {
  children: PropTypes.string.isRequired,
  header: PropTypes.bool.isRequired,
};

export default Subtitle;

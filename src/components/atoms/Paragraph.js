import styled, { css } from 'styled-components';
import React from 'react';
import PropTypes from 'prop-types';

const StyledParagraph = styled.p`
  font-family: 'Roboto', sans-serif;
  font-size: 1.3rem;
  font-weight: ${({ theme }) => theme.font.weight.regular};
  color: ${({ theme }) => theme.colors.paragraph};
  ${({ footer }) =>
    footer &&
    css`
      font-size: 1.2rem;
      font-weight: ${({ theme }) => theme.font.weight.medium};
      color: ${({ theme }) => theme.colors.footer.links};
    `}
`;

const Paragraph = ({ children, footer }) => (
  <StyledParagraph footer={footer}>{children}</StyledParagraph>
);

Paragraph.propTypes = {
  children: PropTypes.string.isRequired,
  footer: PropTypes.bool.isRequired,
};

export default Paragraph;

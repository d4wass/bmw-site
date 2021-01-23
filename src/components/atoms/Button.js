import styled from 'styled-components';
import React from 'react';
import PropTypes from 'prop-types';

const StyledButton = styled.button`
  font-family: 'Cairo', sans-serif;
  font-size: 1.4rem;
  font-weight: ${({ theme }) => theme.font.weight.semiBold};
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.blue};
  border: none;
  max-width: 269px;
  padding: 20px 50px;
  display: flex;
  justify-content: center;

  ${({ theme }) => theme.letterSpacingMixin(50)}
`;

const Button = ({ children }) => <StyledButton>{children}</StyledButton>;

Button.propTypes = {
  children: PropTypes.string.isRequired,
};

export default Button;

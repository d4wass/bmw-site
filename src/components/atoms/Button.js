import styled, { css } from 'styled-components';

const Button = styled.button`
  font-family: 'Cairo', sans-serif;
  font-size: 1.4rem;
  font-weight: ${({ theme }) => theme.font.weight.semiBold};
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.blue};
  border: ${({ theme }) => `2px solid ${theme.colors.blue}`};
  max-width: 269px;
  padding: 20px 50px;
  display: flex;
  justify-content: center;
  cursor: pointer;
  outline: none;
  transition: all 0.3s ease-in-out;

  ${({ header }) =>
    header &&
    css`
      &:hover {
        background-color: transparent;
        border: ${({ theme }) => `2px solid ${theme.colors.blue}`};
      }
    `}

  ${({ theme }) => theme.letterSpacingMixin(50)}
`;

export default Button;

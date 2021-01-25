import styled, { css } from 'styled-components';
// import magnifierIcon from 'assets/icons/magnifier.svg';

const Input = styled.input`
  padding: 11px 15px;
  margin-bottom: 15px;
  width: 100%;
  font-size: 1.3rem;
  font-family: 'Open Sans', sans-serif;
  font-weight: ${({ theme }) => theme.font.regular};
  background-color: #fff;
  border: 1px #dcdcdc solid;

  ::placeholder {
    font-size: 1.3rem;
    font-family: 'Open Sans', sans-serif;
    font-weight: ${({ theme }) => theme.font.regular};
    color: ${({ theme }) => theme.colors.paragraph};
  }

  ${({ search }) =>
    search &&
    css`
      padding: 10px 20px 10px 40px;
      font-size: 1.2rem;
    `}

  @media ${({ theme }) => theme.breakpoints.desktop} {
    margin-bottom: 30px;
    max-width: 500px;
  }
`;

export default Input;

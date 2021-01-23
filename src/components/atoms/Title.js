import styled, { css } from 'styled-components';

const Title = styled.h1`
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
    `};

  ${({ header }) =>
    header &&
    css`
      font-size: 4.8rem;
      color: ${({ theme }) => theme.colors.white};
      line-height: 5.6rem;
      padding: 17px 0;
    `};

  ${({ small }) =>
    small &&
    css`
      font-size: 1.2rem;
      margin: 6px;
    `}

  ${({ form }) =>
    form &&
    css`
      font-size: 2rem;
      font-weight: ${({ theme }) => theme.font.weight.semiBold};
      margin-bottom: 30px;
    `}
`;

export default Title;

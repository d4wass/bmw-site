import styled, { css } from 'styled-components';

const Title = styled.h1`
  font-family: 'Cairo', sans-serif;
  font-size: 2.4rem;
  font-weight: ${({ theme }) => theme.font.weight.bold};
  color: ${({ theme }) => theme.colors.black};

  @media ${({ theme }) => theme.breakpoints.desktop} {
    ${({ header }) =>
      header &&
      css`
        font-size: 6.4rem;
        text-transform: uppercase;
        padding: 36px 0;
      `}

    ${({ info }) =>
      info &&
      css`
        font-size: 3.6rem;
        width: 300px;
        line-height: 1.2;
        margin: 25px 0;
      `}

    ${({ footer }) =>
      footer &&
      css`
        margin: 0 2vh 0 0;
      `};
  }

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
      width: 50vw;
    `};

  ${({ info }) =>
    info &&
    css`
      width: 60vw;
      line-height: 2.8rem;
      margin: 25px 0;
    `}

  ${({ formStyle }) =>
    formStyle &&
    css`
      font-size: 2rem;
      font-weight: ${({ theme }) => theme.font.weight.semiBold};
      margin-bottom: 30px;
    `}
`;

export default Title;

import styled, { css } from 'styled-components';

const Subtitle = styled.h2`
  font-family: 'Open Sans', sans-serif;
  font-size: 1.6rem;
  font-weight: ${({ theme }) => theme.font.weight.light};
  color: ${({ theme }) => theme.colors.subtitle};
  line-height: 1.5;

  ${({ header }) =>
    header &&
    css`
      font-family: 'Roboto', sans-serif;
      text-transform: uppercase;
      color: #d6d6d6;
    `}

  ${({ info }) =>
    info &&
    css`
      margin-bottom: 15px;
    `}
`;

export default Subtitle;

import styled, { css } from 'styled-components';

const Paragraph = styled.p`
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

  ${({ info }) =>
    info &&
    css`
      font-size: 1.3rem;
      color: ${({ theme }) => theme.colors.footer.links};
    `}
`;

export default Paragraph;

export const theme = {
  font: {
    weight: {
      light: 300,
      regular: 400,
      medium: 500,
      semiBold: 600,
      bold: 700,
    },
  },
  colors: {
    footer: {
      background: '#E6E6E6',
      links: '#707070',
      border: '#BEBEBE',
    },
    icon: '#A9A7A8',
    paragraph: '#4E4E4E',
    subtitle: '#707070',
    black: '#000',
    blue: '#3369D3',
    white: '#FFF',
  },
  breakpoints: {
    mobile: '(min-width: 43em)',
    tablet: '(min-width: 62em)',
    desktop: '(min-width: 82em)',
  },
  letterSpacingMixin: (spacing) => `letter-spacing: ${(spacing / 1000) * 1}rem`,
};

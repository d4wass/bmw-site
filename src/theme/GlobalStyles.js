import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Cairo:wght@400;600;700&family=Open+Sans:wght@300;400&family=Roboto:wght@300;400;500;700&display=swap');

  *, *::before, *::after {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  html{
    font-size: 62.5%;
  }

  body {
    font-size: 1.6rem;
    /* font-family: 'Cairo', sans-serif; */
    font-family: 'Open Sans', sans-serif;
    /* font-family: 'Roboto', sans-serif;   */
  }
`;

export default GlobalStyle;

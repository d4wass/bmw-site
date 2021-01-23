import React from 'react';
import PropTypes from 'prop-types';
import GlobalStyle from 'theme/GlobalStyles';
import { ThemeProvider } from 'styled-components';
import { theme } from 'theme/MainTheme';

const PageTemplate = ({ children }) => (
  <>
    <GlobalStyle />
    <ThemeProvider theme={theme}>
      <>{children}</>
    </ThemeProvider>
  </>
);

PageTemplate.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.node]).isRequired,
};

export default PageTemplate;

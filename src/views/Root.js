import React from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from 'assets/styles/GlobalStyle';
import { BrowserRouter as Router } from 'react-router-dom';
import MainTemplate from 'components/templates/MainTemplate/MainTemplate';
import ContentProvider from 'providers/ContentProvider';
import { useTheme } from 'assets/styles/useTheme';
import AnimatedRoutes from './AnimatedRoutes';

const Root = () => {
  const { theme } = useTheme();

  return (
    <Router>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <MainTemplate>
          <ContentProvider>
            <AnimatedRoutes />
          </ContentProvider>
        </MainTemplate>
      </ThemeProvider>
    </Router>
  );
};

export default Root;

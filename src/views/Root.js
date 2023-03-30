import React from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from 'assets/styles/GlobalStyle';
import { theme } from 'assets/styles/theme';
import { HashRouter as Router } from 'react-router-dom';
import MainTemplate from 'components/templates/MainTemplate/MainTemplate';
import ContentProvider from 'providers/ContentProvider';
import AnimatedRoutes from './AnimatedRoutes';
import { useDisablePinchZoom } from 'hooks/useDisablePinchZoom';
import FirebaseProvider from 'providers/FirebaseProvider';
import PlaylistProvider from 'providers/PlaylistProvider';

const Root = () => {
  useDisablePinchZoom();

  return (
    <Router>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <MainTemplate>
          <ContentProvider>
            <FirebaseProvider>
              <PlaylistProvider>
                <AnimatedRoutes />
              </PlaylistProvider>
            </FirebaseProvider>
          </ContentProvider>
        </MainTemplate>
      </ThemeProvider>
    </Router>
  );
};

export default Root;

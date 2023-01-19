import React from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from 'assets/styles/GlobalStyle';
import { theme } from 'assets/styles/theme';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from 'views/Home/Home';
import Categories from 'views/Categories/Categories';
import Titles from 'views/Titles/Titles';
import MainTemplate from 'components/templates/MainTemplate/MainTemplate';
import ContentProvider from 'providers/ContentProvider';

const Root = () => {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <MainTemplate>
          <ContentProvider>
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route path="/categories" element={<Categories />} />
              <Route path="/titles" element={<Titles />} />
            </Routes>
          </ContentProvider>
        </MainTemplate>
      </ThemeProvider>
    </Router>
  );
};

export default Root;

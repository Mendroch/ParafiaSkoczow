import React from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from 'assets/styles/GlobalStyle';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from 'views/Home/Home';
import Categories from 'views/Categories/Categories';
import Titles from 'views/Titles/Titles';
import Text from 'views/Text/Text';
import Search from 'views/Search/Search';
import MainTemplate from 'components/templates/MainTemplate/MainTemplate';
import ContentProvider from 'providers/ContentProvider';
import { useTheme } from 'assets/styles/useTheme';

const Root = () => {
  const { theme } = useTheme();
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
              <Route path="/text" element={<Text />} />
              <Route path="/search" element={<Search />} />
            </Routes>
          </ContentProvider>
        </MainTemplate>
      </ThemeProvider>
    </Router>
  );
};

export default Root;

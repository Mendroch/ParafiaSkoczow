import React from 'react';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import Home from 'views/Home/Home';
import Categories from 'views/Categories/Categories';
import Titles from 'views/Titles/Titles';
import Text from 'views/Text/Text';
import Search from 'views/Search/Search';
import { AnimatePresence } from 'framer-motion';
import Playlist from './Playlist/Playlist';

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route exact path="/" element={<Home />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/titles" element={<Titles />} />
        <Route path="/text" element={<Text />} />
        <Route path="/search" element={<Search />} />
        <Route path="/playlist" element={<Playlist />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </AnimatePresence>
  );
};

export default AnimatedRoutes;

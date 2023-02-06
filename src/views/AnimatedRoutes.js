import React from 'react';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import Home from 'views/Home/Home';
import Categories from 'views/Categories/Categories';
import Titles from 'views/Titles/Titles';
import Text from 'views/Text/Text';
import Search from 'views/Search/Search';
import { AnimatePresence } from 'framer-motion';

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
        <Route path="*" element={<Navigate to="/" />} />
        {/* For ios ^ this ^ line generate error: "WebProcessProxy::checkURLReceivedFromWebProcess: Received an unexpected URL from the web process 2023-02-03 14:03:52.784413+0100 Parafia Skoczów[12061:172468] [Process] 0x7fc3a2048020 - [pageProxyID=13, webPageID=14, PID=12077] WebPageProxy::Ignoring request to load this main resource because it is outside the sandbox" */}
      </Routes>
    </AnimatePresence>
  );
};

export default AnimatedRoutes;

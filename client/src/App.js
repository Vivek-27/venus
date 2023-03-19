import React, { useState } from 'react';
import Navigation from './components/Navigation';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation
} from 'react-router-dom';
import Home from './components/Home';
import Search from './components/Search';
import Upload from './components/Upload';
import Account from './components/Account';
import './App.css';
import Auth from './components/Auth';

import s from './App.css';

const App = () => {
  return (
    <div className={s.container}>
      <Navigation></Navigation>

      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/upload" element={<Upload />} />
        <Route path="/account" element={<Auth />} />
      </Routes>
    </div>
  );
};

export default App;

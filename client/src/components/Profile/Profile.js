import React from 'react';
import Home from '../Home';
import Navigation from '../Navigation';
import { Routes, Route } from 'react-router-dom';
import Search from '../Search';
import Upload from '../Upload';
import Account from '../Account';

const Profile = (props) => {
  return (
    <div>
      <Navigation />
      <Routes>
        <Route exact path="/home" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/upload" element={<Upload />} />
        <Route path="/account" element={<Account props={props.props} />} />
      </Routes>
    </div>
  );
};

export default Profile;

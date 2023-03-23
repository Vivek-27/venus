import React, { useState } from 'react';
import Auth from '../Auth';
import Profile from '../Profile/Profile';
import s from '../styles/Start.module.css';
const Start = () => {
  const [data, setData] = useState({
    name: '',
    email: '',
    _id: '',
    login: true
  });
  const getData = (data) => {
    const { name, email, _id, login } = data;
    setData((data) => {
      return {
        ...data,
        name,
        email,
        _id,
        login
      };
    });
  };
  return (
    <div className={s.container}>
      {data.login && (
        <div className={s.wrapper}>
          <h1
            style={{
              color: 'white',
              margin: '50px 0px 0px 0px',
              textAlign: 'center'
            }}
          >
            Welcome to Venus
          </h1>
          <p
            style={{
              color: 'white',
              margin: '10px 20px 12px 20px',
              textAlign: 'center'
            }}
          >
            Venus is a digital technology that facilitates the sharing of
            content, multimedia, and information through virtual networks and
            communities.
          </p>
          <Auth onLogin={getData} />
        </div>
      )}
      {!data.login && <Profile props={data} />}
    </div>
  );
};

export default Start;

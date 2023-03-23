import React, { useState } from 'react';
import s from './styles/Auth.module.css';
import axios from 'axios';

const Auth = (props) => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [isLogin, setIsLogin] = useState(false);

  const handleCh = (e) => {
    setIsSignUp(e);
  };
  const [value, setValue] = useState({
    name: '',
    email: '',
    password: '',
    repassword: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setValue((data) => {
      return {
        ...data,
        [name]: value
      };
    });
  };

  const register = async (e) => {
    e.preventDefault();
    await axios.post('/register', value).then(
      (res) => {
        console.log(res);
      },
      [value]
    );
  };

  const login = async (e) => {
    e.preventDefault();
    await axios.post('/login', value).then((res) => {
      alert(`Welcome ${res.data.name}`);
      if (res) {
        props.onLogin(res.data);
      }
    });
  };

  return (
    <>
      {!isLogin && (
        <div>
          {!isSignUp && (
            <div className={s.container}>
              <div className={s.wrapper}>
                <h1>Login</h1>
                <form>
                  <input
                    name="email"
                    value={setValue.value}
                    type="text"
                    placeholder="@username"
                    onChange={handleChange}
                  />
                  <input
                    name="password"
                    value={setValue.value}
                    type="password"
                    placeholder="password"
                    onChange={handleChange}
                  />
                </form>
                <div className={s.btn}>
                  <button
                    className={s.btn_sign_in}
                    onClick={login}
                    type="submit"
                  >
                    Login
                  </button>
                  <button
                    className={s.btn_sign_up}
                    onClick={() => handleCh(true)}
                  >
                    Sign-Up
                  </button>
                </div>

                <p className={s.p} style={{ marginBottom: '10px' }}>
                  Please login to your account. If not click Sign Up to create
                  one.
                </p>
              </div>
            </div>
          )}
          {isSignUp && (
            <div className={s.container}>
              <div className={s.wrapper}>
                <br></br>
                <h1>Sign-Up</h1>
                <form>
                  <input
                    name="name"
                    value={setValue.value}
                    type="text"
                    placeholder="Enter your name"
                    onChange={handleChange}
                  />
                  <input
                    name="email"
                    value={setValue.value}
                    type="text"
                    placeholder="Enter your email"
                    onChange={handleChange}
                  />
                  <input
                    name="password"
                    value={setValue.value}
                    type="password"
                    placeholder="Enter password"
                    onChange={handleChange}
                    minLength="4"
                    maxLength="8"
                  />
                  <input
                    name="repassword"
                    value={setValue.value}
                    type="password"
                    placeholder="re-enter password"
                    onChange={handleChange}
                  />
                </form>
                <div className={s.btn}>
                  <button
                    className={s.btn_sign_in}
                    onClick={register}
                    type="submit"
                  >
                    Sign-Up
                  </button>
                  <button
                    className={s.btn_sign_up}
                    onClick={() => handleCh(false)}
                  >
                    Login
                  </button>
                </div>
                <p className={s.p}>
                  <input
                    type="checkbox"
                    name="agree"
                    value="checked"
                    style={{ width: '15px', margin: '0px 10px 10px 0px' }}
                  />
                  I accept the Terms of Service and Privacy Policy
                </p>
                <hr></hr>
              </div>
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default Auth;

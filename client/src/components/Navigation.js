import React from 'react';
import logo from './icons/logobk.png';
import s from './styles/Navigation.module.css';
import { Link } from 'react-router-dom';
// Icons import
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import AddCircleOutlineRoundedIcon from '@mui/icons-material/AddCircleOutlineRounded';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import FavoriteBorderRoundedIcon from '@mui/icons-material/FavoriteBorderRounded';

const Navigation = () => {
  return (
    <>
      <div className={s.wrapper}>
        <div>
          <img
            src={logo}
            alt="Logo"
            height="40"
            width="47"
            padding="20px"
            style={{ margin: '10px 0px 0px 10px' }}
          />
        </div>
        <div className={s.noti}>
          <FavoriteBorderRoundedIcon style={{ color: 'black' }} />
        </div>
      </div>
      <ul>
        <li>
          <Link to={'/home'}>
            <HomeRoundedIcon style={{ color: 'black' }} />
          </Link>
        </li>
        <li>
          <Link to={'/search'}>
            <SearchRoundedIcon style={{ color: 'black' }} />
          </Link>
        </li>
        <li>
          <Link to={'/upload'}>
            <AddCircleOutlineRoundedIcon style={{ color: 'black' }} />
          </Link>
        </li>
        <li>
          <Link to={'./account'}>
            <AccountCircleRoundedIcon style={{ color: 'black' }} />
          </Link>
        </li>
      </ul>
    </>
  );
};

export default Navigation;

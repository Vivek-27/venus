import React from 'react';
import { useState } from 'react';
import DP from './icons/logobk.png';
import s from './styles/Account.module.css';

// Icons import
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';

const Account = (props) => {
  const [isDrop, setDrop] = useState(false);
  const handleMenu = () => {
    setDrop(!isDrop);
  };

  return (
    <div className={s.container}>
      <div className={s.wrapper}>
        <div className={s.user}>
          <img src={DP} height="80px" width="80px" className={s.dp} />
          <div style={{ margin: '0px 30px 0px 5px' }}>
            <h2>{props.props.name}</h2>
            <p>{props.props.email}</p>
          </div>
          {/* <div className={s.menu}>
            <MenuRoundedIcon
              className="menu-icon"
              onClick={() => handleMenu()}
              style={{ padding: '10px' }}
            />
          </div> */}
        </div>

        <div>
          <ol className="ul2">
            <li>Posts</li>
            <li>Followers</li>
            <li>Following</li>
          </ol>
        </div>
      </div>
      {isDrop && (
        <div className={s.items}>
          <h3 style={{ paddingLeft: '30px' }}>Profile</h3>
          <tr>Settings</tr>
          <tr>Edit Profile</tr>
          <tr>Delete Account</tr>
          <button
            onClick={handleMenu}
            style={{ borderRadius: '5px', margin: '0px 10px' }}
          >
            close
          </button>
        </div>
      )}
    </div>
  );
};

export default Account;

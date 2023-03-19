import { Grid, List } from '@mui/material';
import React, { useEffect, useState } from 'react';
import s from './styles/Search.module.css';

const Search = () => {
  return (
    <div className={s.container1}>
      <div>
        <input type="search" placeholder="Search" style={{ width: '97%' }} />
      </div>
      <div className={s.wrapper1}>
        <img
          src={`https://picsum.photos/${Math.round(
            Math.random() * (1080 - 900) + 900
          )}/${Math.round(Math.random() * (700 - 600) + 500)}`}
          className={s.img2}
        />
        <img
          src={`https://picsum.photos/${Math.round(
            Math.random() * (1080 - 900) + 900
          )}/${Math.round(Math.random() * (700 - 600) + 500)}`}
          className={s.img2}
        />
        <img
          src={`https://picsum.photos/${Math.round(
            Math.random() * (1080 - 900) + 900
          )}/${Math.round(Math.random() * (700 - 600) + 500)}`}
          className={s.img2}
        />
        <img
          src={`https://picsum.photos/${Math.round(
            Math.random() * (1080 - 900) + 900
          )}/${Math.round(Math.random() * (700 - 600) + 500)}`}
          className={s.img2}
        />
        <img
          src={`https://picsum.photos/${Math.round(
            Math.random() * (1080 - 900) + 900
          )}/${Math.round(Math.random() * (700 - 600) + 500)}`}
          className={s.img2}
        />
        <img
          src={`https://picsum.photos/${Math.round(
            Math.random() * (1080 - 900) + 900
          )}/${Math.round(Math.random() * (700 - 600) + 500)}`}
          className={s.img2}
        />
        <img
          src={`https://picsum.photos/${Math.round(
            Math.random() * (1080 - 900) + 900
          )}/${Math.round(Math.random() * (700 - 600) + 500)}`}
          className={s.img2}
        />
        <img
          src={`https://picsum.photos/${Math.round(
            Math.random() * (1080 - 900) + 900
          )}/${Math.round(Math.random() * (700 - 600) + 500)}`}
          className={s.img2}
        />
        <img
          src={`https://picsum.photos/${Math.round(
            Math.random() * (1080 - 900) + 900
          )}/${Math.round(Math.random() * (700 - 600) + 500)}`}
          className={s.img2}
        />
        <img
          src={`https://picsum.photos/${Math.round(
            Math.random() * (1080 - 900) + 900
          )}/${Math.round(Math.random() * (700 - 600) + 500)}`}
          className={s.img2}
        />
        <img
          src={`https://picsum.photos/${Math.round(
            Math.random() * (1080 - 900) + 900
          )}/${Math.round(Math.random() * (700 - 600) + 500)}`}
          className={s.img2}
        />
        <img
          src={`https://picsum.photos/${Math.round(
            Math.random() * (1080 - 900) + 900
          )}/${Math.round(Math.random() * (700 - 600) + 500)}`}
          className={s.img2}
        />
        <img
          src={`https://picsum.photos/${Math.round(
            Math.random() * (1080 - 900) + 900
          )}/${Math.round(Math.random() * (700 - 600) + 500)}`}
          className={s.img2}
        />
        <img
          src={`https://picsum.photos/${Math.round(
            Math.random() * (1080 - 900) + 900
          )}/${Math.round(Math.random() * (700 - 600) + 500)}`}
          className={s.img2}
        />
        <img
          src={`https://picsum.photos/${Math.round(
            Math.random() * (1080 - 900) + 900
          )}/${Math.round(Math.random() * (700 - 600) + 500)}`}
          className={s.img2}
        />
        <img
          src={`https://picsum.photos/${Math.round(
            Math.random() * (1080 - 900) + 900
          )}/${Math.round(Math.random() * (700 - 600) + 500)}`}
          className={s.img2}
        />
        <img
          src={`https://picsum.photos/${Math.round(
            Math.random() * (1080 - 900) + 900
          )}/${Math.round(Math.random() * (700 - 600) + 500)}`}
          className={s.img2}
        />
        <img
          src={`https://picsum.photos/${Math.round(
            Math.random() * (1080 - 900) + 900
          )}/${Math.round(Math.random() * (700 - 600) + 500)}`}
          className={s.img2}
        />
        <img
          src={`https://picsum.photos/${Math.round(
            Math.random() * (1080 - 900) + 900
          )}/${Math.round(Math.random() * (700 - 600) + 500)}`}
          className={s.img2}
        />
        <img
          src={`https://picsum.photos/${Math.round(
            Math.random() * (1080 - 900) + 900
          )}/${Math.round(Math.random() * (700 - 600) + 500)}`}
          className={s.img2}
        />
        <img
          src={`https://picsum.photos/${Math.round(
            Math.random() * (1080 - 900) + 900
          )}/${Math.round(Math.random() * (700 - 600) + 500)}`}
          className={s.img2}
        />
        <img
          src={`https://picsum.photos/${Math.round(
            Math.random() * (1080 - 900) + 900
          )}/${Math.round(Math.random() * (700 - 600) + 500)}`}
          className={s.img2}
        />
        <img
          src={`https://picsum.photos/${Math.round(
            Math.random() * (1080 - 900) + 900
          )}/${Math.round(Math.random() * (700 - 600) + 500)}`}
          className={s.img2}
        />
        <img
          src={`https://picsum.photos/${Math.round(
            Math.random() * (1080 - 900) + 900
          )}/${Math.round(Math.random() * (700 - 600) + 500)}`}
          className={s.img2}
        />
        <img
          src={`https://picsum.photos/${Math.round(
            Math.random() * (1080 - 900) + 900
          )}/${Math.round(Math.random() * (700 - 600) + 500)}`}
          className={s.img2}
        />
        <img
          src={`https://picsum.photos/${Math.round(
            Math.random() * (1080 - 900) + 900
          )}/${Math.round(Math.random() * (700 - 600) + 500)}`}
          className={s.img2}
        />
        <img
          src={`https://picsum.photos/${Math.round(
            Math.random() * (1080 - 900) + 900
          )}/${Math.round(Math.random() * (700 - 600) + 500)}`}
          className={s.img2}
        />
        <img
          src={`https://picsum.photos/${Math.round(
            Math.random() * (1080 - 900) + 900
          )}/${Math.round(Math.random() * (700 - 600) + 500)}`}
          className={s.img2}
        />
        <img
          src={`https://picsum.photos/${Math.round(
            Math.random() * (1080 - 900) + 900
          )}/${Math.round(Math.random() * (700 - 600) + 500)}`}
          className={s.img2}
        />
        <img
          src={`https://picsum.photos/${Math.round(
            Math.random() * (1080 - 900) + 900
          )}/${Math.round(Math.random() * (700 - 600) + 500)}`}
          className={s.img2}
        />
        <img
          src={`https://picsum.photos/${Math.round(
            Math.random() * (1080 - 900) + 900
          )}/${Math.round(Math.random() * (700 - 600) + 500)}`}
          className={s.img2}
        />
        <img
          src={`https://picsum.photos/${Math.round(
            Math.random() * (1080 - 900) + 900
          )}/${Math.round(Math.random() * (700 - 600) + 500)}`}
          className={s.img2}
        />
        <img
          src={`https://picsum.photos/${Math.round(
            Math.random() * (1080 - 900) + 900
          )}/${Math.round(Math.random() * (700 - 600) + 500)}`}
          className={s.img2}
        />
        <img
          src={`https://picsum.photos/${Math.round(
            Math.random() * (1080 - 900) + 900
          )}/${Math.round(Math.random() * (700 - 600) + 500)}`}
          className={s.img2}
        />
        <img
          src={`https://picsum.photos/${Math.round(
            Math.random() * (1080 - 900) + 900
          )}/${Math.round(Math.random() * (700 - 600) + 500)}`}
          className={s.img2}
        />
        <img
          src={`https://picsum.photos/${Math.round(
            Math.random() * (1080 - 900) + 900
          )}/${Math.round(Math.random() * (700 - 600) + 500)}`}
          className={s.img2}
        />
        <img
          src={`https://picsum.photos/${Math.round(
            Math.random() * (1080 - 900) + 900
          )}/${Math.round(Math.random() * (700 - 600) + 500)}`}
          className={s.img2}
        />
        <img
          src={`https://picsum.photos/${Math.round(
            Math.random() * (1080 - 900) + 900
          )}/${Math.round(Math.random() * (700 - 600) + 500)}`}
          className={s.img2}
        />
        <img
          src={`https://picsum.photos/${Math.round(
            Math.random() * (1080 - 900) + 900
          )}/${Math.round(Math.random() * (700 - 600) + 500)}`}
          className={s.img2}
        />
        <img
          src={`https://picsum.photos/${Math.round(
            Math.random() * (1080 - 900) + 900
          )}/${Math.round(Math.random() * (700 - 600) + 500)}`}
          className={s.img2}
        />
        <img
          src={`https://picsum.photos/${Math.round(
            Math.random() * (1080 - 900) + 900
          )}/${Math.round(Math.random() * (700 - 600) + 500)}`}
          className={s.img2}
        />
        <img
          src={`https://picsum.photos/${Math.round(
            Math.random() * (1080 - 900) + 900
          )}/${Math.round(Math.random() * (700 - 600) + 500)}`}
          className={s.img2}
        />
        <img
          src={`https://picsum.photos/${Math.round(
            Math.random() * (1080 - 900) + 900
          )}/${Math.round(Math.random() * (700 - 600) + 500)}`}
          className={s.img2}
        />
        <img
          src={`https://picsum.photos/${Math.round(
            Math.random() * (1080 - 900) + 900
          )}/${Math.round(Math.random() * (700 - 600) + 500)}`}
          className={s.img2}
        />
        <img
          src={`https://picsum.photos/${Math.round(
            Math.random() * (1080 - 900) + 900
          )}/${Math.round(Math.random() * (700 - 600) + 500)}`}
          className={s.img2}
        />
        <img
          src={`https://picsum.photos/${Math.round(
            Math.random() * (1080 - 900) + 900
          )}/${Math.round(Math.random() * (700 - 600) + 500)}`}
          className={s.img2}
        />
        <img
          src={`https://picsum.photos/${Math.round(
            Math.random() * (1080 - 900) + 900
          )}/${Math.round(Math.random() * (700 - 600) + 500)}`}
          className={s.img2}
        />
        <img
          src={`https://picsum.photos/${Math.round(
            Math.random() * (1080 - 900) + 900
          )}/${Math.round(Math.random() * (700 - 600) + 500)}`}
          className={s.img2}
        />
        <img
          src={`https://picsum.photos/${Math.round(
            Math.random() * (1080 - 900) + 900
          )}/${Math.round(Math.random() * (700 - 600) + 500)}`}
          className={s.img2}
        />
        <img
          src={`https://picsum.photos/${Math.round(
            Math.random() * (1080 - 900) + 900
          )}/${Math.round(Math.random() * (700 - 600) + 500)}`}
          className={s.img2}
        />
        <img
          src={`https://picsum.photos/${Math.round(
            Math.random() * (1080 - 900) + 900
          )}/${Math.round(Math.random() * (700 - 600) + 500)}`}
          className={s.img2}
        />
        <img
          src={`https://picsum.photos/${Math.round(
            Math.random() * (1080 - 900) + 900
          )}/${Math.round(Math.random() * (700 - 600) + 500)}`}
          className={s.img2}
        />
        <img
          src={`https://picsum.photos/${Math.round(
            Math.random() * (1080 - 900) + 900
          )}/${Math.round(Math.random() * (700 - 600) + 500)}`}
          className={s.img2}
        />
        <img
          src={`https://picsum.photos/${Math.round(
            Math.random() * (1080 - 900) + 900
          )}/${Math.round(Math.random() * (700 - 600) + 500)}`}
          className={s.img2}
        />
        <img
          src={`https://picsum.photos/${Math.round(
            Math.random() * (1080 - 900) + 900
          )}/${Math.round(Math.random() * (700 - 600) + 500)}`}
          className={s.img2}
        />
        <img
          src={`https://picsum.photos/${Math.round(
            Math.random() * (1080 - 900) + 900
          )}/${Math.round(Math.random() * (700 - 600) + 500)}`}
          className={s.img2}
        />
        <img
          src={`https://picsum.photos/${Math.round(
            Math.random() * (1080 - 900) + 900
          )}/${Math.round(Math.random() * (700 - 600) + 500)}`}
          className={s.img2}
        />
        <img
          src={`https://picsum.photos/${Math.round(
            Math.random() * (1080 - 900) + 900
          )}/${Math.round(Math.random() * (700 - 600) + 500)}`}
          className={s.img2}
        />
        <img
          src={`https://picsum.photos/${Math.round(
            Math.random() * (1080 - 900) + 900
          )}/${Math.round(Math.random() * (700 - 600) + 500)}`}
          className={s.img2}
        />
        <img
          src={`https://picsum.photos/${Math.round(
            Math.random() * (1080 - 900) + 900
          )}/${Math.round(Math.random() * (700 - 600) + 500)}`}
          className={s.img2}
        />
        <img
          src={`https://picsum.photos/${Math.round(
            Math.random() * (1080 - 900) + 900
          )}/${Math.round(Math.random() * (700 - 600) + 500)}`}
          className={s.img2}
        />
        <img
          src={`https://picsum.photos/${Math.round(
            Math.random() * (1080 - 900) + 900
          )}/${Math.round(Math.random() * (700 - 600) + 500)}`}
          className={s.img2}
        />
        <img
          src={`https://picsum.photos/${Math.round(
            Math.random() * (1080 - 900) + 900
          )}/${Math.round(Math.random() * (700 - 600) + 500)}`}
          className={s.img2}
        />
        <img
          src={`https://picsum.photos/${Math.round(
            Math.random() * (1080 - 900) + 900
          )}/${Math.round(Math.random() * (700 - 600) + 500)}`}
          className={s.img2}
        />
        <img
          src={`https://picsum.photos/${Math.round(
            Math.random() * (1080 - 900) + 900
          )}/${Math.round(Math.random() * (700 - 600) + 500)}`}
          className={s.img2}
        />
        <img
          src={`https://picsum.photos/${Math.round(
            Math.random() * (1080 - 900) + 900
          )}/${Math.round(Math.random() * (700 - 600) + 500)}`}
          className={s.img2}
        />
        <img
          src={`https://picsum.photos/${Math.round(
            Math.random() * (1080 - 900) + 900
          )}/${Math.round(Math.random() * (700 - 600) + 500)}`}
          className={s.img2}
        />
        <img
          src={`https://picsum.photos/${Math.round(
            Math.random() * (1080 - 900) + 900
          )}/${Math.round(Math.random() * (700 - 600) + 500)}`}
          className={s.img2}
        />
        <img
          src={`https://picsum.photos/${Math.round(
            Math.random() * (1080 - 900) + 900
          )}/${Math.round(Math.random() * (700 - 600) + 500)}`}
          className={s.img2}
        />
        <img
          src={`https://picsum.photos/${Math.round(
            Math.random() * (1080 - 900) + 900
          )}/${Math.round(Math.random() * (700 - 600) + 500)}`}
          className={s.img2}
        />
        <img
          src={`https://picsum.photos/${Math.round(
            Math.random() * (1080 - 900) + 900
          )}/${Math.round(Math.random() * (700 - 600) + 500)}`}
          className={s.img2}
        />
        <img
          src={`https://picsum.photos/${Math.round(
            Math.random() * (1080 - 900) + 900
          )}/${Math.round(Math.random() * (700 - 600) + 500)}`}
          className={s.img2}
        />
        <img
          src={`https://picsum.photos/${Math.round(
            Math.random() * (1080 - 900) + 900
          )}/${Math.round(Math.random() * (700 - 600) + 500)}`}
          className={s.img2}
        />
        <img
          src={`https://picsum.photos/${Math.round(
            Math.random() * (1080 - 900) + 900
          )}/${Math.round(Math.random() * (700 - 600) + 500)}`}
          className={s.img2}
        />
        <img
          src={`https://picsum.photos/${Math.round(
            Math.random() * (1080 - 900) + 900
          )}/${Math.round(Math.random() * (700 - 600) + 500)}`}
          className={s.img2}
        />
        <img
          src={`https://picsum.photos/${Math.round(
            Math.random() * (1080 - 900) + 900
          )}/${Math.round(Math.random() * (700 - 600) + 500)}`}
          className={s.img2}
        />
        <img
          src={`https://picsum.photos/${Math.round(
            Math.random() * (1080 - 900) + 900
          )}/${Math.round(Math.random() * (700 - 600) + 500)}`}
          className={s.img2}
        />
        <img
          src={`https://picsum.photos/${Math.round(
            Math.random() * (1080 - 900) + 900
          )}/${Math.round(Math.random() * (700 - 600) + 500)}`}
          className={s.img2}
        />
        <img
          src={`https://picsum.photos/${Math.round(
            Math.random() * (1080 - 900) + 900
          )}/${Math.round(Math.random() * (700 - 600) + 500)}`}
          className={s.img2}
        />
        <img
          src={`https://picsum.photos/${Math.round(
            Math.random() * (1080 - 900) + 900
          )}/${Math.round(Math.random() * (700 - 600) + 500)}`}
          className={s.img2}
        />
        <img
          src={`https://picsum.photos/${Math.round(
            Math.random() * (1080 - 900) + 900
          )}/${Math.round(Math.random() * (700 - 600) + 500)}`}
          className={s.img2}
        />
        <img
          src={`https://picsum.photos/${Math.round(
            Math.random() * (1080 - 900) + 900
          )}/${Math.round(Math.random() * (700 - 600) + 500)}`}
          className={s.img2}
        />
        <img
          src={`https://picsum.photos/${Math.round(
            Math.random() * (1080 - 900) + 900
          )}/${Math.round(Math.random() * (700 - 600) + 500)}`}
          className={s.img2}
        />
        <img
          src={`https://picsum.photos/${Math.round(
            Math.random() * (1080 - 900) + 900
          )}/${Math.round(Math.random() * (700 - 600) + 500)}`}
          className={s.img2}
        />
        <img
          src={`https://picsum.photos/${Math.round(
            Math.random() * (1080 - 900) + 900
          )}/${Math.round(Math.random() * (700 - 600) + 500)}`}
          className={s.img2}
        />
        <img
          src={`https://picsum.photos/${Math.round(
            Math.random() * (1080 - 900) + 900
          )}/${Math.round(Math.random() * (700 - 600) + 500)}`}
          className={s.img2}
        />
        <img
          src={`https://picsum.photos/${Math.round(
            Math.random() * (1080 - 900) + 900
          )}/${Math.round(Math.random() * (700 - 600) + 500)}`}
          className={s.img2}
        />
        <img
          src={`https://picsum.photos/${Math.round(
            Math.random() * (1080 - 900) + 900
          )}/${Math.round(Math.random() * (700 - 600) + 500)}`}
          className={s.img2}
        />
        <img
          src={`https://picsum.photos/${Math.round(
            Math.random() * (1080 - 900) + 900
          )}/${Math.round(Math.random() * (700 - 600) + 500)}`}
          className={s.img2}
        />
        <img
          src={`https://picsum.photos/${Math.round(
            Math.random() * (1080 - 900) + 900
          )}/${Math.round(Math.random() * (700 - 600) + 500)}`}
          className={s.img2}
        />
        <img
          src={`https://picsum.photos/${Math.round(
            Math.random() * (1080 - 900) + 900
          )}/${Math.round(Math.random() * (700 - 600) + 500)}`}
          className={s.img2}
        />
        <img
          src={`https://picsum.photos/${Math.round(
            Math.random() * (1080 - 900) + 900
          )}/${Math.round(Math.random() * (700 - 600) + 500)}`}
          className={s.img2}
        />
        <img
          src={`https://picsum.photos/${Math.round(
            Math.random() * (1080 - 900) + 900
          )}/${Math.round(Math.random() * (700 - 600) + 500)}`}
          className={s.img2}
        />
        <img
          src={`https://picsum.photos/${Math.round(
            Math.random() * (1080 - 900) + 900
          )}/${Math.round(Math.random() * (700 - 600) + 500)}`}
          className={s.img2}
        />
        <img
          src={`https://picsum.photos/${Math.round(
            Math.random() * (1080 - 900) + 900
          )}/${Math.round(Math.random() * (700 - 600) + 500)}`}
          className={s.img2}
        />
        <img
          src={`https://picsum.photos/${Math.round(
            Math.random() * (1080 - 900) + 900
          )}/${Math.round(Math.random() * (700 - 600) + 500)}`}
          className={s.img2}
        />
        <img
          src={`https://picsum.photos/${Math.round(
            Math.random() * (1080 - 900) + 900
          )}/${Math.round(Math.random() * (700 - 600) + 500)}`}
          className={s.img2}
        />
        <img
          src={`https://picsum.photos/${Math.round(
            Math.random() * (1080 - 900) + 900
          )}/${Math.round(Math.random() * (700 - 600) + 500)}`}
          className={s.img2}
        />
        <img
          src={`https://picsum.photos/${Math.round(
            Math.random() * (1080 - 900) + 900
          )}/${Math.round(Math.random() * (700 - 600) + 500)}`}
          className={s.img2}
        />
        <img
          src={`https://picsum.photos/${Math.round(
            Math.random() * (1080 - 900) + 900
          )}/${Math.round(Math.random() * (700 - 600) + 500)}`}
          className={s.img2}
        />
        <img
          src={`https://picsum.photos/${Math.round(
            Math.random() * (1080 - 900) + 900
          )}/${Math.round(Math.random() * (700 - 600) + 500)}`}
          className={s.img2}
        />
        <img
          src={`https://picsum.photos/${Math.round(
            Math.random() * (1080 - 900) + 900
          )}/${Math.round(Math.random() * (700 - 600) + 500)}`}
          className={s.img2}
        />
        <img
          src={`https://picsum.photos/${Math.round(
            Math.random() * (1080 - 900) + 900
          )}/${Math.round(Math.random() * (700 - 600) + 500)}`}
          className={s.img2}
        />
        <img
          src={`https://picsum.photos/${Math.round(
            Math.random() * (1080 - 900) + 900
          )}/${Math.round(Math.random() * (700 - 600) + 500)}`}
          className={s.img2}
        />
        <img
          src={`https://picsum.photos/${Math.round(
            Math.random() * (1080 - 900) + 900
          )}/${Math.round(Math.random() * (700 - 600) + 500)}`}
          className={s.img2}
        />
      </div>
    </div>
  );
};

export default Search;

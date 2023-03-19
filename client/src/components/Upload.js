import React, { useState } from 'react';
import s from './styles/Upload.module.css';
import DoneIcon from '@mui/icons-material/Done';
import axios from 'axios';

const Upload = () => {
  const [data, setData] = useState({
    description: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setData((data) => {
      return {
        ...data,
        [name]: value
      };
    });
  };

  const handleClick = async (e) => {
    try {
      await axios.post('/:id', data);
    } catch (error) {}
  };

  return (
    <div className={s.container}>
      <div className={s.wrapper}>
        <div className={s.upload}>
          Select photo to post
          <input type="file" className={s.input} />
        </div>
        <div className={s.disc}>
          Description
          <textarea
            name="description"
            value={setData.value}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <div className={s.btndiv}>
          Click here to post your Photo
          <button type="submit" className={s.btn} onClick={handleClick}>
            <DoneIcon />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Upload;

import React from 'react';
import logo from '../assets/logo.png';
import { Card, CardMedia } from '@mui/material';

const RightSection = () => {

  return (
    <div>
      <CardMedia>
        <img src={logo} alt='' />
      </CardMedia>
    </div>
  );
};

export default RightSection;

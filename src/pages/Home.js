import { Grid } from '@mui/material';
import React from 'react';
import Auth from '../components/Auth';
import RightSection from '../components/RightSection';

const Home = () => {
  return (
    <Grid container sx={{ my: '150px' }}>
      <Grid item xs={6}>
        <Auth />
      </Grid>
      <Grid item xs={6}>
        <RightSection />
      </Grid>
    </Grid>
  );
};

export default Home;

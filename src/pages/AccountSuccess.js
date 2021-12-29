import React from 'react';
import Typography from '@mui/material/Typography';

const AccountSuccess = ({ user }) => {
  const loginPage = () => {
    window.location.reload();
  };
  return (
    <div>
      <Typography align='center' variant='h5' style={{ marginTop: '15%' }}>
        Account Created Successfully for {user.name}
      </Typography>
      <Typography component='div' sx={{ textAlign: 'center' }}>
        <div style={{ color: 'orange' }}>{user.name}</div> Email:{' '}
        <div style={{ color: 'orange' }}>{user.email}</div> Please{' '}
        <span style={{ color: 'green', cursor: 'pointer' }} onClick={loginPage}>
          Login
        </span>{' '}
        to see jobs.
      </Typography>
      <Typography align='center' variant='subtitle1' sx={{ padding: '30px' }}>
        I had to create this page since the API doesn't provide JWT token while
        signing up
      </Typography>
    </div>
  );
};

export default AccountSuccess;

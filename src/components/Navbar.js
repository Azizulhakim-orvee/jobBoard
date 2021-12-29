import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import AddIcon from '@mui/icons-material/Add';
import { Grid } from '@material-ui/core';
import { getUser, removeUserSession } from '../utils/Common';

const Navbar = () => {
  const user = getUser();
  const navigate = useNavigate();
  const handleLogOut = () => {
    removeUserSession();
    navigate('/');
  };
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position='static' color='primary' sx={{ padding: '20px 0px' }}>
          <Toolbar>
            <Typography variant='div' sx={{ flexGrow: 1 }}>
              <Typography variant='h4'>Techforing</Typography>

              <Typography gutterBottom variant='subtitle2'>
                Shaping Tomorrows's Cybersecurity
              </Typography>
            </Typography>
            <AccountCircleIcon sx={{ marginRight: '20px' }} fontSize='large' />
            <Typography variant='h4' sx={{ marginRight: '20px' }}>
              {user.full_name.toUpperCase()}
            </Typography>

            <Button
              color='inherit'
              sx={{ backgroundColor: '#E24848' }}
              onClick={handleLogOut}
            >
              Log Out
            </Button>
          </Toolbar>
        </AppBar>
      </Box>
      <Grid container justifyContent='flex-end'>
        <Button
          sx={{ mx: 20, my: 10, backgroundColor: '#00A300', color: 'black' }}
          onClick={() => navigate('/createjob')}
        >
          {' '}
          <AddIcon />
          Create Jobs
        </Button>
      </Grid>
    </>
  );
};

export default Navbar;

import React, { useState } from 'react';
import { Grid, Paper, TextField, Button, Typography } from '@material-ui/core';
import { Box } from '@mui/material';
import { saveUserSession } from '../utils/Common';
import { useNavigate } from 'react-router-dom';
import loginService from '../services/loginService';

const paperStyle = {
  padding: 30,
  minHeight: '55vh',
  width: 450,
  margin: '0 auto',
};
const marginTop = { marginTop: '30px' };

const btnstyle = { margin: '5px 0', backgroundColor: '#16203b' };

const LogIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  const handleSingIn = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      setError(true);
      return;
    }
    try {
      const data = await loginService.login({ email, password });
      saveUserSession(data.access, data.user);
      navigate('/jobs');
    } catch (error) {
      setError(true);
    }
  };

  return (
    <Grid>
      <Paper style={paperStyle}>
        <Grid align='center'>
          <Typography variant='h4'>SIGN IN</Typography>
        </Grid>
        <form>
          <TextField
            style={marginTop}
            label='Email'
            placeholder='Enter email'
            fullWidth
            variant='outlined'
            value={email}
            required
            onChange={(e) => {
              setEmail(e.target.value);
              setError(false);
            }}
          />
          <TextField
            label='Password'
            placeholder='Enter password'
            type='password'
            fullWidth
            variant='outlined'
            required
            value={password}
            style={marginTop}
            onChange={(e) => {
              setPassword(e.target.value);
              setError(false);
            }}
          />

          <Box
            textAlign='center'
            sx={{
              marginTop: '20px',
            }}
          >
            <Button
              type='submit'
              variant='contained'
              color='secondary'
              style={btnstyle}
              onClick={handleSingIn}
            >
              Sign IN
            </Button>
            {error && (
              <p style={{ color: 'red' }}>
                Please enter a valid email and password
              </p>
            )}
          </Box>
        </form>
      </Paper>
    </Grid>
  );
};

export default LogIn;

import React, { useState } from 'react';
import {
  Grid,
  Paper,
  Typography,
  TextField,
  Button,
  styled,
} from '@material-ui/core';
import { Box, MenuItem } from '@mui/material';
import axios from 'axios';
import AccountSuccess from '../pages/AccountSuccess';

const MyError = styled(Typography)({
  color: 'red',
  marginTop: '5px',
});

const SignUp = () => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passError, setPassError] = useState(false);
  const [errors, setErrors] = useState([]);
  const [fullname, setFullname] = useState('');
  const [email, setEmail] = useState('');
  const [dob, setDob] = useState(new Date());
  const [gender, setGender] = useState('');
  const [phone, setPhone] = useState('');
  const [success, setSuccess] = useState(false);
  const [user, setUser] = useState({
    name: '',
    email: '',
  });

  const handleSignUp = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) return setPassError(true);

    try {
      const formData = {
        full_name: fullname,
        email: email,
        birthDate: dob,
        gender: gender,
        phone_number: phone,
        password: password,
      };
      const { data } = await axios.post(
        'https://tf-practical.herokuapp.com/api/register/',
        formData,
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
      if (data.full_name && data.email) {
        setUser({
          name: data.full_name,
          email: data.email,
        });
        setSuccess(true);
      }
    } catch (error) {
      const getErrors = [];
      const getErrorsa = error.response.data;
      for (let err in getErrorsa) {
        getErrors.push({ [err]: getErrorsa[err][0] });
      }
      setErrors(getErrors);
    }
  };

  const showError = (name) => {
    if (errors.length === 0) return;
    const e = errors.filter((singleError) => singleError.hasOwnProperty(name));
    if (e.length > 0) return e[0][name];
    return '';
  };

  const emptyError = (name) => {
    const e = errors.filter((singleError) => singleError.hasOwnProperty(name));
    if (e.length > 0) {
      e[0][name] = '';
      setErrors((prevError) => [...prevError, e[0]]);
    }
    return '';
  };

  const paperStyle = {
    padding: 30,
    minHeight: '55vh',
    width: 450,
    margin: '0 auto',
  };

  const marginTop = { marginTop: 20 };
  const btnstyle = { margin: '5px 0', backgroundColor: '#16203b' };
  return (
    <>
      {!success ? (
        <Grid>
          <Paper style={paperStyle}>
            <Grid align='center'>
              <Typography variant='h4'>SIGN UP</Typography>
              <Typography gutterBottom variant='subtitle1'>
                Register To Get A Job
              </Typography>
            </Grid>
            <form>
              <Grid container spacing={4}>
                <Grid item xs={6}>
                  <TextField
                    variant='outlined'
                    fullWidth
                    label='Full Name'
                    placeholder='Enter your full name'
                    style={marginTop}
                    value={fullname}
                    onChange={(e) => {
                      setFullname(e.target.value);
                      setPassError(false);
                      emptyError('full_name');
                    }}
                  />
                  <MyError>{showError('full_name')}</MyError>
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    variant='outlined'
                    fullWidth
                    label='Phone Number'
                    placeholder='Enter your phone number'
                    style={marginTop}
                    value={phone}
                    onChange={(e) => {
                      setPhone(e.target.value);
                      setPassError(false);
                      emptyError('phone');
                    }}
                  />
                  <MyError>{showError('phone')}</MyError>
                </Grid>

                <Grid item xs={6}>
                  <TextField
                    variant='outlined'
                    fullWidth
                    id='date'
                    label='Date Of Birth'
                    type='date'
                    style={marginTop}
                    value={dob}
                    onChange={(e) => {
                      setDob(e.target.value);
                      setPassError(false);
                      emptyError('birthDate');
                    }}
                    InputLabelProps={{
                      shrink: true,
                    }}
                  />
                  <MyError>{showError('birthDate')}</MyError>
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    variant='outlined'
                    fullWidth
                    select
                    label='Gender'
                    style={marginTop}
                    value={gender}
                    onChange={(e) => {
                      setGender(e.target.value);
                      setPassError(false);
                      emptyError('gender');
                    }}
                  >
                    <MenuItem value='Male'>Male</MenuItem>
                    <br />
                    <br />
                    <MenuItem value='Female'>Female</MenuItem>
                    <br />
                    <br />
                    <MenuItem value='Other'>Other</MenuItem>
                  </TextField>
                  <MyError>{showError('gender')}</MyError>
                </Grid>
              </Grid>
              <Grid container>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label='Email'
                    placeholder='Enter your email'
                    variant='outlined'
                    style={marginTop}
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      setPassError(false);
                      emptyError('email');
                    }}
                  />
                  <MyError>{showError('email')}</MyError>
                </Grid>
              </Grid>

              <Grid container spacing={4}>
                <Grid item xs={6}>
                  <TextField
                    variant='outlined'
                    fullWidth
                    label='Password'
                    type='password'
                    placeholder='Enter your password'
                    style={marginTop}
                    value={password}
                    onChange={(e) => {
                      setPassword(e.target.value);
                      setPassError(false);
                      emptyError('password');
                    }}
                  />
                  <MyError>{showError('password')}</MyError>
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    variant='outlined'
                    fullWidth
                    type='password'
                    label='Confirm Password'
                    placeholder='Confirm your password'
                    style={marginTop}
                    value={confirmPassword}
                    onChange={(e) => {
                      setConfirmPassword(e.target.value);
                      setPassError(false);
                    }}
                  />
                </Grid>
              </Grid>

              <Box textAlign='center'>
                <Button
                  type='submit'
                  variant='contained'
                  color='secondary'
                  style={btnstyle}
                  onClick={(e) => handleSignUp(e)}
                >
                  Sign up
                </Button>
                {passError && (
                  <p style={{ color: 'red' }}>Password didn't match</p>
                )}
              </Box>
            </form>
          </Paper>
        </Grid>
      ) : (
        <AccountSuccess user={user} />
      )}
    </>
  );
};

export default SignUp;

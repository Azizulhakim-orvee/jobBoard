import React, { useState } from 'react';
import { Grid, Paper, TextField, Button } from '@material-ui/core';
import { Box, MenuItem } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import jobService from '../services/jobService';

const CreateJobs = () => {
  const [error, setError] = useState(false);
  const [fieldData, setFieldData] = useState({
    jobTitle: '',
    lastDateOfApply: '',
    level: '',
    shift: '',
    location: '',
    vacancies: '',
    jobType: '',
    jobDescription: '',
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const formFields = { ...fieldData };
    formFields[e.target.name] = e.target.value;
    setFieldData(formFields);
  };

  const handleCancel = (e) => {
    e.preventDefault();
    navigate('/jobs');
  };

  const handleSave = async (e) => {
    e.preventDefault();
    if (
      !fieldData.shift ||
      !fieldData.jobTitle ||
      !fieldData.jobType ||
      !fieldData.location ||
      !fieldData.vacancies ||
      !fieldData.level ||
      !fieldData.jobDescription ||
      !fieldData.lastDateOfApply
    )
      return setError(true);
    try {
      const res = await jobService.addJob(fieldData);
      if (res.id) {
        navigate('/jobs');
      }
    } catch (err) {
      console.log(err);
      setError(true);
    }
  };

  const paperStyle = {
    padding: 30,
    minHeight: '30vh',
    width: 450,
    margin: '0 auto',
  };

  const headerStyle = { margin: 0 };
  const marginTop = { marginTop: 18 };
  const btnstyle = {
    margin: '5px 0',
    backgroundColor: '#00A300',
    color: 'black',
  };
  const btnstyle_2 = {
    margin: '5px 0',
    backgroundColor: '#FF0000',
    color: 'white',
  };
  return (
    <Grid>
      <Paper style={paperStyle}>
        <Grid align='center'>
          <h2 style={headerStyle}>Create Job</h2>
        </Grid>
        <form>
          <Grid container>
            <Grid item xs={3}>
              <h3>Job Title</h3>
            </Grid>

            <Grid item xs={9}>
              <TextField
                variant='outlined'
                fullWidth
                size='small'
                name='jobTitle'
                style={marginTop}
                value={fieldData.jobTitle}
                onChange={(e) => {
                  handleChange(e);
                  // setJobTitle(e.target.value);
                  setError(false);
                }}
              />
            </Grid>
          </Grid>

          <Grid container>
            <Grid item xs={3}>
              <h3>Shift</h3>
            </Grid>

            <Grid item xs={9}>
              <TextField
                variant='outlined'
                fullWidth
                size='small'
                style={marginTop}
                name='shift'
                select
                value={fieldData.shift}
                onChange={(e) => {
                  handleChange(e);
                  // setShift(e.target.value);
                  setError(false);
                }}
              >
                <MenuItem value='day'>Day</MenuItem>

                <MenuItem value='night'>Night</MenuItem>
              </TextField>
            </Grid>
          </Grid>
          <Grid container>
            <Grid item xs={3}>
              <h3>Level</h3>
            </Grid>

            <Grid item xs={9}>
              <TextField
                variant='outlined'
                fullWidth
                size='small'
                style={marginTop}
                name='level'
                select
                value={fieldData.level}
                onChange={(e) => {
                  handleChange(e);
                  setError(false);
                }}
              >
                <MenuItem value='Senior'>Senior</MenuItem>

                <MenuItem value='Mid'>Mid</MenuItem>

                <MenuItem value='Junior'>Junior</MenuItem>
              </TextField>
            </Grid>
          </Grid>

          <Grid container>
            <Grid item xs={3}>
              <h3>Job Type</h3>
            </Grid>

            <Grid item xs={9}>
              <TextField
                variant='outlined'
                fullWidth
                size='small'
                style={marginTop}
                select
                name='jobType'
                value={fieldData.jobType}
                onChange={(e) => {
                  handleChange(e);
                  setError(false);
                }}
              >
                <MenuItem value='pert_time'>Part Time</MenuItem>
                <MenuItem value='full_time'>Full Time</MenuItem>
              </TextField>
            </Grid>
          </Grid>

          <Grid container>
            <Grid item xs={3}>
              <h3>Location</h3>
            </Grid>

            <Grid item xs={9}>
              <TextField
                variant='outlined'
                fullWidth
                size='small'
                name='location'
                style={marginTop}
                value={fieldData.location}
                onChange={(e) => {
                  handleChange(e);
                  setError(false);
                }}
              />
            </Grid>
          </Grid>

          <Grid container>
            <Grid item xs={3}>
              <h3>Vacancies</h3>
            </Grid>

            <Grid item xs={9}>
              <TextField
                variant='outlined'
                fullWidth
                size='small'
                name='vacancies'
                style={marginTop}
                type='number'
                value={fieldData.vacancies}
                onChange={(e) => {
                  handleChange(e);
                  setError(false);
                }}
              />
            </Grid>
          </Grid>

          <Grid container>
            <Grid item xs={3}>
              <h3>Deadline</h3>
            </Grid>

            <Grid item xs={9}>
              <TextField
                variant='outlined'
                fullWidth
                id='date'
                label='Last Date of Apply'
                type='date'
                name='lastDateOfApply'
                style={marginTop}
                value={fieldData.lastDateOfApply}
                onChange={(e) => {
                  handleChange(e);
                  setError(false);
                }}
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </Grid>
          </Grid>

          <Grid container>
            <Grid item xs={3}>
              <h3>Job Description</h3>
            </Grid>

            <Grid item xs={9}>
              <TextField
                variant='outlined'
                fullWidth
                style={marginTop}
                multiline
                name='jobDescription'
                rows={4}
                value={fieldData.jobDescription}
                onChange={(e) => {
                  handleChange(e);
                  setError(false);
                }}
              ></TextField>
            </Grid>
          </Grid>
          <br />

          <br />
          {error && (
            <center>
              <p style={{ color: 'red' }}>Please fill up all the fields</p>
            </center>
          )}

          <Box textAlign='justify'>
            <Button
              type='submit'
              variant='contained'
              color='secondary'
              style={btnstyle}
              onClick={(e) => handleSave(e)}
            >
              Save
            </Button>
            <br />
            <br />
            <Button
              type='submit'
              variant='contained'
              color='secondary'
              style={btnstyle_2}
              onClick={(e) => handleCancel(e)}
            >
              Cancel
            </Button>
          </Box>
        </form>
      </Paper>
    </Grid>
  );
};

export default CreateJobs;

import React, { useEffect, useState } from 'react';
import { Grid, Paper, TextField, Button } from '@material-ui/core';
import { Box, MenuItem } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { getToken } from '../utils/Common';
import { useParams } from 'react-router-dom';
import jobService from '../services/jobService';

const EditJobs = () => {
  const [error, setError] = useState(false);
  let { ID } = useParams();
  const token = getToken();

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

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await jobService.getJobByID(ID);
        setFieldData(data);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, [token, ID]);

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
      await jobService.updateJob(ID, fieldData);
      navigate('/jobs');
    } catch (err) {
      console.log(err);
      setError(true);
    }
  };

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
  const paperStyle = {
    padding: 30,
    minHeight: '30vh',
    width: 450,
    margin: '0 auto',
  };
  return (
    <Grid>
      <Paper style={paperStyle}>
        <Grid align='center'>
          <h2>Edit Job</h2>
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
                select
                name='shift'
                value={fieldData.shift}
                onChange={(e) => {
                  handleChange(e);
               
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
                select
                name='level'
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
                <MenuItem value='full_time'>Part Time</MenuItem>

                <MenuItem value='pert_time'>Full Time</MenuItem>
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
                style={marginTop}
                name='location'
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
                type="number"
                size='small'
                style={marginTop}
                name='vacancies'
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
                label='Last date of apply'
                type='date'
                style={marginTop}
                name='lastDateOfApply'
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
                rows={4}
                name='jobDescription'
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
              Update
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

export default EditJobs;

import React, { useEffect, useState } from 'react';
import { Grid, Paper, Button,  } from '@material-ui/core';
import { Box,  Typography } from '@mui/material';

import { useNavigate } from 'react-router-dom';

import { useParams } from 'react-router-dom';
import jobService from '../services/jobService';

const ViewJob = () => {
  const [jobData, setJobData] = useState({});
  let { ID } = useParams();
  useEffect(() => {
    const getData = async () => {
      try {
        const responseData = await jobService.getJobByID(ID);
        setJobData(responseData);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, [ID]);
  const navigate = useNavigate();

  const handleCancel = (e) => {
    e.preventDefault();
    navigate('/jobs');
  };
  const marginTop = { marginTop: '12px' };

  const btnstyle_2 = {
    margin: '5px 0',
    backgroundColor: '#FF0000',
    color: 'white',
  };
  const paperStyle = {
    padding: 30,
    minHeight: '30vh',
    width: '800px',
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
              <h3>Job Title :</h3>
            </Grid>

            <Grid item xs={9}>
              <Typography variant='h4' style={marginTop}>
                {jobData?.jobTitle}
              </Typography>
            </Grid>
          </Grid>

          <Grid container>
            <Grid item xs={3}>
              <h3>Shift</h3>
            </Grid>

            <Grid item xs={9}>
              <Typography variant='h4' style={marginTop}>
                {jobData?.shift}
              </Typography>
            </Grid>
          </Grid>
          <Grid container>
            <Grid item xs={3}>
              <h3>Level</h3>
            </Grid>

            <Grid item xs={9}>
              <Typography variant='h4' style={marginTop}>
                {jobData?.level}
              </Typography>
            </Grid>
          </Grid>

          <Grid container>
            <Grid item xs={3}>
              <h3>Job Type</h3>
            </Grid>

            <Grid item xs={9}>
              <Typography variant='h4' style={marginTop}>
                {jobData?.jobType === 'pert_time' ? 'Part time' : 'Full Time'}
              </Typography>
            </Grid>
          </Grid>

          <Grid container>
            <Grid item xs={3}>
              <h3>Location</h3>
            </Grid>

            <Grid item xs={9}>
              <Typography variant='h4' style={marginTop}>
                {jobData?.location}
              </Typography>
            </Grid>
          </Grid>

          <Grid container>
            <Grid item xs={3}>
              <h3>Vacancies</h3>
            </Grid>

            <Grid item xs={9}>
              <Typography variant='h4' style={marginTop}>
                {jobData?.vacancies}
              </Typography>
            </Grid>
          </Grid>

          <Grid container>
            <Grid item xs={3}>
              <h3>Deadline</h3>
            </Grid>

            <Grid item xs={9}>
              <Typography variant='h4' style={marginTop}>
                {jobData?.lastDateOfApply}
              </Typography>
            </Grid>
          </Grid>

          <Grid container>
            <Grid item xs={3}>
              <h3>Job Description</h3>
            </Grid>

            <Grid item xs={9}>
              <Typography variant='h4' style={marginTop}>
                {jobData?.jobDescription}
              </Typography>
            </Grid>
          </Grid>

          <Box textAlign='justify'>
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

export default ViewJob;

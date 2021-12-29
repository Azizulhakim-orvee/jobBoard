import React, { useState } from 'react';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import SignUp from './SignUp';
import LogIn from './LogIn';

const Auth = () => {
  const [value, setValue] = useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const paperStyle = { width: 510, margin: '20px auto' };

  function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
      <div
        role='tabpanel'
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box>
            <Typography component={'div'}>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }
  return (
    <Paper elevation={20} component={'div'} style={paperStyle}>
      <Tabs
        value={value}
        indicatorColor='primary'
        textColor='primary'
        onChange={handleChange}
        variant='fullWidth'
        aria-label='disabled tabs example'
        TabIndicatorProps={{
          style: {
            backgroundColor: '#16203b',
          },
        }}
      >
        <Tab label='Sign In' />

        <Tab label='Sign Up' />
      </Tabs>

      <TabPanel value={value} index={0}>
        <LogIn handleChange={handleChange} />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <SignUp />
      </TabPanel>
    </Paper>
  );
};

export default Auth;

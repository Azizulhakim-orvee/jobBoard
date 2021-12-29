import React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import EditIcon from '@mui/icons-material/Edit';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import PreviewIcon from '@mui/icons-material/Preview';
import { Link } from 'react-router-dom';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },

  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

const JobTable = ({ jobs, handleDelete }) => {

  return (
    <TableContainer component={Paper} sx={{ maxWidth: 1400, mx: 'auto' }}>
      <AppBar position='static' color='info'>
        <Toolbar sx={{ mx: 'auto' }}>
          <Typography variant='h4'>Recent Job Posts</Typography>
        </Toolbar>
      </AppBar>
      <Table sx={{ minWidth: 700 }} aria-label='customized table'>
        <TableHead>
          <TableRow>
            <StyledTableCell>POST NAME</StyledTableCell>
            <StyledTableCell>VACANCIES</StyledTableCell>
            <StyledTableCell>SHIFT</StyledTableCell>
            <StyledTableCell>TYPE</StyledTableCell>
            <StyledTableCell>POST DATE</StyledTableCell>
            <StyledTableCell>EXPIRE DATE</StyledTableCell>
            <StyledTableCell>SALARY</StyledTableCell>
            <StyledTableCell>STATUS</StyledTableCell>
            <StyledTableCell>ACTION</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {jobs.map((job) => (
            <StyledTableRow key={job.id}>
              <StyledTableCell component='th' scope='row'>
                {job.jobTitle}
              </StyledTableCell>
              <StyledTableCell>{job.vacancies}</StyledTableCell>
              <StyledTableCell>{job.shift}</StyledTableCell>
              <StyledTableCell>{job.jobType}</StyledTableCell>
              <StyledTableCell>{job.postDate}</StyledTableCell>
              <StyledTableCell>{job.lastDateOfApply}</StyledTableCell>
              <StyledTableCell>
                {' '}
                <span style={{ color: 'gray' }}>N/A</span>{' '}
              </StyledTableCell>
              <StyledTableCell>
                {' '}
                <span style={{ color: 'green' }}>Active</span>{' '}
              </StyledTableCell>
              <StyledTableCell>
                {' '}
                <Link to={`/jobs/${job.id}`}>
                  <EditIcon sx={{ cursor: 'pointer' }} />{' '}
                </Link>
                <DeleteForeverIcon
                  sx={{ cursor: 'pointer' }}
                  onClick={() => handleDelete(job.id)}
                />{' '}
                  <Link to={`/jobs/view/${job.id}`}>
                  <PreviewIcon sx={{ cursor: 'pointer' }}  />{' '}
                </Link>
           
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default JobTable;

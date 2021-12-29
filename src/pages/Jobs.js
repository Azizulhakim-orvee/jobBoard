import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import JobTable from '../components/JobTable';
import { getToken } from '../utils/Common';
import jobService from '../services/jobService';

const Jobs = () => {
  const [jobs, setJobs] = useState([]);
  const token = getToken();

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await jobService.getAllJobs();
        setJobs(data);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, [token]);

  const handleDelete = async (id) => {
    if (!window.confirm('Job will be deleted permanently. Are you sure?'))
      return;
    try {
      const res = await jobService.deleteJobByID(id);
      const filteredJobs = jobs.filter((job) => job.id !== id);
      setJobs(filteredJobs);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <Navbar />
      <JobTable jobs={jobs} handleDelete={handleDelete} />
    </div>
  );
};

export default Jobs;

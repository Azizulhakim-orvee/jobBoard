import requests from './httpService';

class JobService {
  addJob(body) {
    return requests.post(`/job_post/`, body);
  }

  getAllJobs() {
    return requests.get('/job_post');
  }

  getJobByID(id) {
    return requests.get(`/job_update/${id}`);
  }

  deleteJobByID(id) {
    return requests.delete(`/job_update/${id}`);
  }

  updateJob(id, body) {
    return requests.put(`/job_update/${id}/`, body);
  }
}

export default new JobService();

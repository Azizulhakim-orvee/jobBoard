import requests from './httpService';

class LoginService {
  login(data) {
    console.log(data);
    return requests.post('/login/', data);
  }

  register(data) {
    return requests.post('/register/', data);
  }
}

export default new LoginService();

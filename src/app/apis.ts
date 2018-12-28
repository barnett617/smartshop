import { apiUrl } from '../config';

export default {
  data: {
    dev: '/data.json',
    beta: '/api/act/mine/borrow/findProgress.htm',
    prod: '/api/act/mine/borrow/findProgress.htm'
  },
  adminLogin: {
    dev: '/adminLogin.json',
    beta: apiUrl + 'login',
    prod: apiUrl + 'login'
  },
};

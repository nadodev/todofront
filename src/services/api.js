import axios from 'axios';

const api = axios.create({
  baseURL: 'https://taskforday.herokuapp.com'
});
export default api;
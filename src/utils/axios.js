import axios from 'axios';

const customFetch = axios.create({
  baseURL: 'https://cars-api.up.railway.app',
});

export default customFetch;

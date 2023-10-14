import axios from 'axios';

const customFetch = axios.create({
  baseURL: 'https://mhnoor-car-rental-api-e6f2b940d147.herokuapp.com/',
});

export default customFetch;

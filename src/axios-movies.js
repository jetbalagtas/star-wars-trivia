import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://swapi.co/api/people/'
});

export default instance;

import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://swapi.co/api/'
});

export default instance;

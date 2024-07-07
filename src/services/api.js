import axios from 'axios';

const API_BASE_URL = 'https://run.mocky.io/v3';

export const getMortalityTable = () => {
  return axios.get(`${API_BASE_URL}/34e09ec7-75cb-4eab-a177-89af0f74c47b`);
};

export const getCountries = () => {
  return axios.get(`${API_BASE_URL}/b09c6d1a-70a4-4c2c-acc4-845779a4646e`);
};

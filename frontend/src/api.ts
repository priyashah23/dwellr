import axios from 'axios';

export const getProperty = async () => {
  const response = await axios.get('/api/property');
  return response.data;
};
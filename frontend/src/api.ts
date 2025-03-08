import axios from 'axios';

export const getProperties = async () => {
  const response = await axios.get('/api/property');
  return response.data;
};
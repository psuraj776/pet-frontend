import axios from 'axios';

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

export const fetchStatus = async () => {
  try {
    const response = await api.get('/api/auth/status');
    return response.data;
  } catch (error) {
    console.error('Failed to fetch status', error);
    throw error;
  }
};

export const loginUser = async (email, password) => {
  try {
    const response = await api.post('/api/auth/login', { email, password });
    return response.data;
  } catch (error) {
    console.error('Error logging in:', error);
    throw error;
  }
};

export const registerUser = async (email, password, role) => {
  try {
    const response = await api.post('/api/auth/register', { email, password, role });
    return response.data;
  } catch (error) {
    console.error('Error registering:', error);
    throw error;
  }
};

export default api;


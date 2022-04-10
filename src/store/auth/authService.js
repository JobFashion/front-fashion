import axios from 'axios';
import { API_BASE_URL } from '../../config';

const API_URL = API_BASE_URL + '/auth/';

const register = async (userData) => {
  const { data } = await axios.post(API_URL + 'register', userData);
  if (data) {
    // TODO: no authenticar directamente ya que debe confirmar el correo
    localStorage.setItem('user', JSON.stringify(data));
  }
  return data;
};

const login = async (userData) => {
  const { data } = await axios.post(API_URL + 'login', userData);
  if (data) {
    localStorage.setItem('user', JSON.stringify(data));
  }
  return data;
};

const logout = () => {
  localStorage.removeItem('user');
};

const authService = {
  register,
  login,
  logout,
};

export default authService;

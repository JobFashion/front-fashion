import axios from 'axios';
import { API_BASE_URL } from '../config';
import { logout } from '../store/auth/authSlice';

export const myAxios = axios.create({ baseURL: API_BASE_URL });

export const axiosMiddleware = (store) => (next) => (action) => {
  // if (action.type === `${FETCH_ACTION}/fulfilled`) {
  //  setInterceptors(store);
  // }
  setInterceptors(store);

  return next(action);
};

export const setInterceptors = (store) => {
  if (!store) {
    return;
  }
  myAxios.interceptors.request.use((req) => {
    // add auth header with jwt if account is logged in and request is to the api url
    if (localStorage.getItem('user')) {
      req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('user')).token}`;
    }
    return req;
  });

  myAxios.interceptors.response.use(
    (res) => {
      // console.log('inside interceptors', store.getState());
      if (res.status === 201) {
        // console.log('Publicado correctamente');
      }
      return res;
    },
    (err) => {
      // console.log('error interceptado -> error', store.getState());
      if (err.response.status === 401 || err.response.data.message === '401 Unauthorized') {
        // console.log('no autorizado');
        store.dispatch(logout());
      }
      if (err.response.status === 403) {
        // console.log('requiere authorizacion');
        store.dispatch(logout());
      }
      return Promise.reject(err);
    }
  );
};

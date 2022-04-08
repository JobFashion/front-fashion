import { API_BASE_URL } from '../config';

export const authUser = async (userData, type = 'register') => {
  const finalEndpoint = `${API_BASE_URL}/auth/${type}`;

  try {
    return await fetch(finalEndpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify(userData),
    });
  } catch (err) {
    console.error(err);
  }
};

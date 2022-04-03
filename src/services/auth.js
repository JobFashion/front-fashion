import { API_BASE_URL } from './index';

const endpoint = `${API_BASE_URL}/auth`;

export const registerUser = async userData => {
  const finalEndpoint = `${endpoint}/register`;

  try {
    return await fetch(finalEndpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(userData)
    })
      .catch(error => error);
  } catch (err) {
    console.error(err);
  }
}

const userService = {
  registerUser
}

export default userService;

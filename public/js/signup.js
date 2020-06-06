import axios from 'axios';
import { showAlert } from './alert';

export const signup = async (name, email, password, passwordConfirm) => {
  try {
    const result = await axios({
      method: 'POST',
      url: 'http://localhost:8000/api/v1/users/signup',
      data: {
        name,
        email,
        password,
        passwordConfirm,
      },
    });

    if (result.data.status === 'success') {
      showAlert('success', 'Sign up successfully');
      window.setTimeout(() => {
        location.assign('/');
      }, 1500);
    }
  } catch (err) {
    showAlert('error', err.response.data.message);
  }
};

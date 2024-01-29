/* eslint-disable */
import axios from 'axios';

const login = async (email, password) => {
  try {
    const res = await axios({
      method: 'POST',
      url: 'http://127.0.0.1:3000/api/v1/user/login',
      data: {
        email,
        password,
      },
    });

    if (res.data.status === 'success') {
      console.log('Logged in successfully!');
    }
  } catch (err) {
    console.log('error = ');
    console.log(err.response.data);
  }
};

export { login };

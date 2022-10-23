import axios from 'axios';
import { API_BASE_URL } from '../index';

const userLogin = async (data) => {
  return axios({
    method: 'post',
    url: `${API_BASE_URL}/user/login`,
    data,
  })
    .then((res) => res.data)
    .catch((err) => {
      console.log(err);
      return err;
    });
};

export { userLogin };

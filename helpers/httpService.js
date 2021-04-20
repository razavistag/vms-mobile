import axios from 'axios';
import AsyncStorage from '@react-native-community/async-storage';

axios.interceptors.request.use(
  async function (config) {
    let accessToken = await AsyncStorage.getItem('token');
    // let accessToken = '';
    // AsyncStorage.getItem('token').then(value => {
    //   console.log('token from HTTP', value);
    //   accessToken = value;
    // });

    if (accessToken) {
      config.headers = Object.assign(
        {
          Authorization: `Bearer ${accessToken}`,
        },
        config.headers,
      );
    }
    config.baseURL = `http://10.0.2.2:8000/`;

    return config;
  },
  function (error) {
    return Promise.reject(error);
  },
);

export default {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  delete: axios.delete,
  patch: axios.patch,
};

const MODE = import.meta.env.MODE;
let API_BASE_URL = '';

if (MODE === 'development') {
  API_BASE_URL = 'http://localhost:3000';
}

export { API_BASE_URL };

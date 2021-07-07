import axios from 'axios';

export const customers = axios.create({
  baseURL: process.env.REACT_APP_CUSTOMERS_SERVER
});

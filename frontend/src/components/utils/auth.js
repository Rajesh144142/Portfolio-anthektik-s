import axios from 'axios';
import { baseUrl } from './constant';
import cookie from 'js-cookie'
export const setCookie = (key, value) => {
  cookie.set(key, value, { expires: 1 });
};

export const removeCookie = (key) => {
  cookie.remove(key);
};

export const getCookie = (key) => {
  return cookie.get(key);
};

export const setAuthentication = (token) => {
  // console.log('hello')
  setCookie("token", token);
};

export const logOut = () => {
  removeCookie("token");
};

export const isLogin = async () => {

  const token = getCookie("token");

  if (token) {
    const { data } = await axios.post(`${baseUrl}auth/authToken`, { token });
// console.log(data);
    return data.auth;
  }
  return false;
};
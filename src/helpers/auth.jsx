import { USER_TOKEN_KEY } from "../constants/env";

export const setUserToken = (accessToken) => {
  const userTokenObj = {
    access_token: accessToken,
  };
  localStorage.setItem(USER_TOKEN_KEY, JSON.stringify(userTokenObj));
};

export const token = () => {
  return JSON.parse(localStorage.getItem(USER_TOKEN_KEY))?.access_token;
};

export const deleteUserToken = () => {
  localStorage.removeItem(USER_TOKEN_KEY);
};

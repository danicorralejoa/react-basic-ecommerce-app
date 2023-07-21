import { USER_TOKEN_KEY } from "../constants/env";

export const setUserToken = (accessToken, refreshToken) => {
  const userTokenObj = {
    access_token: accessToken,
    refreshtoken: refreshToken,
  };
  localStorage.setItem(USER_TOKEN_KEY, JSON.stringify(userTokenObj));
};

export const token = () => {
  return localStorage.getItem(USER_TOKEN_KEY);
};

export const deleteUserToken = () => {
  localStorage.removeItem(USER_TOKEN_KEY);
};

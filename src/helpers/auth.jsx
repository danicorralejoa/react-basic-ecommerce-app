import { USER_TOKEN_KEY } from "../constants/env";

export const setUserToken = (userToken) => {
  localStorage.setItem(USER_TOKEN_KEY, userToken);
};

export const token = () => {
  localStorage.getItem(USER_TOKEN_KEY);
};

export const deleteUserToken = () => {
  localStorage.removeItem(USER_TOKEN_KEY);
};

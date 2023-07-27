import axios from "axios";
import { useState } from "react";
import { ALTERNATIVE_API_URL } from "../constants/env";

const useCheckUserEmail = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const checkUserEmail = (userData) => {
    return axios
      .post(`${ALTERNATIVE_API_URL}/users/is-available`, userData)
      .then((response) => {
        setLoading(false);
        console.log(response.data.isAvailable);
        return response.data.isAvailable;
      })
      .catch((err) => {
        setError(err);
        console.warn(`An error while validating user email ${err}`);
      });
  };

  return { loading, error, checkUserEmail };
};

export default useCheckUserEmail;

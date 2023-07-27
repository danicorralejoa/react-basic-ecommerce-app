import axios from "axios";
import { setUserToken } from "../helpers/auth";
import { ALTERNATIVE_API_URL } from "../constants/env";
import { useState } from "react";

const useFetchAuthJwtLogin = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [data, setData] = useState({});

  const logUserAuthToken = (userCredentials) => {
    axios
      .post(`${ALTERNATIVE_API_URL}/auth/login/`, userCredentials)
      .then((response) => {
        setLoading(false);
        setUserToken(response.data.access_token, response.data.refresh_token);
        setData(response.data);
        console.warn(
          `User auth JWT token retrieved ${JSON.stringify(response)}`
        );
      })
      .catch((err) => {
        setError(err);
        setLoading(false);
        console.warn("Se ha producido un error: " + err);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return { loading, error, data, logUserAuthToken };
};

export default useFetchAuthJwtLogin;

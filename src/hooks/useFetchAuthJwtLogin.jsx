import axios from "axios";
import { setUserToken } from "../helpers/auth";
import { ALTERNATIVE_API_URL } from "../constants/env";
import { useState } from "react";

const useFetchAuthJwtLogin = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const logUserAuthToken = (userCredentials) => {
    axios
      .post(`${ALTERNATIVE_API_URL}/auth/login/`, userCredentials)
      .then((response) => {
        setUserToken(response.data.access_token, response.data.refresh_token);
        setLoading(false);
        console.warn(
          `User auth JWT token retrieved ${JSON.stringify(response)}`
        );
      })
      .catch((err) => {
        setError(err);
        setLoading(false);
        console.warn("Se ha producido un error: " + err);
      });
  };

  return { loading, error, logUserAuthToken };
};

export default useFetchAuthJwtLogin;

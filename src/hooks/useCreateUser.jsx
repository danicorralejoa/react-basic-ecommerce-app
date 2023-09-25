import axios from "axios";
import { ALTERNATIVE_API_URL } from "../constants/env";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import useFetchAuthJwtLogin from "./useFetchAuthJwtLogin";

const useCreateUser = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { logUserAuthToken } = useFetchAuthJwtLogin();
  const navigate = useNavigate();

  const createUser = (userCredentials) => {
    axios
      .post(`${ALTERNATIVE_API_URL}/users/`, userCredentials)
      .then((response) => {
        logUserAuthToken({
          email: response.data.email,
          password: response.data.password,
        });
        setLoading(false);
        console.warn(`User created succesfully ${JSON.stringify(response)}`);
        navigate("/");
      })
      .catch((err) => {
        setError(err);
        setLoading(false);
        console.warn("Se ha producido un error: " + err);
      });
  };

  return { loading, error, createUser };
};

export default useCreateUser;

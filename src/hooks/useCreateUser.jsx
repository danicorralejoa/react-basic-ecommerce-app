import axios from "axios";
import { setUserToken } from "../helpers/auth";
import { ALTERNATIVE_API_URL } from "../constants/env";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const useCreateUser = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const createUser = (userCredentials) => {
    axios
      .post(`${ALTERNATIVE_API_URL}/users/`, userCredentials)
      .then((response) => {
        //setUserToken(response.data.data.token);
        setLoading(false);
        navigate("/");
        console.warn(`User created succesfully ${JSON.stringify(response)}`);
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

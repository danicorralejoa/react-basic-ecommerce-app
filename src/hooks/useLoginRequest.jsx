import { useEffect, useState } from "react";
import { API_URL } from "../constants/env";
import axios from "axios";
const useLoginRequest = (userEmail, userPassword) => {
  const [user, setUser] = useState([]);
  const [loading, setLoading] = useState(false);
  const userData = {
    email: userEmail,
    password: userPassword,
  };

  useEffect(() => {
    setLoading(false);
    axios
      .post(API_URL, userData)
      .then((response) => {
        setLoading(false);
        setUser(response);
        console.warn(response);
      })
      .catch((error) => {
        setLoading(false);
        console.warn("Se ha producido un error " + error);
      });
  }, []);
  return [user, loading];
};

export default useLoginRequest;

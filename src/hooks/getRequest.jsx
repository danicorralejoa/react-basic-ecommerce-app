import axios from "axios";
import { API_URL } from "../constants/env";
import { useEffect, useState } from "react";

const getRequest = (endPoint, headers = {}) => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();

  useEffect(() => {
    setLoading(true);
    axios
      .get(`${API_URL}/${endPoint}`)
      .then((response) => {
        console.log(response);
        setData(response.data.data);
        setLoading(false);
      })
      .catch((err) => {
        console.warn("An error ocurred: ", err);
        setError(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);
  return { data, error, loading };
};

export default getRequest;

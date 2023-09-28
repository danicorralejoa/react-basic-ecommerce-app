import axios from "axios";
import { ALTERNATIVE_API_URL, API_URL } from "../constants/env";
import { useEffect, useState } from "react";

const useFetchGetRequest = (endPoint = {}) => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();

  useEffect(() => {
    setLoading(true);
    axios
      .get(`${API_URL}/${endPoint}`)
      .then((response) => {
        //console.log(response.data);
        setData(response.data.data);
        setLoading(false);
      })
      .catch((err) => {
        console.warn(
          "An error ocurred: ",
          err,
          `${API_URL}/${endPoint}`
        );
        setError(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);
  return { data, error, loading };
};

export default useFetchGetRequest;

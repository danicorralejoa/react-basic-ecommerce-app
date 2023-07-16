import axios from "axios";
import { ALTERNATIVE_API_URL } from "../constants/env";
import { useEffect, useState } from "react";

const useAdminDeleteRequest = (endPoint = {}) => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();

  useEffect(() => {
    setLoading(true);
    axios
      .get(`${ALTERNATIVE_API_URL}/${endPoint}`)
      .then((response) => {
        console.log(response);
        setData(response.data);
        setLoading(false);
      })
      .catch((err) => {
        console.warn(
          "An error ocurred: ",
          err,
          `${ALTERNATIVE_API_URL}/${endPoint}`
        );
        setError(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);
  return { data, error, loading };
};

export default useAdminDeleteRequest;

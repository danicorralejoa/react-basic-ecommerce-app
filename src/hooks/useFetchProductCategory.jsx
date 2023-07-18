import axios from "axios";
import { useEffect, useState } from "react";
import { ALTERNATIVE_API_URL } from "../constants/env";

const useFetchProductCategory = (endPoint) => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`${ALTERNATIVE_API_URL}${endPoint}`)
      .then((response) => {
        setLoading(false);
        setData(response.data);
      })
      .catch((err) => {
        console.warn(err);
      });
  }, []);

  return { data, loading };
};

export default useFetchProductCategory;

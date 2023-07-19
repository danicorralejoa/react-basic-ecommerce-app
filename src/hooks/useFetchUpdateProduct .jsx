import axios from "axios";
import { ALTERNATIVE_API_URL } from "../constants/env";

const useFetchUpdateProduct = (data, id) => {
  axios
    .put(`${ALTERNATIVE_API_URL}/products/${id}`, data)
    .then((response) => {
      console.log(response);
      return alert("Product Updated!");
    })
    .catch((err) => {
      console.warn(err);
      return alert(`Error Updating Product ${err}`);
    });
};

export default useFetchUpdateProduct;

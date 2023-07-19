import axios from "axios";
import { ALTERNATIVE_API_URL } from "../constants/env";

const useCreateProduct = (data) => {
  axios
    .post(`${ALTERNATIVE_API_URL}/products/`, data)
    .then((response) => {
      console.log(response);
      return alert("Product Created!");
    })
    .catch((err) => {
      console.warn(err);
      return alert(`Error Creating Product ${err}`);
    });
};

export default useCreateProduct;

import axios from "axios";
import { useCallback } from "react";

const getData = async () => {
  const response = await axios.get("https://fakestoreapi.com/products");
  return response.data;
};

export default getData;

export const getDetailProduct = (id, callback) => {
  axios
    .get(`https://fakestoreapi.com/products/${id}`)
    .then((res) => {
      callback(res.data);
    })
    .catch((error) => {
      console.log(error);
    });
};

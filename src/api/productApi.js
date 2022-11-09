import axiosClient from "./axiosClient";

const productApi = {
  getAll(params) {
    const url = "/products";
    return axiosClient.get(url, { params });
  },
  getProduct(id, params) {
    const url = `/products/${id}`;
    return axiosClient.get(url, { params });
  },
  getAllCate(params) {
    const url = "/products/categories";
    return axiosClient.get(url, { params });
  },
  getProductsByCategory(category, params) {
    const url = `/products/category/${category}`;
    return axiosClient.get(url, { params });
  },
};
export default productApi;

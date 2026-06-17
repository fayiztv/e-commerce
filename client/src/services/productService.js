import api from "../api/axios";

export const createProductApi = async (payload) => {
  const { data } = await api.post("/products", payload);
  return data;
};

export const updateProductApi = async (productId, payload) => {
  const { data } = await api.patch(`/products/${productId}`, payload);
  return data;
};

export const getProductsApi = async () => {
  const { data } = await api.get("/products");
  return data;
};

export const getProductDetailsApi = async (productId) => {
  const { data } = await api.get(`/products/${productId}`);
  return data;
};

export const deleteProductApi = async (productId) => {
  const { data } = await api.delete(`/products/${productId}`);
  return data;
};

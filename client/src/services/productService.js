import api from "../api/axios";

export const createProduct = async (payload) => {
  const { data } = await api.post("/products", payload);
  return data;
};

export const updateProduct = async (productId, payload) => {
  const { data } = await api.patch(`/products/${productId}`, payload);
  return data;
};

export const getProducts = async () => {
  const { data } = await api.get("/products");
  return data;
};

export const getProductDetails = async (productId) => {
  const { data } = await api.get(`/products/${productId}`);
  return data;
};

export const deleteProduct = async (productId) => {
  const { data } = await api.delete(`/products/${productId}`);
  return data;
};

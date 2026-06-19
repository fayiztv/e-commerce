import api from "../api/axios";

export const addToCartApi = async (product) => {
  const { data } = await api.post("/cart", { product });
  return data;
};

export const updateCartApi = async (payload) => {
  const { data } = await api.patch("/cart", { payload });
  return data;
};

export const clearCartApi = async () => {
  const { data } = api.delete("/cart");
  return data;
};

export const clearCartItemApi = async (productId) => {
  const { data } = api.delete(`/cart/${productId}`);
  return data;
};

export const getCartApi = async () => {
  const { data } = await api.get("/cart");
  return data;
};

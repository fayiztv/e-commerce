import api from "../api/axios";

export const addToCart = async (payload) => {
  const { data } = await api.post("/cart", { payload });
  return data;
};

export const updateCart = async (payload) => {
  const { data } = await api.patch("/cart", { payload });
  return data;
};

export const clearCart = async () => {
  const { data } = api.delete("/cart");
  return data;
};

export const clearCartItem = async (productId) => {
  const { data } = api.delete(`/cart/${productId}`);
  return data;
};

export const getCart = async () => {
  const { data } = await api.get("/cart");
  return data;
};

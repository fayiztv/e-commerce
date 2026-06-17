import api from "../api/axios";

export const addToCart = async (productId) => {
  const { data } = await api.post("/cart", { product: productId });
  return data;
};

export const updateCart = async (productId, quantity) => {
  const { data } = await api.patch("/cart", {
    product: productId,
    quantity: quantity,
  });
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

import api from "../api/axios";

// user orders apis

export const createOrder = async (payload) => {
  const { data } = await api.post("/orders", payload);
  return data;
};

export const getMyOrders = async () => {
  const { data } = await api.get("/orders");
  return data;
};

export const getMyOrderDetails = async (orderId) => {
  const { data } = await api.get(`/orders${orderId}`);
  return data;
};

export const cancelOrder = async (orderId) => {
  const { data } = await api.patch(`/orders${orderId}`);
  return data;
};

// admin orders apis

export const getAllOrders = async () => {
  const { data } = await api.get("/orders/admin");
  return data;
};

export const getOrderDetails = async (orderId) => {
  const { data } = await api.get(`/orders/admin/${orderId}`);
  return data;
};

export const updteOrderStatus = async (orderId) => {
  const { data } = await api.patch(`/orders/admin/${orderId}`);
  return data;
};
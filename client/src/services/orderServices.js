import api from "../api/axios";

// user orders apis

export const createOrderApi = async (payload) => {
  const { data } = await api.post("/orders", payload);
  return data;
};

export const getMyOrdersApi = async () => {
  const { data } = await api.get("/orders");
  return data;
};

export const getMyOrderDetailsApi = async (orderId) => {
  const { data } = await api.get(`/orders${orderId}`);
  return data;
};

export const cancelOrderApi = async (orderId) => {
  const { data } = await api.patch(`/orders${orderId}`);
  return data;
};

// admin orders apis

export const getAllOrdersApi = async () => {
  const { data } = await api.get("/orders/admin");
  return data;
};

export const getOrderDetailsApi = async (orderId) => {
  const { data } = await api.get(`/orders/admin/${orderId}`);
  return data;
};

export const updteOrderStatusApi = async (orderId) => {
  const { data } = await api.patch(`/orders/admin/${orderId}`);
  return data;
};
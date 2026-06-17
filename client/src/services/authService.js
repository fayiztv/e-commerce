import api from "../api/axios";

export const adminLoginApi = async (payload) => {
  const { data } = await api.post("/admin/login", payload);
  return data;
};

export const userLoginApi = async (payload) => {
  const { data } = await api.post("/users/login", payload);
  return data;
};

export const registerApi = async (payload) => {
  const { data } = await api.post("/users/register", payload);
  return data;
};

export const getProfileApi = async () => {
  const { data } = await api.get("/users/profile");
  return data;
};
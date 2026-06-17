import api from "../api/axios";

export const adminLogin = async (payload) => {
  const { data } = await api.post("/admin/login", payload);
  return data;
};

export const login = async (payload) => {
  const { data } = await api.post("/users/login", payload);
  return data;
};

export const register = async (payload) => {
  const { data } = await api.post("/users/register", payload);
  return data;
};

export const fetchProfile = async () => {
  const { data } = await api.get("/users/profile");
  return data;
};
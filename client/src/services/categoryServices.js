import api from "../api/axios";

export const createCategory = async (payload) => {
  const { data } = await api.post("/categories", payload);
  return data;
};

export const updateCategory = async (categoryId, payload) => {
  const { data } = await api.patch(`/categories/${categoryId}`, payload);
  return data;
};

export const deleteCategory = async (categoryId) => {
  const { data } = await api.delete(`/categories/${categoryId}`);
  return data;
};

export const getCategories = async () => {
  const { data } = await api.get("/categories");
  return data;
};

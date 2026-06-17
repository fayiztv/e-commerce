import api from "../api/axios";

export const createCategoryApi = async (payload) => {
  const { data } = await api.post("/categories", payload);
  return data;
};

export const updateCategoryApi = async (categoryId, payload) => {
  const { data } = await api.patch(`/categories/${categoryId}`, payload);
  return data;
};

export const deleteCategoryApi = async (categoryId) => {
  const { data } = await api.delete(`/categories/${categoryId}`);
  return data;
};

export const getCategoriesApi = async () => {
  const { data } = await api.get("/categories");
  return data;
};

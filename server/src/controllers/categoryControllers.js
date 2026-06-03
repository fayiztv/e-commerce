import {
  createCategoryService,
  deleteCategoryService,
  getCategoryService,
  updateCategoryService,
} from "../services/categoryServices.js";

export const createCategory = async (req, res, next) => {
  await createCategoryService(req, res, next);
};

export const getCategories = async (req, res, next) => {
  await getCategoryService(req, res, next);
};

export const updateCategory = async (req, res, next) => {
  await updateCategoryService(req, res, next);
};

export const deleteCategory = async (req, res, next) => {
  await deleteCategoryService(req, res, next);
};

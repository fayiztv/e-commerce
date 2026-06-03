import {
  createProductService,
  deleteProductService,
  getProductDetailsService,
  getProductsService,
  updateProductService,
} from "../services/productServices.js";

export const createProduct = async (req, res, next) => {
  await createProductService(req, res, next);
};

export const getProducts = async (req, res, next) => {
  await getProductsService(req, res, next);
};

export const updateProduct = async (req, res, next) => {
  await updateProductService(req, res, next);
};

export const getProductDetails = async (req, res, next) => {
  await getProductDetailsService(req, res, next);
};

export const deleteProduct = async (req, res, next) => {
  await deleteProductService(req, res, next);
};

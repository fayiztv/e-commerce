import {
  addToCartService,
  clearCartService,
  getCartService,
  removeCartItemService,
  updateCartService,
} from "../services/cartServices.js";

export const addToCart = async (req, res, next) => {
  await addToCartService(req, res, next);
};

export const getCart = async (req, res, next) => {
  await getCartService(req, res, next);
};

export const updateCart = async (req, res, next) => {
  await updateCartService(req, res, next);
};

export const removeCartItem = async (req, res, next) => {
  await removeCartItemService(req, res, next);
};

export const clearCart = async (req, res, next) => {
  await clearCartService(req, res, next);
};

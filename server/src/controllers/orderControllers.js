import {
  createOrderService,
  getAllOrdersService,
  getMyOrderDetailsService,
  getMyOrdersService,
  getOrderDetailsService,
  updateOrderStatusService,
} from "../services/orderServices.js";

// user order apis controllers
export const createOrder = async (req, res, next) => {
  try {
    createOrderService(req, res, next);
  } catch (error) {
    next(error);
  }
};

export const getMyOrders = async (req, res, next) => {
  try {
    getMyOrdersService(req, res, next);
  } catch (error) {
    next(error);
  }
};

export const getMyOrderDetails = async (req, res, next) => {
  try {
    getMyOrderDetailsService(req, res, next);
  } catch (error) {
    next(error);
  }
};

// admin order apis controllers
export const getallOrder = async (req, res, next) => {
  try {
    getAllOrdersService(req, res, next);
  } catch (error) {
    next(error);
  }
};

export const getOrderDetails = async (req, res, next) => {
  try {
    getOrderDetailsService(req, res, next);
  } catch (error) {
    next(error);
  }
};

export const updateOrderStatus = async (req, res, next) => {
  try {
    updateOrderStatusService(req, res, next);
  } catch (error) {
    next(error);
  }
};

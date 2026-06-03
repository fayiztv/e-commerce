import {
  cancelOrderService,
  createOrderService,
  getAllOrdersService,
  getMyOrderDetailsService,
  getMyOrdersService,
  getOrderDetailsService,
  updateOrderStatusService,
} from "../services/orderServices.js";

// user order apis controllers
export const createOrder = async (req, res, next) => {
  await createOrderService(req, res, next);
};

export const getMyOrders = async (req, res, next) => {
  await getMyOrdersService(req, res, next);
};

export const getMyOrderDetails = async (req, res, next) => {
  await getMyOrderDetailsService(req, res, next);
};

export const cancelOrder = async (req, res, next) => {
  await cancelOrderService(req, res, next);
};

// admin order apis controllers
export const getallOrder = async (req, res, next) => {
  await getAllOrdersService(req, res, next);
};

export const getOrderDetails = async (req, res, next) => {
  await getOrderDetailsService(req, res, next);
};

export const updateOrderStatus = async (req, res, next) => {
  await updateOrderStatusService(req, res, next);
};

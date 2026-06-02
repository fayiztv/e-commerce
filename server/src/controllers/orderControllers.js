import { createOrderService, getMyOrdersService,  } from "../services/orderServices.js"

// user order apis controllers
export const createOrder = async (req, res, next) => {
    try {
        createOrderService(req, res, next)
    } catch (error) {
        next(error)
    }
}

export const getMyOrder = async (req, res, next) => {
    try {
        getMyOrdersService(req, res, next)
    } catch (error) {
        next(error)
    }
}
import { createOrderService } from "../services/orderServices.js"

export const createOrder = async (req, res, next) => {
    try {
        createOrderService(req, res, next)
    } catch (error) {
        next(error)
    }
}
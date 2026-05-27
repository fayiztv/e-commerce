import { addToCartService } from "../services/cartServices.js"

export const addToCart = async (req, res, next) => {
    try {
        addToCartService(req, res, next)
    } catch (error) {
        next(error)
    }
}
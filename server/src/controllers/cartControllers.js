import { addToCartService, getCartService } from "../services/cartServices.js"

export const addToCart = async (req, res, next) => {
    try {
        addToCartService(req, res, next)
    } catch (error) {
        next(error)
    }
}

export const getCart = async (req, res, next) => {
    try {
        getCartService(req, res, next)
    } catch (error) {
        next(error)
    }
}
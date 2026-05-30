import { addToCartService, clearCartService, getCartService, updateCartService } from "../services/cartServices.js"

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

export const updateCart = async (req, res, next) => {
    try {
        updateCartService(req, res, next)
    } catch (error) {
        next(error)
    }
}

export const clearCart = async (req, res, next) => {
    try {
        clearCartService(req, res, next)
    } catch (error) {
        next(error)
    }
}
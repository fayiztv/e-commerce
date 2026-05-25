import { createProductService } from "../services/productServices.js"

export const createProduct = async (req, res, next) => {
    try {
        createProductService(req, res, next)
    } catch (error) {
        next(error)
    }
}
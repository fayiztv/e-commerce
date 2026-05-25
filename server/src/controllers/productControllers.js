import { createProductService, GetProductDetailsService, GetProductsService, updateProductService } from "../services/productServices.js"

export const createProduct = async (req, res, next) => {
    try {
        createProductService(req, res, next)
    } catch (error) {
        next(error)
    }
}

export const GetProducts = async (req, res, next) => {
    try {
        GetProductsService(req, res, next)
    } catch (error) {
        next(error)
    }
}

export const updateProduct = async (req, res, next) => {
    try {
        updateProductService(req, res, next)
    } catch (error) {
        next(error)
    }
}

export const GetProductDetails = async (req, res, next) => {
    try {
        GetProductDetailsService(req, res, next)
    } catch (error) {
        next(error)
    }
}
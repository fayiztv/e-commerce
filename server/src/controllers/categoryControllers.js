import { createCategoryService, getCategoryService } from "../services/categoryServices.js"

export const createCategory = async (req, res, next) => {
    try {
        createCategoryService(req, res, next)
    } catch (error) {
        next(error)
    }
}

export const getCategories = async (req, res, next) => {
    try {
        getCategoryService(req, res, next)
    } catch (error) {
        next(error)
    }
}
import { createCategoryService } from "../services/categoryServices.js"

export const createCategory = async (req, res, next) => {
    try {
        createCategoryService(req, res, next)
    } catch (error) {
        next(error)
    }
}
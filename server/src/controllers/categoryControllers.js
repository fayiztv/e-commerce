import { createCategoryService, deleteCategoryService, getCategoryService, updateCategoryService } from "../services/categoryServices.js"

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

export const updateCategory = async (req, res, next) => {
    try {
        updateCategoryService(req, res, next)
    } catch (error) {
        next(error)
    }
}

export const deleteCategory = async (req, res, next) => {
    try {
        deleteCategoryService(req, res, next)
    } catch (error) {
        next(error)
    }
}
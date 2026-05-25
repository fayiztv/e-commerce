import Category from "../models/Category.js";
import sendResponse from "../utils/sendResponse.js";

export const createCategoryService = async (req, res, next) => {
  try {
    const { name, description } = req.body;

    const category = await Category.create({
      name,
      description,
    });

    return sendResponse({
      res,
      statusCode: 201,
      success: true,
      message: "Category created successfully",
      data: category,
    });
  } catch (error) {
    next(error);
  }
};

export const getCategoryService = async (req, res, next) => {
  try {
    const categories = await Category.find();

    return sendResponse({
      res,
      statusCode: 200,
      success: true,
      message: "Categories fetched successfully",
      data: categories,
    });
  } catch (error) {
    next(error);
  }
};

export const updateCategoryService = async (req, res, next) => {
  try {
    const { id } = req.params;

    const { name, description, status } = req.body;

    // if (!id) {
    //   return next(new Error("Id not found"));
    // }

    const category = await Category.findByIdAndUpdate(
      id,
      {
        name,
        description,
        status,
      },
      {
        returnDocument: "after"
      },
    );

    if (!category) {
      return sendResponse({
        res,
        statusCode: 404,
        success: false,
        message: "Category not found",
      });
    }

    return sendResponse({
      res,
      statusCode: 200,
      success: true,
      message: "Category updated successfully",
      data: category,
    });
  } catch (error) {
    next(error);
  }
};

export const deleteCategoryService = async (req, res, next) => {
  try {
    const { id } = req.params;

    // if (!id) {
    //   return next(new Error("Id not found"));
    // }

    const category = await Category.findByIdAndDelete(id);

    if (!category) {
      return sendResponse({
        res,
        statusCode: 404,
        success: false,
        message: "Category not found",
      });
    }

    return sendResponse({
      res,
      statusCode: 200,
      success: true,
      message: "Category deleted successfully",
    });
  } catch (error) {
    next(error);
  }
};

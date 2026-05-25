import Category from "../models/Category.js";
import sendResponse from "../utils/sendResponse.js";

export const createCategoryService = async (req, res, next) => {
  try {
    const { name, description } = req.body;

    const product = await Category.create({
      name,
      description
    });

    return sendResponse({
      res,
      statusCode: 201,
      success: true,
      message: "Category created successfully",
      data: product,
    });
  } catch (error) {
    next(error);
  }
};

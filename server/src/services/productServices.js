import Product from "../models/Product.js";
import sendResponse from "../utils/sendResponse.js";

export const createProductService = async (req, res, next) => {
  try {
    const { name, description, price, stock } = req.body;

    const product = await Product.create({
      name,
      description,
      price,
      stock,
    });

    return sendResponse({
      res,
      statusCode: 201,
      success: true,
      message: "Product created successfully",
      data: product,
    });
  } catch (error) {
    next(error);
  }
};

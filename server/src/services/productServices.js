import Product from "../models/Product.js";
import sendResponse from "../utils/sendResponse.js";

export const createProductService = async (req, res, next) => {
  try {
    const data = req.body;

    const product = await Product.create(data);

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

export const GetProductsService = async (req, res, next) => {
  try {
    const product = await Product.find({status: true});

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

export const updateProductService = async (req, res, next) => {
  try {
    const { id } = req.params;

    const data = req.body;

    const product = await Product.findByIdAndUpdate(
      id,
      data,
      {
        returnDocument: "after",
      },
    );

    if (!product) {
      return sendResponse({
        res,
        statusCode: 404,
        success: false,
        message: "Product not found",
      });
    }

    return sendResponse({
      res,
      statusCode: 200,
      success: true,
      message: "Product updated successfully",
      data: product,
    });
  } catch (error) {
    next(error);
  }
};

export const GetProductDetailsService = async (req, res, next) => {
  try {
    const { id } = req.params;

    const product = await Product.findById(id);

    if (!product) {
      return sendResponse({
        res,
        statusCode: 404,
        success: false,
        message: "Product not found",
      });
    }

    return sendResponse({
      res,
      statusCode: 201,
      success: true,
      message: "Product details fetched successfully",
      data: product,
    });
  } catch (error) {
    next(error);
  }
};

export const DeleteProductService = async (req, res, next) => {
  try {
    const { id } = req.params;

    const product = await Product.findByIdAndDelete(id);

    if (!product) {
      return sendResponse({
        res,
        statusCode: 404,
        success: false,
        message: "Product not found",
      });
    }

    return sendResponse({
      res,
      statusCode: 201,
      success: true,
      message: "Product deleted successfully",
    });
  } catch (error) {
    next(error);
  }
};

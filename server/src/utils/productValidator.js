import Product from "../models/Product";

const productValidator = async (res, product, quantity) => {
  const productData = await Product.findById(product);

  if (!productData) {
    return sendResponse({
      res,
      statusCode: 400,
      success: false,
      message: "Product not found",
    });
  }

  if (!productData.status) {
    return sendResponse({
      res,
      statusCode: 400,
      success: false,
      message: "Product unavailable",
    });
  }

  if (productData.stock < quantity) {
    return sendResponse({
      res,
      statusCode: 400,
      success: false,
      message: "Insufficient stock",
    });
  }

  return productData;
};

export default productValidator;

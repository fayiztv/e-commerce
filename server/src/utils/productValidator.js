import Product from "../models/Product.js";

const productValidator = async (product, quantity) => {
  const productData = await Product.findById(product).populate({
    path: "category",
    select: "name",
  });

  if (!productData) {
    throw new Error("Product not found");
  }

  if (!productData.status) {
    throw new Error("Product unavailable");
  }

  if (productData.stock < quantity) {
    throw new Error("Insufficient stock");
  }

  return productData;
};

export default productValidator;
import Cart from "../models/Cart.js";
import Product from "../models/Product.js";
import sendResponse from "../utils/sendResponse.js";

export const addToCartService = async (req, res, next) => {
  try {

    const userId = req.user.id;
    
    const { product } = req.body;
    
    // validting the product
    const productData = await Product.findById(product);

    if (!productData || !productData.status || productData.stock < 1) {

      return sendResponse({
        res,
        statusCode: 404,
        success: false,
        message: "Product unavailable or stock out",
      });
    }

    // checking if the user cart is there
    const existingCart = await Cart.findOne({ user: userId });

    if (!existingCart) {

      // if there no cart for the user, create new one
      const cart = await Cart.create({
        user: userId,
        items: [
          {
            product: product,
            price: productData.price,
          },
        ],
      });

      return sendResponse({
        res,
        statusCode: 201,
        success: true,
        message: "Product added to cart successfully",
        data: cart,
      });

    } else {

      // if user cart is there

      // checking the product is there in the cart
      const existingItem = existingCart.items.find(
        (item) => item.product.toString() === product.toString(),
      );

      if (existingItem) {

        // if there is the product in the cart
        existingItem.quantity += 1;

        await existingCart.save();

        return sendResponse({
          res,
          statusCode: 200,
          success: true,
          message: "Cart updated successfully",
          data: existingCart
        });

      } else {
        
        // if there is no currentt product in the cart
        const newItem = {
          product: product,
          price: productData.price,
        };

        existingCart.items.push(newItem);
        
        await existingCart.save();

        return sendResponse({
          res,
          statusCode: 200,
          success: true,
          message: "Cart updated successfully",
          data: existingCart
        });
      }
    }
  } catch (error) {
    next(error);
  }
};

export const getCartService = async (req, res, next) => {
  try {

    const userId = req.user.id
    const cart = await Cart.findOne({ user: userId });

    return sendResponse({
      res,
      statusCode: 200,
      success: true,
      message: "Categories fetched successfully",
      data: cart,
    });
  } catch (error) {
    next(error);
  }
};

export const updateCartService = async (req, res, next) => {
  try {

    const userId = req.user.id
    const { product, quantity } = req.body

    // validting the product
    const productData = await Product.findById(product);

    if (!productData || !productData.status || productData.stock < 1) {

      return sendResponse({
        res,
        statusCode: 404,
        success: false,
        message: "Product unavailable or stock out",
      });
    }

    const cart = await Cart.findOne({ user: userId });

    const item = cart.items.find(
      (item) => item.product.toHexString() === product.toString()
    );

    if (!item) {
      return sendResponse({
        res,
        statusCode: 404,
        success: false,
        message: "Product not found in cart"
      });
    }

    item.quantity += quantity

    await cart.save()

    return sendResponse({
      res,
      statusCode: 200,
      success: true,
      message: "Cart updated successfully",
      data: cart,
    });
  } catch (error) {
    next(error);
  }
};
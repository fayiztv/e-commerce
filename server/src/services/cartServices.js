import Cart from "../models/Cart.js";
import Product from "../models/Product.js";
import productValidator from "../utils/productValidator.js";
import sendResponse from "../utils/sendResponse.js";

export const addToCartService = async (req, res, next) => {
  try {
    const userId = req.user.id;

    const { product } = req.body;

    // validting the product
    const productData = await productValidator(product, 1);

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
          data: existingCart,
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
          data: existingCart,
        });
      }
    }
  } catch (error) {
    next(error);
  }
};

export const getCartService = async (req, res, next) => {
  try {
    const userId = req.user.id;
    const cart = await Cart.findOne({ user: userId }).populate({
      path: "items.product",
      select: "name category description",
      populate: {
        path: "category",
        select: "name",
      },
    });

    return sendResponse({
      res,
      statusCode: 200,
      success: true,
      message: "User cart fetched successfully",
      data: cart,
    });
  } catch (error) {
    next(error);
  }
};

export const updateCartService = async (req, res, next) => {
  try {
    const userId = req.user.id;
    const { product, quantity } = req.body;
    const parsedQuantity = Number(quantity);
    const cart = await Cart.findOne({ user: userId });

    // cart validatiom
    if (!cart) {
      return sendResponse({
        res,
        statusCode: 404,
        success: false,
        message: "Cart not found",
      });
    }

    // quantity validation
    if (parsedQuantity <= 0) {
      cart.items = cart.items.filter(
        (item) => item.product.toString() !== product.toString(),
      );

      await cart.save();

      return sendResponse({
        res,
        statusCode: 200,
        success: true,
        message: "Product removed from cart",
        data: cart,
      });
    }

    // validting the product
    const productData = await productValidator(product, parsedQuantity);

    const item = cart.items.find(
      (item) => item.product.toString() === product.toString(),
    );

    // item validation
    if (!item) {
      return sendResponse({
        res,
        statusCode: 404,
        success: false,
        message: "Product not found in cart",
      });
    }

    item.quantity = parsedQuantity;

    await cart.save();

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

export const removeCartItemService = async (req, res, next) => {
  try {
    const userId = req.user.id;
    const cart = await Cart.findOne({ user: userId });
    const product = req.params;

    if (!cart) {
      return sendResponse({
        res,
        statusCode: 404,
        success: false,
        message: "No user cart found",
      });
    }

    cart.items = cart.items.filter(
      (item) => item.product.toString() !== product.toString(),
    );
    await cart.save();

    return sendResponse({
      res,
      statusCode: 200,
      success: true,
      message: "Product removed from cart",
      data: cart,
    });
  } catch (error) {
    next(error);
  }
};

export const clearCartService = async (req, res, next) => {
  try {
    const userId = req.user.id;
    const cart = await Cart.findOne({ user: userId });

    if (!cart) {
      return sendResponse({
        res,
        statusCode: 404,
        success: false,
        message: "No user cart found",
      });
    }

    cart.items = [];
    await cart.save();

    return sendResponse({
      res,
      statusCode: 200,
      success: true,
      message: "User cart cleared successfully",
      data: cart,
    });
  } catch (error) {
    next(error);
  }
};

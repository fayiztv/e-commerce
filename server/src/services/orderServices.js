import Cart from "../models/Cart.js";
import Order from "../models/Order.js";
import Product from "../models/Product.js";
import generateOrderNumber from "../utils/generateOrderNumber.js";
import productValidator from "../utils/productValidator.js";
import sendResponse from "../utils/sendResponse.js";

// user order apis services
export const createOrderService = async (req, res, next) => {
  try {
    const { items, shippingAddress } = req.body;
    const userId = req.user.id;

    // validate the items
    if (!items || items.length === 0) {
      return sendResponse({
        res,
        statusCode: 400,
        success: false,
        message: "No products selected",
      });
    }

    if (!shippingAddress) {
      return sendResponse({
        res,
        statusCode: 400,
        success: false,
        message: "Shipping address is required",
      });
    }

    const orderItems = [];
    let totalAmount = 0;
    const orderedProducts = [];

    // validate the cart
    const cart = await Cart.findOne({ user: userId });

    if (!cart || cart.items.length === 0) {
      return sendResponse({
        res,
        statusCode: 404,
        success: false,
        message: "User cart is emptyy",
      });
    }

    // product management from the items
    for (const requestedItem of items) {
      const cartItem = cart.items.find(
        (item) =>
          item.product.toString() === requestedItem.productId.toString(),
      );

      if (!cartItem) {
        return sendResponse({
          res,
          statusCode: 404,
          success: false,
          message: "Product not found in cart",
        });
      }

      if (requestedItem.quantity <= 0) {
        return sendResponse({
          res,
          statusCode: 400,
          success: false,
          message: "Invalid quantity",
        });
      }

      if (requestedItem.quantity != cartItem.quantity) {
        return sendResponse({
          res,
          statusCode: 400,
          success: false,
          message: "Requested quantity and cart quantity are not same",
        });
      }

      // // checking the product availablity even validated while adding to the cart
      const productData = await productValidator(
        requestedItem.productId,
        requestedItem.quantity,
      );

      const totalPrice = productData.price * requestedItem.quantity;

      // // setting up the items
      orderItems.push({
        productId: productData._id,
        product: productData.name,
        category: productData.category.name,
        price: productData.price,
        quantity: requestedItem.quantity,
        totalPrice: totalPrice,
      });

      totalAmount += totalPrice;

      orderedProducts.push(productData._id.toString());
    }

    // // generating number for the order
    const orderNumber = generateOrderNumber();

    // // creating the order
    const order = await Order.create({
      orderNumber,
      user: userId,
      items: orderItems,
      totalAmount,
      shippingAddress,
    });

    // // decrement the stock of the product after creating the order
    for (const item of items) {
      await Product.findByIdAndUpdate(item.productId, {
        $inc: {
          stock: -item.quantity,
        },
      });
    }

    // // removing the product from the cart after creating the order
    cart.items = cart.items.filter(
      (item) => !orderedProducts.includes(item.product.toString()),
    );
    await cart.save();

    return sendResponse({
      res,
      statusCode: 201,
      success: true,
      message: "Order created successfully",
      data: order,
    });
  } catch (error) {
    next(error);
  }
};

export const getMyOrdersService = async (req, res, next) => {
  try {
    const orders = await Order.find({ user: req.user.id });

    return sendResponse({
      res,
      statusCode: 200,
      success: true,
      message: "Orders fetched successfully",
      data: orders,
    });
  } catch (error) {
    next(error);
  }
};

export const getMyOrderDetailsService = async (req, res, next) => {
  try {
    const { id } = req.params;
    const order = await Order.findOne({ _id: id, user: req.user.id });

    if (!order) {
      return sendResponse({
        res,
        statusCode: 404,
        success: false,
        message: "Order not found",
      });
    }

    return sendResponse({
      res,
      statusCode: 200,
      success: true,
      message: "Order details fetched successfully",
      data: order,
    });
  } catch (error) {
    next(error);
  }
};

// admin order api services
export const getAllOrdersService = async (req, res, next) => {
  try {
    const orders = await Order.find();

    return sendResponse({
      res,
      statusCode: 200,
      success: true,
      message: "Orders fetched successfully",
      data: orders,
    });
  } catch (error) {
    next(error);
  }
};

export const getOrderDetailsService = async (req, res, next) => {
  try {
    const { id } = req.params;
    const order = await Order.findById(id);

    if (!order) {
      return sendResponse({
        res,
        statusCode: 404,
        success: false,
        message: "Order not found",
      });
    }

    return sendResponse({
      res,
      statusCode: 200,
      success: true,
      message: "Order details fetched successfully",
      data: order,
    });
  } catch (error) {
    next(error);
  }
};

export const updateOrderStatusService = async (req, res, next) => {
  try {
    const { id } = req.params;

    const status = req.body.status;

    const allowedStatuses = [
      "pending",
      "confirmed",
      "processing",
      "shipped",
      "delivered",
      "cancelled",
    ];

    if (!allowedStatuses.includes(status)) {
      return sendResponse({
        res,
        statusCode: 400,
        success: false,
        message: "Invalid order status",
      });
    }

    const order = await Order.findByIdAndUpdate(
      id,
      {
        orderStatus: status,
      },
      {
        returnDocument: "after",
      },
    );

    if (!order) {
      return sendResponse({
        res,
        statusCode: 404,
        success: false,
        message: "Order not found",
      });
    }

    return sendResponse({
      res,
      statusCode: 200,
      success: true,
      message: "Order updated successfully",
      data: order,
    });
  } catch (error) {
    next(error);
  }
};

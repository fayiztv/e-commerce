import User from "../models/User.js";
import sendResponse from "../utils/sendResponse.js";
import jwt from "jsonwebtoken";

export const adminOnly = (req, res, next) => {
  if (!req.user.isAdmin) {
    return sendResponse({
      res,
      statusCode: 403,
      success: false,
      message: "No access",
    });
  }
  next();
};

export const protect = async (req, res, next) => {
  try {
    const authheader = req.headers.authorization;
    if (!authheader) {
      return sendResponse({
        res,
        statusCode: 401,
        success: false,
        message: "No token provided",
      });
    }

    const token = authheader.split(" ")[1];

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    const userData = await User.findById(decoded.id).select("id email isAdmin")
    
    req.user = userData;
    
    next();
  } catch (error) {
    console.log(error);
    return sendResponse({
      res,
      statusCode: 500,
      success: false,
      message: error.message || "Sorry! Server Error",
    });
  }
};

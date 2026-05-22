import sendResponse from "../utils/sendResponse.js";
import jwt from "jsonwebtoken";

export const adminOnly = (req, res, next) => {
  if (!req.user.isAdmin) {
    sendResponse({
      res,
      statusCode: 400,
      success: false,
      message: "No access",
    });
  }
  next();
};

export const protect = (req, res, next) => {
  try {
    const authheader = req.headers.authorization;
    if (!authheader) {
      sendResponse({
        res,
        statusCode: 401,
        success: false,
        message: "No token provided",
      });
    }

    const token = authheader.split(" ")[1];

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    req.user = decoded;

    next();
  } catch (error) {
    console.log(error);
    sendResponse({
      res,
      statusCode: 500,
      success: false,
      message: "Sorry! Server Error",
    });
  }
};

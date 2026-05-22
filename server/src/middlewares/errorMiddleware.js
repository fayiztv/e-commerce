import sendResponse from "../utils/sendResponse.js";

export const errorHandler = (error, req, res, next) => {
  console.log(error);

  return sendResponse({
    res,
    statusCode: error.statusCode || 500,
    success: false,
    message: error.message || "Sorry! Server Error",
  });
};

import sendResponse from "../utils/sendResponse.js";

export const formValidator = (requiredFields) => {
  return (req, res, next) => {

    for (const element of requiredFields) {
      const value = req.body[element];

      if (typeof value === "string" && !value.trim()) {
        return sendResponse({
          res,
          statusCode: 400,
          success: false,
          message: `${element} is required`,
        });
      } else if (value === undefined || value === null) {
        return sendResponse({
          res,
          statusCode: 400,
          success: false,
          message: `${element} is required`,
        });
      }
    }

    next();
  };
};

export const updateValidator = (allowedFields) => {
  return (req, res, next) => {

    for (const field of allowedFields) {
      const value = req.body[field];

      if (value !== undefined) {
        if (typeof value === "string" && !value.trim()) {
          return sendResponse({
            res,
            statusCode: 400,
            success: false,
            message: `${field} cannot be empty`,
          });
        }
      }
    }
    next()
  };
};

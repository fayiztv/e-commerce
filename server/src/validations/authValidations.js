import sendResponse from "../utils/sendResponse.js";

export const formValidator = (requiredFields) => {
  return (req, res, next) => {
    requiredFields.forEach((element) => {
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
    });

    next();
  };
};

import sendResponse from "../utils/sendResponse.js";

export const formValidator = (requiredFields) => {
  return (req, res, next) => {

    requiredFields.forEach((element) => {
      const field = element;

      if (!req.body[field].trim()) {
        return sendResponse({
          res,
          statusCode: 400,
          success: false,
          message: `${field} is required`,
        });
      }
    });
    
    next();
  };
};

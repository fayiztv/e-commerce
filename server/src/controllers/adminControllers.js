import { adminLoginService } from "../services/adminServices.js";

export const adminLogin = async (req, res, next) => {
  try {
    adminLoginService(req, res, next);
  } catch (error) {
    next(error);
  }
};

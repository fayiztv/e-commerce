import { adminLoginService } from "../services/adminServices.js";

export const adminLogin = async (req, res, next) => {
  await adminLoginService(req, res, next);
};

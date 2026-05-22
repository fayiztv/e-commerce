import User from "../models/User.js";
import { adminLoginService } from "../services/adminServices.js";
import generateToken from "../utils/generateToken.js";
import sendResponse from "../utils/sendResponse.js";
import bcrypt from "bcrypt";

export const adminLogin = async (req, res, next) => {
  try {
    adminLoginService(req, res, next);
  } catch (error) {
    next(error);
  }
};

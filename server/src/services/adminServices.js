import User from "../models/User.js";
import bcrypt from "bcrypt";
import sendResponse from "../utils/sendResponse.js";
import generateToken from "../utils/generateToken.js";

export const adminLoginService = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    const admin = await User.findOne({ email });

    if (!admin) {
      return sendResponse({
        res,
        statusCode: 400,
        success: false,
        message: "No user found",
      });
    }

    if (!admin.isAdmin) {
      return sendResponse({
        res,
        statusCode: 403,
        success: false,
        message: "No access",
      });
    }

    const isMatch = await bcrypt.compare(password, admin.password);

    if (!isMatch) {
      return sendResponse({
        res,
        statusCode: 401,
        success: false,
        message: "Invalid credentials",
      });
    }

    const token = generateToken(admin);

    admin.password = undefined;

    return sendResponse({
      res,
      statusCode: 200,
      success: true,
      message: "Admin login successful",
      data: admin,
      token: token,
    });
  } catch (error) {
    next(error);
  }
};

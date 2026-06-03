import User from "../models/User.js";
import bcrypt from "bcrypt";
import sendResponse from "../utils/sendResponse.js";
import generateToken from "../utils/generateToken.js";

export const registerService = async (req, res, next) => {
  try {
    const { name, email, password } = req.body;

    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return sendResponse({
        res,
        statusCode: 400,
        success: false,
        message: "User already exists",
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
      name,
      email,
      password: hashedPassword,
    });

    const token = generateToken(user);

    user.password = undefined;

    return sendResponse({
      res,
      statusCode: 201,
      success: true,
      message: "User registred successfully",
      data: user,
      token: token,
    });
  } catch (error) {
    next(error);
  }
};

export const loginService = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (!user) {
      return sendResponse({
        res,
        statusCode: 404,
        success: false,
        message: "No user found",
      });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return sendResponse({
        res,
        statusCode: 401,
        success: false,
        message: "Invalid credentials",
      });
    }

    const token = generateToken(user);

    user.password = undefined;

    return sendResponse({
      res,
      statusCode: 200,
      success: true,
      message: "login successful",
      data: user,
      token: token,
    });
  } catch (error) {
    next(error);
  }
};

export const profileService = async (req, res, next) => {
  try {
    const id = req.user.id;

    const user = await User.findById(id).select("-password");

    if (!user) {
      return sendResponse({
        res,
        statusCode: 404,
        success: false,
        message: "No user found",
      });
    }

    return sendResponse({
      res,
      statusCode: 200,
      success: true,
      message: "User details fetched successfully",
      data: user,
    });
  } catch (error) {
    next(error);
  }
};

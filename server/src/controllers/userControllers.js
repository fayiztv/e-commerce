import {
  loginService,
  profileService,
  registerService,
} from "../services/userServices.js";

export const userRegister = async (req, res, next) => {
  try {
    registerService(req, res, next);
  } catch (error) {
    next(error);
  }
};

export const userLogin = async (req, res, next) => {
  try {
    loginService(req, res, next);
  } catch (error) {
    next(error);
  }
};

export const getProfile = async (req, res, next) => {
  try {
    profileService(req, res, next);
  } catch (error) {
    next(error);
  }
};

import {
  loginService,
  profileService,
  registerService,
} from "../services/userServices.js";

export const userRegister = async (req, res, next) => {
  await registerService(req, res, next);
};

export const userLogin = async (req, res, next) => {
  await loginService(req, res, next);
};

export const getProfile = async (req, res, next) => {
  await profileService(req, res, next);
};

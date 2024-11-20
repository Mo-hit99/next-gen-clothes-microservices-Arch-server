import express from "express";
import dotenv from "dotenv";
import {
  get_allData,
  getById_data,
  getMonthlyUserCounts,
  googleLogin,
  UserCreateData,
  UserDeleteDate,
  userForgotPassword,
  userLogin,
  userRestPassword,
  UserUpdateData,
  verificationOtp,
} from "../controller/User_controller.js";

dotenv.config();

export const User_route = express.Router();

// get all user data
User_route.get("/api/v1/user", get_allData);

// get user data by Id
User_route.get("/api/v1/user/:id", getById_data);

// Define the route for getting monthly user counts
User_route.get('/monthlyUserData', getMonthlyUserCounts);

// update user data
User_route.put("/api/v1/user/:id", UserUpdateData);

// delete user data
User_route.delete("/api/v1/user/:id", UserDeleteDate);

// create user data register
User_route.post("/signup", UserCreateData);

// user login
User_route.post("/login", userLogin);

// verification otp
User_route.post('/verification-Otp',verificationOtp)

// forgot-password
User_route.post("/forgot-password", userForgotPassword);

// rest-password
User_route.post("/reset-password/:token", userRestPassword);

// google login
User_route.get("/auth/google", googleLogin);

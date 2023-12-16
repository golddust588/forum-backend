import express from "express";
import { REGISTER_USER } from "../controllers/user.js";

import { registerValidationMiddleware } from "../middlewares/validation.js";
import { userRegistrationSchema } from "../validation/userSchema.js";
const router = express.Router();

router.post(
  "/register",
  registerValidationMiddleware(userRegistrationSchema),
  REGISTER_USER
);
// router.post("/login", loginValidationMiddleware, LOGIN);

export default router;

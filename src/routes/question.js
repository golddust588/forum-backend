import express from "express";
import auth from "../middlewares/auth.js";
import { INSERT_QUESTION } from "../controllers/question.js";

const router = express.Router();

router.post("/question", auth, INSERT_QUESTION);

export default router;

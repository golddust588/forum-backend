import express from "express";
import auth from "../middlewares/auth.js";
import { GET_ALL_QUESTIONS, INSERT_QUESTION } from "../controllers/question.js";

const router = express.Router();

router.get("/questions", auth, GET_ALL_QUESTIONS);
router.post("/question", auth, INSERT_QUESTION);

export default router;

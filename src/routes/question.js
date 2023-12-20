import express from "express";
import auth from "../middlewares/auth.js";
import {
  DELETE_QUESTION,
  GET_ALL_QUESTIONS,
  GET_ALL_USER_QUESTIONS,
  GET_QUESTION_BY_ID,
  INSERT_QUESTION,
} from "../controllers/question.js";

const router = express.Router();

router.get("/questions", GET_ALL_QUESTIONS);
router.get("/questions/:id", GET_QUESTION_BY_ID);
router.get("/questions/users/:userId", auth, GET_ALL_USER_QUESTIONS);
router.post("/question", auth, INSERT_QUESTION);
router.delete("/question/:id", auth, DELETE_QUESTION);

export default router;

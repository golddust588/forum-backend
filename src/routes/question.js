import express from "express";
import auth from "../middlewares/auth.js";
import {
  DELETE_QUESTION,
  GET_ALL_QUESTIONS,
  INSERT_QUESTION,
} from "../controllers/question.js";

const router = express.Router();

router.get("/questions", auth, GET_ALL_QUESTIONS);
router.post("/question", auth, INSERT_QUESTION);
router.delete("/question/:id", auth, DELETE_QUESTION);

export default router;

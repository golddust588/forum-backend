import express from "express";
import auth from "../middlewares/auth.js";
import {
  INSERT_ANSWER,
  GET_ALL_QUESTION_ANSWERS,
  DELETE_ANSWER,
} from "../controllers/answer.js";

const router = express.Router();

router.get("/question/:id/answers", auth, GET_ALL_QUESTION_ANSWERS);
router.post("/question/:id/answers", auth, INSERT_ANSWER);
router.delete("/answer/:id", auth, DELETE_ANSWER);

export default router;

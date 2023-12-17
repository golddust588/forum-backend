import express from "express";
import auth from "../middlewares/auth.js";
import { INSERT_ANSWER } from "../controllers/answer.js";

const router = express.Router();

router.post("/question/:id/answers", auth, INSERT_ANSWER);

export default router;

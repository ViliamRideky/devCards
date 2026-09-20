import { Router } from "express";
import {
  createQuestion,
  deleteQuestionById,
  getQuestionById,
  getQuestions,
} from "../controller/questions.controller";

const router = Router();

router.get("/", getQuestions);
router.get("/:id", getQuestionById);
router.post("/", createQuestion);
router.delete("/:id", deleteQuestionById);

export default router;

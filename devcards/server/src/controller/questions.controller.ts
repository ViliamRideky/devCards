import type { Request, Response } from "express";
import { beMockQuestions } from "../data/questions.data";
import crypto from "crypto";
import { newQuestionSchema } from "../types/question.schema";

export const getQuestions = (req: Request, res: Response) => {
  const level = req.query.level;

  if (level && level !== "all") {
    const filteredQuestions = beMockQuestions.filter((q) => q.level === level);
    res.json(filteredQuestions);
  } else {
    res.json(beMockQuestions);
  }
};

export const getQuestionById = (req: Request, res: Response) => {
  const questionId = req.params.id;
  const question = beMockQuestions.find((q) => q.id === questionId);

  if (question) {
    res.json(question);
  } else {
    res.status(404).json({ message: "Question not found" });
  }
};

export const createQuestion = (req: Request, res: Response) => {
  const result = newQuestionSchema.safeParse(req.body);

  if (!result.success) {
    res.status(400).json({
      message: "Invalid input",
      errors: result.error.issues,
    });
    return;
  }

  const newQuestion = {
    ...result.data,
    id: crypto.randomUUID(),
  };

  beMockQuestions.push(newQuestion);
  res.status(201).json(newQuestion);
};

export const deleteQuestionById = (req: Request, res: Response) => {
  const questionId = req.params.id;
  const questionIndex = beMockQuestions.findIndex((q) => q.id === questionId);

  if (questionIndex !== -1) {
    beMockQuestions.splice(questionIndex, 1);
    res.status(200).json({ message: "Question deleted successfully" });
  } else {
    res.status(404).json({ message: "Question not found" });
  }
};

import { z } from "zod";

export const newQuestionSchema = z.object({
  question: z.string().trim().min(1, "Question text is required"),
  answer: z.string().trim().min(1, "Answer is required"),
  level: z.enum(["junior", "medior", "senior"]),
  category: z.enum(["react", "javascript", "typescript", "nodejs"]),
});

export type NewQuestionInput = z.infer<typeof newQuestionSchema>;

export interface Question {
  id: string;
  question: string;
  answer: string;
  level: QuestionLevel;
  category: QuestionCategory;
}

export type QuestionLevel = "junior" | "medior" | "senior";
export type QuestionCategory = "react" | "javascript" | "typescript" | "nodejs";
export type LevelFilterValue = QuestionLevel | "all";

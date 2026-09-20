import type { Question, LevelFilterValue, NewQuestion } from "../types/types";

const BASE_URL = "http://localhost:3000/api/questions";

export const fetchQuestions = async (
  level: LevelFilterValue,
): Promise<Question[]> => {
  const url = level === "all" ? BASE_URL : `${BASE_URL}?level=${level}`;
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error("Failed to fetch questions");
  }

  return response.json();
};

export const createQuestion = async (
  newQuestion: NewQuestion,
): Promise<Question> => {
  const response = await fetch(BASE_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(newQuestion),
  });

  if (!response.ok) {
    throw new Error("Failed to create question");
  }

  return response.json();
};

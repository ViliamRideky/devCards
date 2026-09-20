import type { Question } from "../types/types";
import { FlipCard } from "./FlipCard";

interface QuestionListProps {
  question: Question;
  onNextQuestion: () => void;
}

export const QuestionList = (props: QuestionListProps) => {
  const { question, onNextQuestion } = props;

  return (
    <>
      <h1 className="text-3xl font-bold justify-center items-center flex mb-4">
        Question list component
      </h1>

      <FlipCard
        key={question.id}
        question={question.question}
        answer={question.answer}
        level={question.level}
        category={question.category}
      />

      <button
        onClick={() => onNextQuestion()}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Next question
      </button>
    </>
  );
};

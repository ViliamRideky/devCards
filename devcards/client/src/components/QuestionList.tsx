import type { Question } from "../types/types";
import { FlipCard } from "./FlipCard";

interface QuestionListProps {
  question: Question;
  onNextQuestion: () => void;
  onPreviousQuestion: () => void;
}

const arrowButtonClass =
  "shrink-0 w-12 h-12 rounded-full flex items-center justify-center bg-glass-dark/55 hover:bg-glass-dark/75 border border-white/20 backdrop-blur-md text-white transition-colors duration-200 shadow-[0_8px_24px_rgba(4,28,24,0.35)]";

export const QuestionList = (props: QuestionListProps) => {
  const { question, onNextQuestion, onPreviousQuestion } = props;

  return (
    <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-16 md:gap-24 w-full">
      <button
        onClick={() => onPreviousQuestion()}
        aria-label="Previous question"
        className={arrowButtonClass}
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="15 18 9 12 15 6" />
        </svg>
      </button>

      <FlipCard
        key={question.id}
        question={question.question}
        answer={question.answer}
        level={question.level}
        category={question.category}
      />

      <button
        onClick={() => onNextQuestion()}
        aria-label="Next question"
        className={arrowButtonClass}
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="9 18 15 12 9 6" />
        </svg>
      </button>
    </div>
  );
};

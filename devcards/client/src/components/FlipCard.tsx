import { useState } from "react";

interface FlipCardProps {
  question: string;
  answer: string;
}

export const FlipCard = (props: FlipCardProps) => {
  const { question, answer } = props;

  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className="flip-card flex justify-center items-center">
      <div className="flip-card-inner">
        {!isFlipped && (
          <div className="flip-card-front" onClick={handleFlip}>
            <p className="question-text">{question}</p>
          </div>
        )}
        {isFlipped && (
          <div className="flip-card-back" onClick={handleFlip}>
            <p className="answer-text">{answer}</p>
          </div>
        )}
      </div>
    </div>
  );
};

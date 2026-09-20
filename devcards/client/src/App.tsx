import { useState } from "react";
import { LevelFilter } from "./components/LevelFilter";
import { QuestionList } from "./components/QuestionList";
import { QuestionForm } from "./components/QuestionForm";
import type { LevelFilterValue } from "./types/types";
import { useQuery } from "@tanstack/react-query";
import { fetchQuestions } from "./api/questions";

export const App = () => {
  const [selectedLevel, setSelectedLevel] = useState<LevelFilterValue>("all");
  const [selectedIndex, setSelectedIndex] = useState<number>(0);

  const handleLevelChange = (level: LevelFilterValue) => {
    setSelectedLevel(level);
    setSelectedIndex(0);
  };

  const {
    data: filteredQuestions,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["questions", selectedLevel],
    queryFn: () => fetchQuestions(selectedLevel),
  });

  const renderQuestions = () => {
    if (isLoading) return <p>Loading...</p>;
    if (error) return <p>Something went wrong.</p>;
    if (!filteredQuestions || filteredQuestions.length === 0)
      return <p>No questions found.</p>;

    return (
      <>
        <LevelFilter
          selectedLevel={selectedLevel}
          onLevelChange={handleLevelChange}
        />
        <QuestionList
          question={filteredQuestions[selectedIndex]}
          onNextQuestion={() => {
            const nextIndex =
              filteredQuestions.length > selectedIndex + 1
                ? selectedIndex + 1
                : 0;
            setSelectedIndex(nextIndex);
          }}
        />
      </>
    );
  };

  return (
    <>
      {renderQuestions()}
      <QuestionForm />
    </>
  );
};

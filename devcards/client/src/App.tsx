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
    if (isLoading) return <p className="text-white/80 text-lg">Loading...</p>;
    if (error)
      return <p className="text-white/80 text-lg">Something went wrong.</p>;
    if (!filteredQuestions || filteredQuestions.length === 0)
      return <p className="text-white/80 text-lg">No questions found.</p>;

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
          onPreviousQuestion={() => {
            const previousIndex =
              selectedIndex > 0
                ? selectedIndex - 1
                : filteredQuestions.length - 1;
            setSelectedIndex(previousIndex);
          }}
        />
      </>
    );
  };

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-[linear-gradient(160deg,#031412_0%,var(--color-glass-dark)_55%,#020e0c_100%)]">
      {/* cyan svetelné akcenty na tmavom pozadí */}
      <div className="absolute w-[520px] h-[520px] rounded-full -top-40 -left-40 bg-[radial-gradient(circle,rgba(34,211,238,0.55)_0%,rgba(34,211,238,0)_70%)] blur-2xl" />
      <div className="absolute w-[480px] h-[480px] rounded-full top-1/3 -right-40 bg-[radial-gradient(circle,rgba(45,212,191,0.45)_0%,rgba(45,212,191,0)_70%)] blur-2xl" />
      <div className="absolute w-[560px] h-[560px] rounded-full -bottom-48 left-1/4 bg-[radial-gradient(circle,rgba(6,182,212,0.4)_0%,rgba(6,182,212,0)_70%)] blur-2xl" />

      <div className="relative z-10 flex flex-col items-center gap-8 px-4 py-10">
        {renderQuestions()}
        <QuestionForm />
      </div>
    </div>
  );
};

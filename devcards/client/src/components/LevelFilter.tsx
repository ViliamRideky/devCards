import type { LevelFilterValue } from "../types/types";

interface LevelFilterProps {
  selectedLevel: LevelFilterValue;
  onLevelChange: (level: LevelFilterValue) => void;
}

export const LevelFilter = (props: LevelFilterProps) => {
  const { selectedLevel, onLevelChange } = props;

  return (
    <div className="level-filter flex justify-center items-center gap-4 mb-4">
      <h2 className="font-bold text-3xl">Level Filter</h2>
      <button
        onClick={() => onLevelChange("all")}
        className={selectedLevel === "all" ? "active bg-amber-500" : ""}
      >
        All Levels
      </button>
      <button
        onClick={() => onLevelChange("junior")}
        className={selectedLevel === "junior" ? "active bg-green-500" : ""}
      >
        Junior
      </button>
      <button
        onClick={() => onLevelChange("medior")}
        className={selectedLevel === "medior" ? "active bg-yellow-500" : ""}
      >
        Medior
      </button>
      <button
        onClick={() => onLevelChange("senior")}
        className={selectedLevel === "senior" ? "active bg-red-500" : ""}
      >
        Senior
      </button>
    </div>
  );
};

import type { LevelFilterValue } from "../types/types";

interface LevelFilterProps {
  selectedLevel: LevelFilterValue;
  onLevelChange: (level: LevelFilterValue) => void;
}

export const LevelFilter = (props: LevelFilterProps) => {
  const { selectedLevel, onLevelChange } = props;

  const activeClass =
    "px-4 py-2 rounded-full text-sm font-semibold bg-glass-dark/60 border border-white/30 text-white backdrop-blur-md transition-colors duration-200";
  const inactiveClass =
    "px-4 py-2 rounded-full text-sm font-medium bg-white/10 border border-white/10 text-white/70 hover:bg-white/20 hover:text-white transition-colors duration-200";

  return (
    <div className="level-filter flex flex-wrap justify-center items-center gap-3 mb-4 px-5 py-4 rounded-3xl bg-white/10 backdrop-blur-xl backdrop-saturate-150 border border-white/30 shadow-[0_8px_32px_rgba(4,28,24,0.25)]">
      <h2 className="font-bold text-xl text-white mr-2">Level Filter</h2>
      <button
        onClick={() => onLevelChange("all")}
        className={selectedLevel === "all" ? activeClass : inactiveClass}
      >
        All Levels
      </button>
      <button
        onClick={() => onLevelChange("junior")}
        className={selectedLevel === "junior" ? activeClass : inactiveClass}
      >
        Junior
      </button>
      <button
        onClick={() => onLevelChange("medior")}
        className={selectedLevel === "medior" ? activeClass : inactiveClass}
      >
        Medior
      </button>
      <button
        onClick={() => onLevelChange("senior")}
        className={selectedLevel === "senior" ? activeClass : inactiveClass}
      >
        Senior
      </button>
    </div>
  );
};

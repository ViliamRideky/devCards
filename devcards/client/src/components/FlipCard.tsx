import { useState } from "react";

interface FlipCardProps {
  question: string;
  answer: string;
  level: string;
  category: string;
}

export const FlipCard = (props: FlipCardProps) => {
  const { question, answer, level, category } = props;
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => setIsFlipped(!isFlipped);

  return (
    <div className="flex items-center justify-center w-full min-h-[620px] relative overflow-hidden bg-[radial-gradient(120%_90%_at_12%_6%,#7dffd6_0%,rgba(125,255,214,0)_55%),radial-gradient(110%_90%_at_90%_14%,#34e2c4_0%,rgba(52,226,196,0)_52%),radial-gradient(120%_100%_at_50%_102%,#1fb6a8_0%,rgba(31,182,168,0)_60%),linear-gradient(160deg,var(--color-glass-teal-start)_0%,var(--color-glass-teal-mid)_45%,var(--color-glass-teal-end)_100%)]">
      {/* jemné svetelné "orby" na pozadí */}
      <div className="absolute w-64 h-64 rounded-full -top-20 -left-16 bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.45),rgba(255,255,255,0)_70%)] blur-sm" />
      <div className="absolute w-56 h-56 rounded-full -bottom-16 -right-12 bg-[radial-gradient(circle_at_60%_40%,rgba(255,255,255,0.35),rgba(255,255,255,0)_70%)] blur-sm" />

      {/* sklenená karta */}
      <div
        onClick={handleFlip}
        className="relative w-[340px] h-[460px] rounded-[34px] cursor-pointer flex flex-col p-7
                   bg-gradient-to-br from-white/35 via-white/10 to-white/[0.08]
                   backdrop-blur-2xl backdrop-saturate-150
                   border border-white/50
                   shadow-[0_24px_60px_rgba(30,20,70,0.35),inset_0_1px_0_rgba(255,255,255,0.6)]
                   text-white"
      >
        {/* horný riadok – level + category */}
        <div className="flex items-center justify-between">
          <span
            className="inline-flex items-center px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wide
                            bg-glass-dark/55 border border-white/20 backdrop-blur-md"
          >
            {level}
          </span>
          <span
            className="inline-flex items-center px-3 py-1.5 rounded-full text-xs font-medium
                            bg-glass-dark/35 border border-white/10 text-white/85"
          >
            {category}
          </span>
        </div>

        {/* deliaca čiara */}
        <div className="h-px my-5 bg-gradient-to-r from-white/50 to-white/5" />

        {/* obsah – otázka alebo odpoveď */}
        {!isFlipped ? (
          <div className="flex-grow flex flex-col">
            <span className="text-xs font-semibold uppercase tracking-widest text-white/60 mb-3.5">
              Question
            </span>
            <div className="flex-grow flex items-center">
              <p className="text-2xl font-semibold leading-snug tracking-tight">
                {question}
              </p>
            </div>
          </div>
        ) : (
          <div className="flex-grow flex flex-col">
            <div className="flex items-center gap-2 mb-3.5">
              <span className="w-5.5 h-5.5 rounded-full bg-white/90 flex items-center justify-center shrink-0">
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#047857"
                  strokeWidth="3.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </span>
              <span className="text-xs font-semibold uppercase tracking-widest text-white/60">
                Answer
              </span>
            </div>
            <div className="flex-grow overflow-auto">
              <p className="text-base leading-relaxed text-white/90">
                {answer}
              </p>
            </div>
          </div>
        )}

        {/* spodný hint */}
        <div className="flex items-center justify-center gap-1.5 mt-4 text-xs font-medium text-white/55">
          {isFlipped ? "Tap to see question" : "Tap to reveal answer"}
        </div>
      </div>
    </div>
  );
};

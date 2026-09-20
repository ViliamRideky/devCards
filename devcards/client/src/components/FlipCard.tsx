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
    <>
      {/* sklenená karta */}
      <div
        onClick={handleFlip}
        className="relative shrink-0 w-[min(420px,90vw)] h-[560px] rounded-[34px] cursor-pointer flex flex-col p-8
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
              <p className="text-3xl font-semibold leading-snug tracking-tight">
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
              <p className="text-lg leading-relaxed text-white/90">
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
    </>
  );
};

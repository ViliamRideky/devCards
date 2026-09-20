import { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createQuestion } from "../api/questions";
import type {
  NewQuestion,
  QuestionCategory,
  QuestionLevel,
} from "../types/types";

const emptyForm: NewQuestion = {
  question: "",
  answer: "",
  level: "junior",
  category: "javascript",
};

export const QuestionForm = () => {
  const [form, setForm] = useState<NewQuestion>(emptyForm);
  const queryClient = useQueryClient();

  const { mutate, isPending, isError } = useMutation({
    mutationFn: createQuestion,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["questions"] });
      setForm(emptyForm);
    },
  });

  const handleSubmit = (event: React.SyntheticEvent<HTMLFormElement, SubmitEvent>) => {
    event.preventDefault();
    mutate(form);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-4 w-full max-w-md mx-auto mb-8 p-7 rounded-[34px]
                 bg-gradient-to-br from-white/25 via-white/10 to-white/[0.06]
                 backdrop-blur-2xl backdrop-saturate-150
                 border border-white/40
                 shadow-[0_24px_60px_rgba(30,20,70,0.35),inset_0_1px_0_rgba(255,255,255,0.5)]
                 text-white"
    >
      <h2 className="font-bold text-2xl text-center text-white">
        Add question
      </h2>

      <textarea
        placeholder="Question"
        value={form.question}
        onChange={(e) => setForm({ ...form, question: e.target.value })}
        required
        className="bg-white/10 border border-white/25 rounded-xl p-3 text-white placeholder-white/50 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-white/40 resize-none"
      />

      <textarea
        placeholder="Answer"
        value={form.answer}
        onChange={(e) => setForm({ ...form, answer: e.target.value })}
        required
        className="bg-white/10 border border-white/25 rounded-xl p-3 text-white placeholder-white/50 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-white/40 resize-none"
      />

      <select
        value={form.level}
        onChange={(e) =>
          setForm({ ...form, level: e.target.value as QuestionLevel })
        }
        className="bg-white/10 border border-white/25 rounded-xl p-3 text-white backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-white/40 [&>option]:text-black"
      >
        <option value="junior">Junior</option>
        <option value="medior">Medior</option>
        <option value="senior">Senior</option>
      </select>

      <select
        value={form.category}
        onChange={(e) =>
          setForm({ ...form, category: e.target.value as QuestionCategory })
        }
        className="bg-white/10 border border-white/25 rounded-xl p-3 text-white backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-white/40 [&>option]:text-black"
      >
        <option value="javascript">JavaScript</option>
        <option value="typescript">TypeScript</option>
        <option value="react">React</option>
      </select>

      <button
        type="submit"
        disabled={isPending}
        className="bg-glass-dark/60 hover:bg-glass-dark/80 border border-white/25 backdrop-blur-md text-white font-bold py-3 px-6 rounded-full transition-colors duration-200 disabled:opacity-50"
      >
        {isPending ? "Adding..." : "Add question"}
      </button>

      {isError && (
        <p className="text-red-200 text-center">Failed to add question.</p>
      )}
    </form>
  );
};

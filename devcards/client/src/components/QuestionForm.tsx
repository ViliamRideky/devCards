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
      className="flex flex-col gap-3 max-w-md mx-auto mb-8 p-4 border rounded"
    >
      <h2 className="font-bold text-2xl text-center">Add question</h2>

      <textarea
        placeholder="Question"
        value={form.question}
        onChange={(e) => setForm({ ...form, question: e.target.value })}
        required
        className="border rounded p-2"
      />

      <textarea
        placeholder="Answer"
        value={form.answer}
        onChange={(e) => setForm({ ...form, answer: e.target.value })}
        required
        className="border rounded p-2"
      />

      <select
        value={form.level}
        onChange={(e) =>
          setForm({ ...form, level: e.target.value as QuestionLevel })
        }
        className="border rounded p-2"
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
        className="border rounded p-2"
      >
        <option value="javascript">JavaScript</option>
        <option value="typescript">TypeScript</option>
        <option value="react">React</option>
      </select>

      <button
        type="submit"
        disabled={isPending}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded disabled:opacity-50"
      >
        {isPending ? "Adding..." : "Add question"}
      </button>

      {isError && (
        <p className="text-red-500 text-center">Failed to add question.</p>
      )}
    </form>
  );
};

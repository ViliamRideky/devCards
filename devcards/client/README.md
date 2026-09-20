# DevCards

A simple flashcard app for practicing React, Node.js, Express and TanStack Query interview questions — and a playground for experimenting with Claude-driven UI design.

The glassmorphism / iOS-style look of `src/components/FlipCard.tsx` (frosted glass, backdrop-blur, teal-green gradient, dark translucent pill badges) was designed with Claude. That style was then propagated to the rest of the app with the following prompt, asking Claude to restyle the remaining components to match `FlipCard.tsx` without touching any logic:

```
I have a React + TypeScript + Tailwind CSS v4 app. I've already restyled
one component, `src/components/FlipCard.tsx`, with a glassmorphism / iOS-style
design (frosted glass cards, backdrop-blur, teal-green gradient background,
dark translucent pill badges). Please read that file first to understand
the established visual style.

Then restyle the following components to visually match FlipCard.tsx:
- src/components/LevelFilter.tsx
- src/components/QuestionList.tsx
- src/components/QuestionForm.tsx
- src/App.tsx (only the layout/wrapper, not the logic)

Design system to reuse (already defined as Tailwind theme tokens in
src/index.css under @theme):
- --color-glass-teal-start: #0a8f7a
- --color-glass-teal-mid: #049885
- --color-glass-teal-end: #06c98e
- --color-glass-dark: #041c18

Style guidelines:
- Use bg-glass-dark/XX (with opacity modifiers) for dark translucent pill
  badges/tags/buttons, matching the pattern already in FlipCard.tsx
- Use backdrop-blur-xl or backdrop-blur-2xl with backdrop-saturate-150 for
  glass panels (filters, forms, containers)
- Use white/XX opacity utilities (e.g. border-white/50, bg-white/10) for
  glass borders and subtle fills, consistent with FlipCard.tsx
- Rounded corners should be generous (rounded-2xl to rounded-[34px] depending
  on element size)
- Text should be white/light on the dark glass backgrounds
- Buttons and interactive elements should have the same frosted-glass look
  with hover states (slightly increased opacity/brightness on hover)
- Reuse the teal-green gradient (via var(--color-glass-teal-start) etc.) only
  for the page background, not for every individual component

Important constraints:
- Do NOT change any component logic, state, props, event handlers, or
  TypeScript types — only change className / JSX structure needed for styling
- Keep all existing functionality working exactly as before (filtering,
  form submission, mutations, etc.)
- Ask me before making structural JSX changes beyond what's needed for styling
```

---

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])

```

You can also install [eslint-plugin-react-x](https://npmx.dev/package/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://npmx.dev/package/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])

```

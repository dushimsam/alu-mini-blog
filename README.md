# Dev Insights — Mini Blog

A small internal blog for a fictional startup where the team shares quick tips
and insights about **cloud computing**. Built with React, TypeScript and Vite as
a foundation that could grow into a real platform.

## Tech stack

- [Vite](https://vite.dev/) — dev server and build tool
- React 18 + TypeScript
- [styled-components](https://styled-components.com/) — one of the styling methods (see below)

## Getting started

This project uses **Vite**, so you need Node.js 18+ installed.

```bash
# 1. Install dependencies
npm install

# 2. Start the dev server (http://localhost:5173)
npm run dev

# 3. Build for production
npm run build

# 4. Preview the production build locally
npm run preview
```

### Testing / checking it works

There is no unit-test suite yet, so "testing" here means:

- `npm run build` runs the TypeScript compiler (`tsc`) first — if the types are
  wrong the build fails, which is the main safety net.
- `npm run dev` and opening the app lets you confirm the UI renders: the header,
  the three posts, the highlighted featured author, and the **New!** badge on the
  most recent post.
- Open the browser console to see the `withLogger` HOC print mount / unmount
  messages for `PostList`.

## Project structure

```
src/
  components/    Header, PostList, Post, NewBadge
  data/          hardcoded sample posts
  hoc/           withLogger higher-order component
  styles/        external CSS files
  types/         Post TypeScript interface
  utils/         date formatting + preview helpers
```

## Design decisions

### Functional vs. class components

Every component here is a **functional component**. I chose functional components
because:

- They are the current standard in React and what the docs recommend.
- Hooks (`useEffect` in the HOC, `memo` on the Post card) cover everything I
  needed without the extra boilerplate of a class.
- Less code to read — no `render()`, no `this` binding.

A class component would have been a reasonable alternative for the HOC (using
`componentDidMount` / `componentWillUnmount` for the logging), but a functional
component with a `useEffect` cleanup does the same job more concisely.

### Styling methods

The brief asks for at least two styling techniques. This project uses three:

1. **External CSS files** — `src/styles/*.css`, the main approach for layout and
   the post cards.
2. **Inline styles** — the "New Post" button font weight in the header, and the
   highlighted background for featured posts in `Post.tsx`.
3. **styled-components** — the green `New!` badge (`NewBadge.tsx`).

**Conditional styling** shows up in two places:

- Posts by the featured author (`Samuel Dushimimana`) get a tinted background.
- Posts published in the last 24 hours get a `New!` badge.

### Optimization

- `Post` is wrapped in `React.memo`, so a card only re-renders when its own props
  change instead of every time the list re-renders.
- Each item in the list is rendered with a stable, unique `key` (`post.id`)
  rather than the array index.

### Higher-order component

`withLogger` (`src/hoc/withLogger.tsx`) wraps any component and logs to the
console when it mounts and unmounts. It is applied to `PostList`.

## Challenges

- Getting the TypeScript project references right, `tsc` complained that the
  `tsconfig.node.json` referenced project needed `composite: true` and could not
  use `noEmit`. Switching it to `emitDeclarationOnly` with a throwaway `outDir`
  fixed the build.
- Making the `New!` badge actually appear: a hardcoded date would quickly stop
  being "recent", so the newest post's date is generated relative to the current
  time.

## External libraries

- `styled-components` (and its `@types` are bundled with v6)

Everything else is React, React DOM, and the Vite/TypeScript tooling.

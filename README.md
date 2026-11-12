# agent-next-gen-v3

Vite + React + TypeScript prototype for the Agent Next Gen experience. It uses the shared `lyra-ui` design system through a local source alias, so **`lyra-ui` must be cloned next to this repo** before the app will build.

## Folder layout

Both repos must sit in the same parent folder:

```
<parent>/
├── agent-next-gen-v3/   ← this repo
└── lyra-ui/             ← design system (required)
```

## Setup

Requires Node.js 20 or newer (tested with Node 24) and npm.

1. Clone `lyra-ui` next to this repo, pinned to the commit this app was last checked against (see `.lyra-ui-sync`):

   ```bash
   cd <parent>
   git clone https://github.com/davidbauerjr991/lyra-ui.git
   cd lyra-ui
   git checkout 3c8ceadcee17133c83ba586168910523b4bc0664
   npm install
   ```

2. Install this app's dependencies and start the dev server:

   ```bash
   cd ../agent-next-gen-v3
   npm install
   npm run dev
   ```

If `npm run dev` fails with a module-not-found error for `@nicecxone/lyra-ui`, check that `lyra-ui` is at `../lyra-ui` relative to this repo. The alias is defined in `vite.config.ts`.

## Scripts

| Command | What it does |
| --- | --- |
| `npm run dev` | Start the Vite dev server |
| `npm run build` | Type-check and build to `dist/` |
| `npm run lint` | Run ESLint |
| `npm run preview` | Serve the production build locally |
| `npm run deploy` | Build and publish `dist/` to GitHub Pages (`gh-pages`) |

## Deploying to GitHub Pages

`vite.config.ts` sets `base: "/agent-next-gen-v3/"`. The site is served from a project subpath, so this must match the repo name. If you rename the repo, update `base` too.

## Project docs

- `CLAUDE.md` contains the rules for working in this codebase, including the design-system conventions and the `lyra-ui` sync check.
- `PROJECT_SUMMARY.md` is a running changelog of UI decisions.
- `docs/` contains feature specs.

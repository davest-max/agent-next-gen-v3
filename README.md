# agent-next-gen-v3

Vite + React + TypeScript prototype for the Agent Next Gen experience. It uses the shared `lyra-ui` design system, which is included in this repo as a git submodule at `lyra-ui/`.

## Setup

Requires Node.js 20 or newer (tested with Node 24) and npm.

Clone with submodules:

```bash
git clone --recurse-submodules https://github.com/davest-max/agent-next-gen-v3.git
cd agent-next-gen-v3
npm install
npm run dev
```

If you already cloned without `--recurse-submodules`, fetch the design system with:

```bash
git submodule update --init --recursive
```

## Design system (`lyra-ui`)

`lyra-ui/` is a submodule pointing at [davest-max/lyra-ui](https://github.com/davest-max/lyra-ui), pinned to the commit this app is built against. The version recorded in `.lyra-ui-sync` is the one this app was last checked against.

To update `lyra-ui` to a newer commit:

```bash
cd lyra-ui
git fetch origin
git checkout <commit-or-main>
cd ..
git add lyra-ui
git commit -m "Update lyra-ui to <commit>"
```

Then record the new commit in `.lyra-ui-sync` and check that `npm run build` still passes.

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

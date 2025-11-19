# Developer Portfolio

Standalone Angular 17 site with hero, projects, experience, education, contact, and a markdown-powered blog. Content lives in `src/app/data` and `content/blog`, so everything stays editable without touching components.

## Prerequisites

- Node 18+
- npm 9+

## Install & Run

```bash
npm install
npm start
```

`npm start` runs the blog index generator (`npm run generate:blog`) before launching `ng serve` so the blog list always reflects `content/blog/*.md`.

## Content Workflow

- Add or edit markdown files inside `content/blog` with front matter (`title`, `description`, `date`, `tags`).
- Run `npm run generate:blog` to refresh `src/assets/blog/index.json` (automatically executed before `npm start`/`npm run build`).
- Portfolio copy (projects, experience, etc.) lives in `src/app/data/portfolio-data.ts`.

## Build

```bash
npm run build
```

For GitHub Pages deployments the workflow already builds with `--base-href="/${REPO_NAME}/"`. Locally you can emulate the same behavior:

```bash
npm run build -- --base-href="/portfolio/"
```

Artifacts land in `dist/portfolio/browser`.

## Tests

```bash
npm test
```

Unit tests use Karma/Jasmine and include basic coverage for the root component.

## Deployment

`.github/workflows/deploy.yml` installs dependencies, runs the markdown pipeline, builds with the repository-specific base href, and publishes via `actions/deploy-pages`. Ensure GitHub Pages is set to "GitHub Actions" in the repository settings. Deep links are handled via `src/404.html`; update the `BASE_PATH` constant inside that file if you ever change the repository name or GitHub Pages base path.

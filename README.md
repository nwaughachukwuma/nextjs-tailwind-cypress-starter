# nextjs-tailwind-cypress-starter ![cypress version](https://img.shields.io/badge/cypress-8.3.1-brightgreen)

[![Cypress](https://github.com/nwaughachukwuma/nextjs-tailwind-cypress-starter/actions/workflows/cypress.yml/badge.svg)](https://github.com/nwaughachukwuma/nextjs-tailwind-cypress-starter/actions/workflows/cypress.yml)
[![Type Check](https://github.com/nwaughachukwuma/nextjs-tailwind-cypress-starter/actions/workflows/types-check.yml/badge.svg)](https://github.com/nwaughachukwuma/nextjs-tailwind-cypress-starter/actions/workflows/types-check.yml)

This is my personal setup for quickly whipping up a project based on `Next.js`, `Tailwind`, `Cypress`, and off course `Typescript`. `Cypress` is configured for both e2e and component testing to keep things uniform, so you don't have to use `Jest` or `Mocha` or any other library together with `Cypress`.

I've also added basic `github actions` workflows to run the Cypress tests and to check the ts,tsx files on `CI`. Get coding 💪 🚀

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

## 📁 Project Structure

Organized the same way as every next.js project created with `create-next-app`.

### 🦾 Tailwindcss

Referenced at the root component allowing you to use Tailwind classes without having to import any css file, except for abstracted reusable Tailwind styles.

### 🧪 Cypress

There's support for both e2e testing and component testing. e2e testing files can be found in integrations folder and are run with `cy:test` and `cy:run`, while component testing files can be found in **test** folder and are run with `cy:test-ct` and `cy:run-ct`.

# LitElement TypeScript starter 
1. Starter Packet für TS
2. https://lit.dev/docs/tools/starter-kits/
3. Build bassiert an Rollup Erweiterungen
4. Lokal: C:\Users\milan\Projekte\Einarbeitung\Rollup\lit-starter-ts 

## Setup

Install dependencies:

```bash
npm i
```

## Build

```bash
npm run build
```

## Testing

This sample uses Karma, Chai, Mocha, and the open-wc test helpers for testing. See the [open-wc testing documentation](https://open-wc.org/testing/testing.html) for more information.

```bash
npm test
```

## Dev Server

```bash
npm run start
```
There is a development HTML file located at `/dev/index.html` that you can view at http://localhost:8000/dev/index.html.

## Linting

Linting of TypeScript files is provided by [ESLint](eslint.org) and [TypeScript ESLint](https://github.com/typescript-eslint/typescript-eslint). In addition, [lit-analyzer](https://www.npmjs.com/package/lit-analyzer) is used to type-check and lint lit-html templates with the same engine and rules as lit-plugin.

The rules are mostly the recommended rules from each project, but some have been turned off to make LitElement usage easier. The recommended rules are pretty strict, so you may want to relax them by editing `.eslintrc.json` and `tsconfig.json`.

To lint the project run:

```bash
npm run lint
```











# `AUI Monorepo`

Inspired from https://github.com/michaljach/modern-monorepo-boilerplate

## Usage

- Install [lerna](https://github.com/lerna/lerna) first: `yarn global add lerna`
- Run `yarn bootstrap` to install all dependencies and setup monorepo symlinks using [lerna](https://github.com/lerna/lerna).
- Run `yarn start` to start development server with all packages included, by default you'll run `@aui/platform`.
- Run `yarn test` to test all packages simultaneously.

## Setup explained

### Tooling

- Monorepo is done using npm and [lerna](https://github.com/lerna/lerna).

  - Packages are automatically linked together, meaning you can do cross-package work within the repo with hot module reloading and without any building.
  - Commonly used dependencies are hoisted from root, and only appear in the root `package.json`.
  - All shared dependencies appear only as `peerDependecies` in each package.
  - Running `yarn build` makes production-ready builds of all packages.
  - Running `yarn test` runs tests for all packages at once.
  - Each package has its own `scripts` and `dependencies` keys. They are being installed in the root `node_modules` and you can still run standalone commands within each package from its `scripts`.
  - Adding new packages is as simple as dropping an existing package in the `packages` folder, and re-running `yarn bootstrap`.

- Sources and tests are written in strict [TypeScript](https://github.com/Microsoft/TypeScript).

  - We use a single, common, `tsconfig.json`, from which all other `tsconfig.json` files inherit (using `"extends"`).
  - Each project has `src` folder, each with their own `tsconfig.json`. This allows us to define which `@types` packages are accessible on a per-folder basis (`src` should not have access to `test` globals).

- Testing is done using [jest](https://jestjs.io/) and [enzyme](https://airbnb.io/enzyme/).
  - Light, battle-tested, projects with few dependencies.
  - Components are snapshot-tested.
  - All tests are written in TypeScript and linted via ESLint

### Basic structure and configurations

```
packages/
    some-package/
        src/
            some-folder/
            index.ts         // combined exports
        tsconfig.json        // extends ./tsconfig.json
        package.json         // package-specific deps and scripts
        README.md            // docs are important

README.md         // docs are important
.gitignore        // github's default node gitignore with customizations
.npmrc            // internal npm repository config
lerna.json        // lerna configuration
LICENSE           // root license file. picked up by github
package.json      // common dev deps and workspace-wide scripts
setupTests.ts     // enzyme and all tests setup file
tsconfig.json     // common typescript configuration
```

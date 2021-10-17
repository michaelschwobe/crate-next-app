# crate-next-app

An opinionated template/starting point was bootstrapped with [Next.js](https://nextjs.org) and includes Typescript, Storybook, Airbnb/ESLint/Prettier linting, and Cypress/Jest testing.

## Requirements

- `macOS` (Windows _might_ work but is not actively tested)
- `node` version 14 or higher
- `npm` version 8.10 or higher
- `yarn` version 1.22.10 or higher

## Scripts

Reference `package.json` for all scripts. Here are few commonly used scripts:

### Cleanup

```sh
# Removes script generated files/folders.
npm run clean
```

### Linting

```sh
# Run the custom linter.
npm run lint

# Run the custom linter automatically fix files.
npm run lintfix
```

### Testing

```sh
# Runs Jest in interactive watch mode.
npm run test

# Runs Jest and collects coverage.
npm run test:ci

# Runs Cypress.
npm run e2e

# Runs Cypress in headless mode.
npm run e2e:headless
```

### Development

```sh
# Runs the app in the development mode.
npm run start

# Run Storybook in development mode.
npm run storybook
```

### Production

```sh
# Builds the app for production.
npm run build

# Serves the app for production.
npm run serve

# Build Storybook for production.
npm run build-storybook
```

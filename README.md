# Demo FE app with ReactJS (fe-app)

## Features

Weather forecast current for any city or place

Weather Forecast in next 7 days

One-click Celsius to Fahrenheit conversion and vice versa

...

### [DEMO](https://d-fe-app.herokuapp.com/): https://d-fe-app.herokuapp.com/

## Technical Stacks

- Framework: ReactJS, Typescript, Redux, Redux-Saga
- Testing:
  - Unit testing: Jest
  - Integration testing: React Test Library
  - End-to-end (E2E) testing: Cypress
- CSS:
  - Methodologies: BEM & SMACSS
  - Preprocessor: SASS
- Tools:
  - Bundler: Webpack 5
  - Transform: Babel
  - Linter & Format: ESLint & Prettier
- CI / CD: CircleCI & Heroku

## Getting Started

### 1. Required softwares

- NVM (Optional): **^0.33.11**
- Visual Studio Code (Optional): **1.65.1**
- Nodejs: **14.19.1**

### 2. Installation

```bash
npm install
```

### 3. Run Site

Local site url: `http://localhost:4000/`

### 4. Commands

- Start app in delevopment:

```bash
npm run dev
```

- Build app in production:

```bash
npm run build
```

- Run linter

```bash
// Check ESlinter
npm run lint

// Auto fix ESlinter
npm run lint:fix
```

- Run format code

```bash
// Check format code
npm run prettier

// Auto fix format code
npm run prettier:fix
```

- Run Unit Test & Integration Test

```bash
// Check Test
npm run test

// Watch Test
npm run test:watch
```

- Run End to End Test

```bash
// Open in browser
npm run cypress:open

// Run in CI
npm run cypress:run
```

- Generate code coverage

```bash
npm run test:coverage
```

Code coverage at folder: **jest_coverage/lcov-report/index.html**

## Credits

[OpenWeatherMap](https://openweathermap.org/): Weather data API

[Algolia Places](https://community.algolia.com/places/): Place suggestion API

[Icons8.com](https://icons8.com/): Source weather icons

### HAVE CODE FUN!!!

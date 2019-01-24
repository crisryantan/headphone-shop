# Headphone shop

### Tech stack

- **React** - frontend/view library

### Setup and Run

- `$ git clone https://github.com/xxryan1234/headphone-shop.git && cd github` will download the app and cd to the folder once done.

# for both client and server run

- `yarn install` - to install dependencies.
- `yarn start` - Runs the app in development mode.
- `yarn test` - Runs the tests inside the app.

### Questions

- packages/libraries used.

  - [react-loadable](https://github.com/jamiebuilds/react-loadable) - A higher order component for loading components with dynamic imports.
  - [react](https://facebook.github.io/react/) - awesome view library
  - [react-router](https://github.com/ReactTraining/react-router) - for routing
  - [react-boilerplate](https://github.com/react-boilerplate/react-boilerplate/) - A highly scalable, offline-first foundation with the best developer experience and a focus on performance and best practices.
  - [styled components](https://www.styled-components.com/) - Utilising tagged template literals (a recent addition to JavaScript) and the power of CSS, styled-components allows you to write actual CSS code to style your components.

- Structure for the project

  - Top Level

  ```
  app
  │
  │
  ├── components  <--- stateless components
  │   ├── Button
  │   │   ├── css.js <-- styled component
  │   │   └── index.js
  │   │
  │
  ├── containers <--- stateful components/route components
  │   ├── App
  │   │   ├── index.js
  │   │   └── logo.png
  │   │
  │   ├── HomePage
  │   │   ├── index.js
  │   │   └── tests
  │   │       └── index.test.js
  │   │
  │   └──NotFoundPage
  │       └── index.js
  │
  │
  ├── index.html
  ├── routes.js
  ├── manifest.json
  ├── configureStore.js
  └── app.js
  ```

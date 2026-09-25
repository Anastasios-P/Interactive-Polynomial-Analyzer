# Interactive polynomial analysis and visualization application
## Prerequisites:
### Node.js
### npm
### Angular CLI
#### Angular CLI global installieren:
##### npm install -g @angular/cli
### ng new interactive-polynomial-analyzer
#### Which stylesheet system would you like to use?
##### CSS
#### Do you want to enable Serever-Side Rendering (SSR) and Static Site Generation (SSG/Prerendering)? (y/N)
##### N
### Install a local TypeScript developement version:
#### npm install --save-dev typescript
##### Enter command above when in the directory of this project
### ng generate component main-calculator
### ng generate component polynomial-equations
### ng generate component diagram-polynomial-equations
### npm install chart.js --legacy-peer-deps
### npm install ng2-charts --legacy-peer-deps
#### Enter the 5 commands above when in the directory of this project
### Then replace the src folder in your newly created angular project with the src folder in this repository.
### Then go to the directory of this project and type in: ng serve --open

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 21.2.12.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Vitest](https://vitest.dev/) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.

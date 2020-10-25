# SadSkyWeb

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.1.4.

Example deployed SadSkyWeb solution: https://skyterix1991.github.io/SadSkyWeb/

Requires:
- Node.js
- AngularCLI

## How to change ip of the SadSkyWS server?

1. Navigate to `/src/app/shared/config`.
2. Open file `api.constants.ts`.
3. Edit constants `DOMAIN` and `DEFAULT_PATH`. (`DEFAULT_PATH` is location on the server ex. localhost:8080/deafultPath)
4. Run development server or compile.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

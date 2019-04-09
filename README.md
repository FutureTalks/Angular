# Futuretalks Angular Page

## Setup

To install dependencies, run `npm install`. After folder node_modules is created and all packages have been installed, you can start a dev server.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.


## Firebase deploy

Install Firebase Tools globally using `npm install -g firebase-tools`. After installing, run `firebase login` to login to firebase.

NEVER COMMIT ANY KEYS OR PERSONAL INFORMATION!

Get your App config from Firebase and paste it in `src/environments/environment.ts` and `src/environments/environment.prod.ts`.

NEVER COMMIT ANY KEYS OR PERSONAL INFORMATION!

Run `git update-index --assume-unchanged src/environments/*` to avoid committing your keys.

And you're done! Start coding and use `npm run deploy` to build the project and deploy it to firebase.

Great tutorial if you want to set up your own Angular page on Firebase from scratch: https://scotch.io/tutorials/deploying-an-angular-cli-app-to-production-with-firebase 





## Additional information

### Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.


### Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

### Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

### Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

# TwitterAssignment

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.0.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).


NOTES FOR VIEWER:

Twitter Assignment - Yashodhan Apte

DEVELOPMENT:

Steps performed:
Create new angular app using CLI
Installing bootstrap in the app using ‘npm install bootstrap’
Including bootstrap css in style.css
Creating layout skeleton using basic html and bootstrap
Integrated APIs from url and handled on respective pages to bind to html
Decorated page with css for alignments and padding/margins

Architecture of UI
Main-component wraps all other components in the page
Header-component hold navbar, profile image, name,etc.
Side-component hold left aside section of webpage
Body-component holds the ≤router-outlet> which dynamically displays home-component, discover-component, me-component and notification-component depending on URL of the browser.

Known pending issues:
pending links in left side section
pending creating proper input box for writing new tweet
Pending toast message on success of posting new tweet
Pending error handling 
Pending form validation in new post input boxes

Note: I had very less time to work on this task as my current company project is in delivery stage for the current sprint. I apologize for the unpleasant UI.


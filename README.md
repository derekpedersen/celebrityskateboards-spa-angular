# CelebritySkateboards.com

[![Build Status](https://jenkins.derekpedersen.com/buildStatus/icon?job=derekpedersen/celebrityskateboards-spa-angular/master&style=plastic&.png)](https://jenkins.derekpedersen.com/job/derekpedersen/job/celebrityskateboards-spa-angular/job/master/)
[![Coverage Status](https://coveralls.io/repos/github/derekpedersen/celebrityskateboards-spa-angular/badge.png?branch=master)](https://coveralls.io/github/derekpedersen/celebrityskateboards-spa-angular)

[CelebritySkateboards.com](https://celebrityskateboards.com) is a Single Page Application (SPA) written in [Angular](https://angular.io).

## Angular CLI

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.0.5.

### Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

### Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

### Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

#### Production

```bash
ng build --prod --build-optimizer
```

### Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

### Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

### Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## Makefile

The `Makefile` contains the following targets for building, running, and deploying the application. 

### run 

`make run`: calls ng serve

### build

`make build`: npm install && ng build

### test

`make test`: ng test

### coveralls

`make coveralls`: publishes code coverage results to coveralls.io

### docker

`make docker`: builds a docker image of the spa

### publish

`make publish`: publishes the docker image to the container registry (gcr)

### deploy

`make deploy`: deploys the application to a k8s cluster

### kubernetes

`make kubernetes`: calls `build`, `docker`, `publish`, and `deploy`
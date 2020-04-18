# Code Challenge

**Disclaimer** ⚠️ This repository shows challenges done in a short amount of time and it should not reflect code done in an actual project 😃

The project is build with Vue Cli using Babel, Router, Vuex, CSS Pre-processor (SCSS) and Linter.

I chose to use [fitty](https://github.com/rikschennink/fitty) for text resizing because it’s well-supported, well-used and it doesn’t use any dependencies.

- [Code Challenge](#code-challenge)
  - [Run Project](#run-project)
  - [Folder Structure](#folder-structure)
  - [Further Development](#further-development)
    - [Vuex](#vuex)
    - [TypeScript](#typescript)
    - [Consistency](#consistency)
      - [Naming](#naming)
      - [Components](#components)
      - [document.something](#documentsomething)
    - [Architecture](#architecture)
    - [Tests](#tests)
    - [Docker](#docker)

## Run Project

This is how you run the project. You don't need to do anything else than `npm install` and `npm run serve`.

**Project setup**
```
npm install
```

**Run the project**
```
npm run serve
```

## Folder Structure

Here is a list with a description of the content of the folders. I have used the structure from Vue Cli.

* **root**: The root contains all of the configurations like `.gitignore`, `babel.config.js` and `package.json`.
  * **public**: The content of this folder will simply be copied and not go through webpack. This is mainly for `index.html` and static assets `favicon.ico`.
  * **src**: This folder contains all of the main `src` files.
    * **assets**: This folder contains the project’s assets such as `logo.png`.
    * **components**: This folder contains the Vue components <sup>1</sup>.
    * **routes**: This folder contains all of the configuration for routes.
    * **store**: This folder contains all of the Vuex modules <sup>1</sup>.
    * **views**: This folder contains all of the views <sup>2</sup>.

<sup>1</sup> In this case, there is none.

<sup>2</sup> This is here the majority of work for the challenges are done.

## Further Development

I have written down a few thoughts on possible further development.

### Vuex

I started this project to use Vuex. It would be great to use states for the two views and make modules for price and fonts. [This](https://github.com/steffenpedersen/beer-collection/tree/master/src/store) is a project, where I used a simple state.

### TypeScript

This project is not that big. But if we knew, that the application would scale up, it could be beneficial to use TypeScript. It gives the option of static typing and I have often seen great support of code completion and IntelliSense. But if you decide to use TypeScript, I think it's important, that you know why you are using it. I can easily become plain JavaScript in a `.ts`.

I think it would be beneficial to use interfaces.

```ts
export interface RenderedFont {
    text: string;
    width?: number;
    height?: number;
    fontOption?: string;
}
```

### Consistency

#### Naming

I was not consistent in my naming of classes and id's and my general use of those. It would be better to use a naming convention like BEM and it's better to only use classes due to CSS specificity values.

Maybe I could also have avoided a `<div>` or two.

#### Components

Instead of using multiple if statements in `PriceCalculation.vue`, I should use components or some form of helper methods.

#### document.something

The call for the elements should be done outside of the methods. It's not necessary to make the call every single time. It would also be better to search the elements in a more sophisticated way than `document.something`.

### Architecture

The Vue.js components easily gets bloated. Here we could separate the content to files containing logic, views and styling.

General styling should have a folder for itself. I would combine ITCSS and BEM with [this](https://dev.to/lynnewritescode/my-scss-setup-within-a-vue-cli-3-project-4jan) setup for Vue.js.

### Tests

It would be great to make tests. We could make unit tests on the price calculation with the Mocha test framework.

If we hypothetically got the prices from an API, we could make integration tests to check that we're getting a 200 response from the API.

Kent Beck (author of Test Driven Development) once wrote _"I get paid for code that works, not for tests"_. I think it's funny that the author of TDD wrote that.

### Docker

Docker is a tool that makes it easier to run applications by using containers. Containers allow a developer to package up an application with all source code, dependencies, and turn it into one package. I think it's great, because you are able to encapsulate the project and avoid dependency mistakes.

It's also great, if you use services like [TeamCity](https://www.jetbrains.com/teamcity/) to build, test and deploy the project, because you are with the help of Docker creating a stable environment.

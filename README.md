# EPFL Elements React Library

The EPFL Elements React library SI entra is a collection of React
components based on the [EPFL Elements] Style Guide and [EPFL Elements React library].

The code in this repository provides both the [EPFL Elements React SI entra Storybook],
where you can preview each component, and the [epfl-elements-react-si-extra] library
itself, which is published on the npm registry.

[EPFL Elements]: https://epfl-si.github.io/elements/#/
[EPFL Elements React library]: https://epfl-si.github.io/epfl-elements-react/?path=/docs/documentation-introduction--documentation
[EPFL Elements React SI entra Storybook]: https://epfl-si.github.io/epfl-elements-react-si-extra
[epfl-elements-react-si-extra]: https://www.npmjs.com/package/epfl-elements-react-si-extra

## TL;DR (Usage)

1. Bootstrap a new react app using vite:  
    ```sh
    ▶ npm create vite
    ✔ Project name: … test-app
    ? Select a framework: › - Use arrow-keys. Return to submit.
        Vanilla
        Vue
    ❯   React
        [...]
        Others
    ```
1. In the newly create directory, install the library:  
    ```sh
    npm install epfl-elements-react-si-extra
    ```
1. Import component using the library  
    ```js
    import { Component } from 'epfl-elements-react-si-extra'
    ```

## Objectives

The main objective is to provide the EPFL Elements React SI extra library based on EPFL Elements.

## Explore

The best way to explore the components provided by this library is to browse
the Storybook website here: [EPFL Elements React SI entra Storybook].

### Techstack

While it might work otherwise, this library is ment to be used with [React] > 18.

It uses [Storybook] > 9, [TypeScript] > 5.0.2 and [Vite] > 4.3.

[React]: https://react.dev/
[Storybook]: https://storybook.js.org/
[TypeScript]: https://www.typescriptlang.org/
[Vite]: https://vitejs.dev/


## Install

If you are happy with the contents of the library and you would like to use it
in your project, you just need to install it as any other NPM dependency, e.g.
just use `npm i epfl-elements-react-si-extra`. The library is also released under the 
[releases] of the GitHub repository.

[releases]: https://github.com/epfl-si/epfl-elements-react-si-extra/releases

## Contribute

We <3 contributions! You can ask us something or report a bug by filling an 
[issue] in the repository. If you want to contribute to the code base, feel free
to propose a new [pull request]:
  1. Fork the repository
  2. Clone your fork
  3. Create a new branch for your feature or bug fix
  4. Make your changes
  5. Commit your changes
  6. Push your branch to your fork
  7. Open a pull request

[issue]: https://github.com/epfl-si/epfl-elements-react-si-extra/issues
[pull request]: https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-pull-requests


## Develop

To run locally and add some feature to this repository, clone the repository and
run `npm i` to install the dependencies. Then

  - Use `npm run storybook` to deploy the Storybook server (<https://localhost:6006>)
  - To prepare the static Storybook content, use `npm run build-storybook`
  - To build the epfl-elements-react-si-extra library, use `npm run build`

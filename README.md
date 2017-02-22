# U.S. Web Design Standards

This repo contains a copy of the [U.S. Web Design Standards](https://standards.usa.gov) components that are built as reusable components using React.  The goal is to provide a common library (with accompanying documentation) of functional React components that achieve the following goals:

1. Allow for easy mix-in regardless of other JavaScript frameworks being used (e.g. Angular, etc.).
2. Support for both server-side and client-side rendering using the same code base.
3. Baked in 508 compliance for critical components.
4. Full documentation of the common components along with sample code in a real web app.

## Component Library

The component library, located in the `lib` folder, contains React components for each of the U.S. Web Design Standard components.  For each component, an effort is made to fully conform to the styles and guidelines supplied by 18F.  Components also have as much 508 compliance baked in to their internal structure and behavior so that consumers of this library have many fewer 508 requirements to have to code against.  For more information, please see the Styleguide application and its associated documentation.

## Styleguide Application

The `styleguide` application serves two purposes.  First, it allows developers to launch a locally-running version of the styleguide documentation to verify bug fixes, style changes, or simply to have an offline version of the documentation.

Second, it serves as a sample application for using the common components.  The styleguide is written as a React/Redux web application that is served using NodeJS and Express and supports both server-side and client-side rendering (sometimes called a 'universal' or 'isomorphic' application).  This serves two purposes.  First, it means that the page is fully formed when it is first rendered by the user, reducing the need for loading screens.  Second, it allows for a full page render even if the user has JavaScript disabled in their browser.  This is an important factor in achieving certain portions of 508 compliance.

## Development

To do local development, clone the git repository and then run `npm install` to install all the necessary NodeJS packages.  Once all the packages are installed, you can run the application locally by running `npm start` and then going to [http://localhost:3000]() in the browser of your choice.

The development server is configured to automatically rebuild and reload any resources that change.

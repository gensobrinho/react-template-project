# React Boilerplate - Feature-Based Architecture

This is a React boilerplate project designed to promote a clean and maintainable codebase by organizing code based on features.

## Branch Structure

To facilitate focused development and library upgrades, branches are organized by the libraries used in the project.  For example:

*   `main`: The primary branch, representing the stable, production-ready codebase. It contains the base React project with Emotion for styling.
*   `with-axios`: This branch integrates and configures Axios for making HTTP requests. It's used for developing features that require data fetching.
*   `with-zustand`: This branch implements Zustand for state management. It's used for developing features that require global state or complex data handling.
*   `with-zustand-axios`: This branch combines Zustand and Axios, providing a complete solution for state management and data fetching. It's used for features that require both.

## Acknowledgements
This project was inspired by the teachings of the front-end master, [@ramonprata](https://ramonprata.medium.com/).

# About This Project
In an effort to learn and understand fundamental concepts of redux-saga. I built a simple
interface that gets yesterday's, today's, and tomorrow's nba games.

## How to Run This Project
See package.json for dependencies. Please have `yarn` installed globally on your machine.
Also advised to run this project on `node v12.13.1` or higher.
From the root of this project run the following command lines
```
yarn install
yarn start
```

## Take Aways
Redux Saga is a way to seperate and organize "effects" away from the redux store. Allowing for
redux to keep to its fundamental "functional programming" style. Underneath the framework is
ES6 Generators. When used in conjunction with javascript Promises, generators help test the
implementation of asynchronous code. By checking each step of an async line of js, sagas
takes `yield` values compares them to expected function calls and redux actions.

## Katas
Of the burning questions I have two stand out:
1. Its fairly easy to test generators with sagas, but I need to get a better grasp on how async
functions are to be tested. Either every async function needs to be turned into a generator, or
there is still a place for mocks in unit testing.

2. In future projects I want to work with GraphQL servers and utilize client interfaces like
React-Apollo. However, most api that are written today are REST apis. In terms of organization,
what would be the best practices within the React community for managing state if both sagas
and GraphQL are present? Would GraphQL queries still need to be processed as Sagas, or is this
a layer of complexity that should be avoided?
# Assignment for Frontend [DONE]

In order to launch at the same time client and server just type the following npm script:

```sh
yarn start
```

## Introduction

For this assignment what you will build is a simple page (and a server app) for querying and filtering a dataset of Pokémons.  
The Pokèmons dataset is harcoded inside the project.

The server app will be powered by Node.js, `typescript` and [`apollo-server`](https://www.apollographql.com/docs/apollo-server/) and it is partially implemented.  
The client app will be powered by `typescript`, `react`, [`apollo-client`](https://www.apollographql.com/docs/react/) and [`antd`](https://ant.design/) and you will build it from scratch.

You can add other libraries if needed; if you are not confident with some of this libraries you can pick alternatives.  
For the client side app we recommend to use `webpack`.

This project is powered by `yarn` and workspaces.  
Once cloned this project can be installed with `yarn install`.  
You can run scripts on client with `yarn workspace @frontend-assignment/client <command>`, and on server with `yarn workspace @frontend-assignment/server <command>`.  
For the server you can start the the app with `yarn workspace @frontend-assignment/server start`.

## Tasks

### Server side

The server schema follows the [relay](https://facebook.github.io/relay/graphql/connections.htm) standard for connection, simplified.

- :white_check_mark: Implement `pokemonsByType` query: it accepts a `type: String` parameter and return a connection of Pokèmons.
- :white_check_mark: If you feel confident you can add pagination parameters `after: String` and `limit: Int`.

### Client side

Use components in `antd` library to create a page with this capabilities:

- :white_check_mark: possibility to search Pokémons by name
- :white_check_mark: possibility to filter Pokémons by type
- :white_check_mark: display Pokémons search result in a table with columns:
  - name
  - type
  - classification
- :white_check_mark: if `hasNextPage` is true add the possibility to load more results.

## Submission

You can submit your work through:

- [GitHub](https://github.com)
- [CodeSandbox](https://codesandbox.io)
- [Glitch](https://glitch.com)
- ...other

The code must be available to us in order to evaluate your submission.

## **Evaluation**

Our goal is to find answers to those questions:

- Do you understand the TypeScript language and more in general web technologies?
- Can you design interfaces that are clear and easy to use?
- Do you master your working environment?

Due to the limited time consider the followings:

- It is NOT important to have a fully functional application at the end.
- We'll develop just for the latest version of Google Chrome.

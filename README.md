<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

This is a tiny educational API written with [NestJS](https://github.com/nestjs/nest).  
It is **not a custom production app**, but rather the working code that follows along with an **Udemy course on Nest.js by Stephen Grider**.  
The goal of the project is to explore Nest's fundamentals in the simplest possible way: modules, controllers, services, dependency injection, and a very lightweight persistence layer.

## What this project demonstrates

- **NestJS fundamentals**: modules, controllers, services, providers.
- **Dependency Injection**: how Nest wires a `MessagesService` to a `MessagesRepository`.
- **DTOs and validation-ready structure**: using a `CreateMessageDto` to shape request bodies.
- **Simple persistence**: messages are stored in a local `messages.json` file via a custom repository.
- **Basic error handling**: returning a `NotFoundException` when a message does not exist.

## Tech stack

- **Runtime**: Node.js
- **Framework**: NestJS
- **Language**: TypeScript
- **Storage**: JSON file (`messages.json`, purely for learning purposes)

## Installation

From the project root:

```bash
npm install
```

## Running the app

```bash
# development
npm run start

# watch mode (recommended while coding)
npm run start:dev

# production mode (compiled)
npm run start:prod
```

By default, the app listens on `http://localhost:3000`.

## API overview

All routes are prefixed with `/messages` via the `MessagesController`.

- **GET `/messages`**  
  - **Description**: List all stored messages.
  - **Response**: An object keyed by `id`, each value containing `{ id, content }`.

- **GET `/messages/:id`**  
  - **Description**: Fetch a single message by id.
  - **Responses**:
    - `200 OK` with `{ id, content }` if found.
    - `404 Not Found` (`NotFoundException`) if the message does not exist.

- **POST `/messages`**  
  - **Description**: Create a new message.
  - **Body**:
    ```json
    {
      "content": "Your message text"
    }
    ```
  - **Response**: Currently no explicit response body is returned; the repository writes the new message into `messages.json`.

## How data is stored

- Messages are read from and written to `messages.json` in the project root.
- The `MessagesRepository`:
  - Reads the entire JSON file into memory.
  - Generates a random numeric `id`.
  - Stores each message as `{ id, content }` keyed by its `id`.
- This is **deliberately naive** and meant only to keep things simple and transparent while learning NestJS.  
  For any real application, you would use a proper database and a robust persistence layer.

## Tests

The testing setup is the standard Nest CLI Jest configuration. Commands:

```bash
# unit tests
npm run test

# e2e tests
npm run test:e2e

# test coverage
npm run test:cov
```

## Course attribution

- **Instructor**: Stephen Grider  
- **Platform**: Udemy  
- **Purpose**: This repository mirrors the example "messages" service from Stephen Grider's Nest.js course and is intended **only for learning and experimentation**.

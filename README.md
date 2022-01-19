# Game Pencil Engine Docs

![Game Pencil Engine Logo](./static/img/gpe-logo.png)
Welcome to the official documentation of the [Game Pencil Engine](htps://www.gamepencil.net "Game Pencil Engine"), the simple C++ modular game engine. Here you will learn how to get started with the engine, familiarize yourself with it's design and find more detailed information on it's classes, functions, variables and the editor.&nbsp;

We will do our best here to get you acquainted with the engine and editor as well as the different backends involved with Game Pencil Engine. There will be coverage on all types of classes, functions, variables and structs. If you are still unable to find the exact thing you are looking for please let us know via Github or Discord, so we can best help you.

Please review the table of contents below. Please note, with the engine being modular, we will do our best to include documentation on as many modules as possible which are official module or community created modules that are stable.&nbsp;

## Getting Started

- [Introduction to Game Pencil Engine](introduction)
- [Quick Start Guide](quick-start-guide/)
- [Editor Guide](editor)
- [Building Game Pencil from Source](building-game-pencil-from-source-code/)

## Development

- Setting up Game Pencil
- Coding in Game Pencil

## Community

- Community groups
- Contributing code

## Modules

- #### Backend Modules( Your game requires one below):

  - **[Raylib Modules](including-raylib-module)**
  - **[SDL2 Modules](including-sdl2-module)**
  - **[SFML Modules](including-sfml-module)**
  - [Irrlicht Modules](including-irrlicht-module/) _ - Not Yet Supported_
  - [OLC::PixelGameEngine Modules](including-olc) _ - Not Yet Supported_
  - **[Comparing backend modules](comparing-modules)**

- #### Front-end modules(These make up the bulk of what Game Pencil Engine does):
  - Audio Modules _ - Coming Soon _
  - Cursor Modules _ - Coming Soon _
  - Font Modules _ - Coming Soon _
  - Input Modules _ - Coming Soon _
  - Networking Modules _ - Coming Soon _
  - Render Modules _ - Coming Soon _
  - Scripting Modules _ - Cooming Soon _
  - Time Modules _ - Coming Soon _
  - Vide Playback Modules _ - Coming Soon _
  - Window Modules _ - Coming Soon _

## Coding Guide

- The C++ language _ - Coming Soon _
- [The gpe namespace](gpe-namespace)
- Engine Classes _ - Coming Soon _
- Engine Functions _ - Coming Soon _
- Engine Variables _ - Coming Soon _

## Documentation License

### Creative Commons License

The Game Pencil Engine Documentation is licensed under [Creative Commons](https://creativecommons.org/licenses/by/4.0/).

You are free to

- **Share** — copy and redistribute the material in any medium or format
- **Adapt** — remix, transform, and build upon the material
  for any purpose, even commercially.

### Under The Following Terms:

- **Attribution** — You must [give appropriate credit](https://creativecommons.org/licenses/by/4.0/#), provide a link to the license, and [indicate if changes were made](https://creativecommons.org/licenses/by/4.0/#). You may do so in any reasonable manner, but not in any way that suggests the licensor endorses you or your use

## Reporting Issues With Documentation

If while reading this documentation you run into any outdated information, typos, errors or omissions please [submit an issue request](https://github.com/pawbyte/gpe-docs/issues) and include the page URL in your notes.

Thank you

### Installation

This website is built using [Docusaurus 2](https://docusaurus.io/), a modern static website generator.

Use Yarn to install the site build dependencies:

```
$ yarn
```

### Local Development

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

```
$ yarn start
```

### Build

This command generates static content into the `build` directory and can be served using any static contents hosting service.

```
$ yarn build
```

### Deployment

Using SSH:

```
$ USE_SSH=true yarn deploy
```

Not using SSH:

```
$ GIT_USER=<Your GitHub username> yarn deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.

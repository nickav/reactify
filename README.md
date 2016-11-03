Reactify
========================================

#### Easy way to get up and running with a single page react app

## Features

- Install the project in just two commands (see "Developing" below).
- Use [React][react] with [React hotloader][react-hotloader] to write our single-page app.
- Use [Redux][redux], [React Router][react-router] and [fetch][fetch]
- Use [SCSS][scss] to keep our CSS organized into logical components.
- Use [Autoprefixer][autoprefixer] to automatically insert browser prefixes where necessary to handle cross browser compatibility.
- Use [Webpack][webpack] to automatically launch a development server, and automatically reload the page whenever we change things.
- Use [Standard][standard] JavaScript code style

All with one command from the terminal:

```bash
npm start
```

## Setup

Install [npm][npm-install].

```bash
npm install
```

## Developing

```bash
npm start
```

## Reminders

If you want to use this repo for your next project, make sure to make the following changes:

1. Edit `config.json`, filling in the HTML metadata associated with your site.
2. Edit `package.json` providing a `name`, `version`, `description`, `license`, and `repository.url`.
3. Remove the `.git` folder, so that you start from a fresh commit history.
4. Edit `LICENSE.md` and `README.md` files.

## Structure

```bash
├── config.json       # site configuration variables that get injected into index.html
├── README.md         # This file
├── dist/             # Webpack builds the static site into this directory
├── package.json      # Dependencies
└── src/              # All source code
    ├── font/         # Font files
    ├── img/          # Images and SVGs
    ├── js/           # Javascript libraries and scripts
    ├── sass/         # Stylesheets
```

[autoprefixer]: https://css-tricks.com/autoprefixer/
[fetch]: https://github.com/github/fetch
[handlebars]: http://handlebarsjs.com/
[htmlmin]: https://github.com/kangax/html-minifier
[imagemin]: https://github.com/imagemin/imagemin
[react]: https://facebook.github.io/react/
[react-router]: https://github.com/ReactTraining/react-router
[redux]: http://redux.js.org/
[react-hotloader]: https://github.com/gaearon/react-hot-boilerplate
[npm-install]: https://nodejs.org/en/download/
[scss]: http://sass-lang.com/
[standard]: http://standardjs.com/
[webpack]: https://webpack.github.io/

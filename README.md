Reactify
========================================

#### _Because web development doesn't need to be a pain._
Simple single-page React app. Inspired by Minimill's [project template][project-template].

## Features

- [React][react] with [React Hotloader][react-hotloader] to write our single-page app.
- [Redux][redux], [React Router][react-router] and [axios][axios].
- [SCSS][scss] to keep our CSS organized into logical components.
- [Autoprefixer][autoprefixer] to automatically insert browser prefixes where necessary to handle cross browser compatibility.
- [Webpack][webpack] to launch a development server, and automatically reload the page whenever we change things.
- [Standard][standard] JavaScript code style

All with one command from the terminal:

```bash
npm start
```

## Setup

Install [yarn][yarn-install]. Then run:

```bash
yarn
```

## Developing

Keep this running in the background:

```bash
yarn start
```

## Testing

```bash
yarn lint
```

## Publishing

```bash
yarn dist
```

## Structure

```bash
├── config.json          # site config vars that get injected into index.html
├── README.md            # This file
├── dist/                # Webpack builds the static site into this directory
├── package.json         # Dependencies
└── src/                 # All source code
    ├── entry.js         # Webpack entry point
    ├── font/            # Font files
    ├── img/             # Images and SVGs
    └── js/              # Javascript libraries and scripts
        ├── components/  # React components
        ├── helpers/     # Helper files
        ├── store/       # Redux logic
    ├── sass/            # Stylesheets
```

## Reminders

If you want to use this repo for your next project, make sure to make the following changes:

1. Edit `config.json`, filling in the HTML metadata associated with your site.
2. Edit `package.json` providing a `name`, `version`, `description`, `license`, and `repository.url`.
3. Remove the `.git` folder, so that you start from a fresh commit history.
4. Edit `LICENSE.md` and `README.md` files.

[autoprefixer]: https://css-tricks.com/autoprefixer/
[axios]: https://github.com/mzabriskie/axios
[handlebars]: http://handlebarsjs.com/
[htmlmin]: https://github.com/kangax/html-minifier
[imagemin]: https://github.com/imagemin/imagemin
[project-template]: https://github.com/minimill/project-template
[react]: https://facebook.github.io/react/
[react-router]: https://github.com/ReactTraining/react-router
[redux]: http://redux.js.org/
[react-hotloader]: https://github.com/gaearon/react-hot-boilerplate
[scss]: http://sass-lang.com/
[standard]: http://standardjs.com/
[webpack]: https://webpack.github.io/
[yarn-install]: https://yarnpkg.com/lang/en/docs/install/

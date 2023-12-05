# mitlib-style

This repo holds the design system for the MIT Libraries. See the results at [https://mitlibraries.github.io/mitlib-style/](https://mitlibraries.github.io/mitlib-style/)

## Examples!

[Examples](examples.md)

## In use on:
* lib.mit.edu
* ebooks app
* TIMDEX API
* publicaccessquicksubmit.mit.edu
* thesis specs on libraries.mit.edu
* solenoid

## Local development

### Prerequisites

You will need the version of ruby specified in `.ruby-version`

### Startup

```bash
bundle install
```

Start a local Jekyll server

```bash
bundle exec jekyll serve
```

## Compiling CSS (IMPORTANT!)

This repository includes compiled assets in the `dest/` directory. At this time, you must manually generate them via:

`bundle exec sass _assets/sass/libraries-main.scss dest/css/libraries-main.css`

and

`bundle exec sass --style=compressed _assets/sass/libraries-main.scss dest/css/libraries-main.min.css`

Please be sure to commit those updates when making changes as they are used by other projects.

## Concatenating JavaScript

This is not automatic, but we change it so infrequently maybe it doesn't matter? Gulp was used at one point to do this,
but it stopped working in this repo so it was all removed. If you change JS, please make sure to manually update the
concatenated versions in `dest/js/*.js`. Sorry!

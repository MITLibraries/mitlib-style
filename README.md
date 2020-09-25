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

You will need NPM, Gulp, and Bundler. According to [the Gulp documentation](https://gulpjs.com/docs/en/getting-started/quick-start/), you will also need to install gulp globally.

### Startup

Install tooling with bundler and NPM

```bash
bundle install
npm install
```

Start a local Jekyll server

```bash
bundle exec jekyll serve
```

Start the Gulp "watch" task for live updates as you update styles

```bash
gulp watch
```

You should now see the design system at [localhost:4000](http://localhost:4000/).

##Please note##

This repository includes compiled assets in the `dest/` directory. Please be sure to commit those updates to any further work.

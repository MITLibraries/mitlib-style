// gulpfile.js
'use strict';

const gulp = require('gulp');
const autoprefixer = require('autoprefixer');
const concat = require('gulp-concat');
const cssnano = require('cssnano');
const del = require('del');
const imagemin = require('gulp-imagemin');
const jshint = require('gulp-jshint');
const newer = require("gulp-newer");
const rename = require('gulp-rename');
const sass = require('gulp-sass');
const uglify = require('gulp-uglify');


// clean up time!
function clean() {
    return del(['dest/css', 'dest/scripts', 'dest/i']);
}

// Images
function images() {
  return gulp.src('_assets/i/**/*.+(png|jpg|gif|svg)')
  .pipe(newer('dest/i'))
  .pipe(imagemin())
  .pipe(gulp.dest('dest/i'))
}

function styles() {
  return gulp.src('_assets/sass/libraries-main.scss')
    .pipe(sass({ outputStyle: 'expanded' }))
    .pipe(autoprefixer('last 2 version'))
    .pipe(gulp.dest('dest/css'))
    .pipe(cssnano())
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('dest/css'))
    //.pipe(notify({ message: 'Styles task complete' }));
}

function guideStyles() {
  return gulp.src('_assets/sass/guide-helper.scss')
    .pipe(sass({ outputStyle: 'expanded' }))
    .pipe(autoprefixer('last 2 version'))
    .pipe(gulp.dest('dest/css'))
    //.pipe(notify({ message: 'Guide styles task complete' }));
}

// Scripts
function scripts() {
  return gulp.src('_assets/js/**/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter('default'))
    .pipe(concat('libraries-main.js'))
    .pipe(gulp.dest('dest/js'))
    .pipe(rename({ suffix: '.min' }))
    .pipe(uglify())
    .pipe(gulp.dest('dest/js'))
    //.pipe(notify({ message: 'Scripts task complete' }));
}

function watch() {
  
}


gulp.task('default', gulp.series('clean', function (done) {
    gulp.parallel('styles', 'guide-styles', 'scripts', 'images');
    done();
}));

gulp.task('watch', function() {

  // Watch .scss files
  gulp.watch('_assets/sass/**/*.scss', ['styles']);

  // Watch .js files
  gulp.watch('_assets/js/**/*.js', ['scripts']);

  // Watch image files
  gulp.watch('_assets/i/**/*', ['images']);

});

function clean(cb) {
    return del(['dest/css', 'dest/scripts', 'dest/i']);
  cb();
}

function build(cb) {
  // body omitted
  cb();
}

exports.build = build;
exports.default = series(clean, build);

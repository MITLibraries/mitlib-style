// gulpfile.js
'use strict';

var gulp = require('gulp'),
    sass = require('gulp-ruby-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    cssnano = require('gulp-cssnano'),
    jshint = require('gulp-jshint'),
    uglify = require('gulp-uglify'),
    imagemin = require('gulp-imagemin'),
    rename = require('gulp-rename'),
    concat = require('gulp-concat'),
    notify = require('gulp-notify'),
    cache = require('gulp-cache'),
    del = require('del');

gulp.task('styles', function() {
  return sass('_assets/sass/libraries-main.scss', { style: 'expanded' })
    .pipe(autoprefixer('last 2 version'))
    .pipe(gulp.dest('dest/css'))
    .pipe(rename({suffix: '.min'}))
    .pipe(cssnano())
    .pipe(gulp.dest('dest/css'))
    .pipe(notify({ message: 'Styles task complete' }));
});

gulp.task('guide-styles', function() {
  return sass('_assets/sass/guide-helper.scss', { style: 'expanded' })
    .pipe(autoprefixer('last 2 version'))
    .pipe(gulp.dest('dest/css'))
    .pipe(notify({ message: 'Guide styles task complete' }));
});

// Scripts
gulp.task('scripts', function() {
  return gulp.src('_assets/js/**/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter('default'))
    .pipe(concat('libraries-main.js'))
    .pipe(gulp.dest('dest/js'))
    .pipe(rename({ suffix: '.min' }))
    .pipe(uglify())
    .pipe(gulp.dest('dest/js'))
    .pipe(notify({ message: 'Scripts task complete' }));
});

// Images
gulp.task('images', function(){
  return gulp.src('_assets/i/**/*.+(png|jpg|gif|svg)')
  .pipe(cache(imagemin()))
  .pipe(gulp.dest('dest/i'))
  .pipe(notify({ message: 'Images task complete' }));
});

// clean up time!
gulp.task('clean', function() {
    return del(['dest/css', 'dest/scripts', 'dest/i']);
});

gulp.task('default', ['clean'], function() {
    gulp.start('styles', 'guide-styles', 'scripts', 'images');
});

gulp.task('watch', function() {

  // Watch .scss files
  gulp.watch('_assets/sass/**/*.scss', ['styles']);

  // Watch .js files
  gulp.watch('_assets/js/**/*.js', ['scripts']);

  // Watch image files
  gulp.watch('_assets/i/**/*', ['images']);

});

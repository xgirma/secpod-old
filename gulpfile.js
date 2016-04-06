'use strict';

var jshint = require('gulp-jshint');
var gulp   = require('gulp');

gulp.task('lint', function() {
  return gulp.src([
        './public/javascript/*.js',
        './*.js',
        './routes/*.js',
        './models/*.js'])
    .pipe(jshint())
    .pipe(jshint.reporter(''));
});
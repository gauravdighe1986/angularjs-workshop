var gulp = require('gulp');
var cleanCSS = require('gulp-clean-css');
 
gulp.task('minify-css', function() {
  return gulp.src('styles/*.css')
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(gulp.dest('dist'));
});


//below with source map
var gulp = require('gulp');
var cleanCSS = require('gulp-clean-css');
var sourcemaps = require('gulp-sourcemaps');
 
gulp.task('minify-css', function() {
    return gulp.src('./src/*.css')
        .pipe(sourcemaps.init())
        .pipe(cleanCSS())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('dist'));
});

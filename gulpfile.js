var gulp   = require('gulp');

var jshint = require('gulp-jshint');

var SOURCE_FILES = ['./public/app/**/*.js'] 

gulp.task('lint', function() {
  console.log("running jshint");

  return gulp.src(SOURCE_FILES)
    .pipe(jshint())
    .pipe(jshint.reporter('default'));
});



var source = require('vinyl-source-stream')
var streamify = require('gulp-streamify')
var browserify = require('browserify')
var uglify = require('gulp-uglify')
var rename = require('gulp-rename')

// using vinyl-source-stream: 
gulp.task('browserify', function() {
  var bundleStream = browserify('./main.js').bundle()
 
  bundleStream
    .pipe(source('main.js'))
    .pipe(streamify(uglify()))
    .pipe(rename('app.bundle.js'))
    .pipe(gulp.dest('./'))
})
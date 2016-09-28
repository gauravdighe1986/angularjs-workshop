var gulp = require('gulp')

var source = require('vinyl-source-stream')
var streamify = require('gulp-streamify')
var browserify = require('browserify')
var uglify = require('gulp-uglify')
var rename = require('gulp-rename')
var concat = require('gulp-concat')
var sourcemaps = require('gulp-sourcemaps')
var ngAnnotate = require('gulp-ng-annotate');

// using vinyl-source-stream: 
gulp.task('browserify', function() {
  var bundleStream = browserify('./main.js').bundle()
 
  bundleStream
    .pipe(source('main.js'))
    .pipe(ngAnnotate())
    .pipe(streamify(uglify()))
    .on('error', gutil.log)
    .pipe(rename('app.bundle.js'))
    .pipe(gulp.dest('./'))
})

var uglify = require('gulp-uglify')
var ngAnnotate = require('gulp-ng-annotate')

gulp.task('js', function () {
  gulp.src(['src/**/module.js', 'src/**/*.js'])
    .pipe(sourcemaps.init())
      .pipe(concat('app.js'))
      .pipe(ngAnnotate())
      .pipe(uglify())
      .on('error', gutil.log)
     .pipe(sourcemaps.write())
     .pipe(gulp.dest('.'))
})
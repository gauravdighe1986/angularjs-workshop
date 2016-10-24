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

var gutil = require("gulp-util");

// using vinyl-source-stream: 
gulp.task('browserify', function() {
  var bundleStream = browserify('./main.js').bundle()
 
  bundleStream
    .pipe(source('main.js'))
	.pipe(ngAnnotate())
    .pipe(streamify(uglify()))
    .pipe(rename('app.bundle.js'))
    .pipe(gulp.dest('./public'))
})


var source = require('vinyl-source-stream')
var streamify = require('gulp-streamify')
var browserify = require('browserify')
var uglify = require('gulp-uglify')
var rename = require('gulp-rename')
var concat = require('gulp-concat')
var sourcemaps = require('gulp-sourcemaps')
var ngAnnotate = require('gulp-ng-annotate');


var uglify = require('gulp-uglify')
var ngAnnotate = require('gulp-ng-annotate')

gulp.task('js', function () {
  gulp.src(['public/app/**/module.js', 'public/app/**/config.js', 'public/app/**/*.js'])
    .pipe(sourcemaps.init())
      .pipe(concat('app.js'))
      .pipe(ngAnnotate())
      .pipe(uglify())
      .on('error', gutil.log)
     .pipe(sourcemaps.write())
	 .pipe(rename('app.bundle.js'))
     .pipe(gulp.dest('./public'))
})
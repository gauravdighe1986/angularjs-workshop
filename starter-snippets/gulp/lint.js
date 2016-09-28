var gulp   = require('gulp');

var jshint = require('gulp-jshint');

var SOURCE_FILES = ['./public/app/**/*.js'] 

gulp.task('lint', function() {
  console.log("running jshint");

  return gulp.src(SOURCE_FILES)
    .pipe(jshint())
    .pipe(jshint.reporter('default'));
});

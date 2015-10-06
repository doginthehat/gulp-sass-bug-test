var gulp = require('gulp'),
	sass = require('gulp-sass');
	
gulp.task('sass', function () {
  return gulp
    .src('build.scss')
	.pipe(sass({outputStyle: 'compressed'}))
	.pipe(gulp.dest('./build'));
});

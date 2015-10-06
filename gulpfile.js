var gulp = require('gulp'),
	sass = require('gulp-sass'),
	header = require('gulp-header');
	
gulp.task('sass', function () {
  return gulp
    .src('build.scss')
	.pipe(sass({outputStyle: 'compressed'}).on('error', function(err) {notify().write(err); this.emit('end');}))
	.pipe(header('/*! Imma destroy your bom */'))
	.pipe(gulp.dest('./build'));
});

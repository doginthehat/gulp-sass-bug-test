var gulp = require('gulp'),
	sass = require('gulp-sass');
	
gulp.task('sass', function () {
  return gulp
    .src('build.scss')
	.pipe(sass({outputStyle: 'compressed'}).on('error', function(err) {notify().write(err); this.emit('end');}))
	.pipe(gulp.dest('./build'));
});

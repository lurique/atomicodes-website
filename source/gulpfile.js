// Requiring necessary packages
var gulp = require('gulp')
		watch = require('gulp-watch'),
		jade = require('gulp-jade'),
		sass = require('gulp-sass'),
		cssNano = require('gulp-cssnano'),
		uglify = require('gulp-uglify'),
		concat = require('gulp-concat'),
		changed = require('gulp-changed'),
		browserSync = require('browser-sync');

// Custom tasks
gulp.task('html', function() {
	gulp.src('index.jade')
		.pipe(changed('../public'), {extension: 'html'})
   	.pipe(jade())
   	.pipe(gulp.dest('../public'));
});

gulp.task('css', function() {
	gulp.src('scss/main.scss')
		.pipe(changed('../public/css'), {extension: 'css'})
		.pipe(concat('style.min.css'))
		.pipe(sass())
		.pipe(cssNano())
		.pipe(gulp.dest('../public/css'))
});

gulp.task('js', function() {
	gulp.src('js/**/*.js')
		.pipe(changed('../public/js'), {extension: 'js'})
		.pipe(concat('script.min.js'))
		.pipe(uglify())
		.pipe(gulp.dest('../public/js'))
});

gulp.task('watch', function() {
	var html = gulp.watch(['./index.jade', './inc/**/*.jade'], ['html']);
  var css = gulp.watch(['./scss/**/*.scss'], ['css']);
  var js = gulp.watch(['./js/**/*.js'], ['js']);
});

gulp.task('browser-sync', function() {
	browserSync.init(['../public'], {
    proxy: 'http://localhost/',
    browser: 'firefox',
    port: 3000,
    notify: false
  });
});

// Global task
gulp.task('default', ['html', 'css', 'js', 'browser-sync', 'watch']);
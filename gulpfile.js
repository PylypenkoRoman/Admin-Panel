var gulp = require('gulp'),
    concatCss = require('gulp-concat-css'),
    prefixer = require('gulp-autoprefixer'),
    minifyCss = require('gulp-minify-css'),
    notify = require("gulp-notify"),
    livereload = require('gulp-livereload'),
    connect = require('gulp-connect'),
    stylus = require('gulp-stylus');
 
gulp.task('connect', function() {
  connect.server({
    root: 'app',
    livereload: true
  });
});

//css
gulp.task('css', function () {
  	return gulp.src('stylus/*.styl')
    .pipe(stylus())
    .pipe(prefixer({browsers: ['last 15 versions'] }))
    .pipe(minifyCss())
    .pipe(gulp.dest('app/css'))
    .pipe(livereload())
    .pipe(connect.reload());
});

//html
gulp.task('html', function () {
	return gulp.src('app/*.html')
    .pipe(connect.reload());
});

//watch
gulp.task('watch', function () {
	gulp.watch('./stylus/import/*.styl', ['css'])
	gulp.watch('./app/*.html', ['html'])
});

//default
gulp.task('default', ['connect', 'html', 'css', 'watch']);

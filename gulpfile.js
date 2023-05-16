const gulp = require('gulp');
const sass = require('gulp-sass')(require('node-sass'));
const inject = require('gulp-inject');
const autoprefixer = require('gulp-autoprefixer');
const browserSync = require('browser-sync').create();

// Compile Sass and Autoprefix
gulp.task('sass', function () {
  return gulp
    .src('src/assets/scss/styles.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer())
    .pipe(gulp.dest('dist/css'))
    .pipe(browserSync.stream());
});

// Serve files and watch for changes
gulp.task('serve', function () {
  browserSync.init({
    server: './dist',
  });

  gulp.watch('src/assets/scss/**/*.scss', gulp.series('sass'));
  gulp.watch('src/pages/**/*.html', gulp.series('copy-html')).on('change', browserSync.reload);
});

// inject css to html
gulp.task('inject-css', function() {
  const target = gulp.src('dist/index.html');
  const sources = gulp.src('dist/css/styles.css', { read: false });

  return target.pipe(inject(sources, {relative:true})).pipe(gulp.dest('dist'));
});


// Copy HTML files
gulp.task('copy-html', function () {
  return gulp.src('src/pages/**/*.html').pipe(gulp.dest('dist'));
});

// Default task
gulp.task('default', gulp.parallel('copy-html', 'sass', 'serve', 'inject-css'));
const gulp = require('gulp');
const sass = require('gulp-sass')(require('node-sass'));
const autoprefixer = require('gulp-autoprefixer');
// const uglify = require('gulp-uglify');
const minify = require('gulp-minify');
const rename = require('gulp-rename');
const concat = require('gulp-concat');
const sourcemaps = require('gulp-sourcemaps');
const htmlmin = require('gulp-htmlmin');
const stripImportExport = require('gulp-strip-import-export');
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

  gulp.watch('src/assets/js/**/*.js', gulp.series('minify-js'));
  gulp.watch('src/assets/scss/**/*.scss', gulp.series('sass'));
  gulp.watch('src/pages/**/*.html', gulp.series('copy-html')).on('change', browserSync.reload);
});

// Minify custom js
gulp.task('minify-js', function() {
  return gulp
    .src('src/assets/js/**/*.js')
    .pipe(sourcemaps.init())
    .pipe(stripImportExport())
    .pipe(concat('main.js'))
    // .pipe(uglify())
    .pipe(minify({
        ext: {
            min: '.min.js'
        }
    }))
    // .pipe(jsImport({hideConsole: true}))
    .pipe(rename({ suffix: '.min' }))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('dist/js'));
});


// Copy HTML files
gulp.task('copy-html', function () {
  return gulp
    .src('src/pages/**/*.html')
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(gulp.dest('dist'));
});

// Default task
gulp.task('default', gulp.parallel('copy-html', 'sass', 'serve', 'minify-js'));
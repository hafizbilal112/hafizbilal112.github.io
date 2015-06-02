var gulp = require('gulp');
var gutil = require('gulp-util');
var bower = require('bower');
var concat = require('gulp-concat');
var sass = require('gulp-sass');
var minifyCss = require('gulp-minify-css');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');
var sh = require('shelljs');
var livereload = require('gulp-livereload');
var browserSync = require('browser-sync').create();
var reload = browserSync.reload;
var paths = {
    sass: ['./scss/*.scss'],
    html: ['./*.html','./**/*.html'],
    js: ['./js/*.js'],
    lib: [
        './bower_components/jquery/dist/jquery.js',
        './bower_components/bootstrap-sass/assets/javascripts/bootstrap.js',
        './bower_components/jquery.easing/js/jquery.easing.js',
        './bower_components/owl.carousel/dist/owl.carousel.js',
        './bower_components/angular/angular.js',
        './bower_components/angular-sanitize/angular-sanitize.js',
        './bower_components/angular-ui-router/release/angular-ui-router.js'
    ]
};

gulp.task('default', ['sass']);

gulp.task('serve', ['sass'], function () {
    browserSync.init({
        port: "8100",
        server: {
            baseDir: "./"
        }
    });
    gulp.watch(paths.sass, ['sass']);
    gulp.watch(paths.html).on('change', reload);
    gulp.watch(paths.js).on('change', reload);
});

gulp.task('copyfonts', function() {
    gulp.src('./bower_components/components-font-awesome/fonts/*')
        .pipe(gulp.dest('./fonts'));
});

gulp.task('lib', function() {
    return gulp.src(paths.lib)
        .pipe(concat('vendor.js'))
        .pipe(gulp.dest('./js'))
        .pipe(uglify())
        .pipe(rename('vendor.min.js'))
        .pipe(gulp.dest('js/'));
});

gulp.task('sass', function (done) {
    gulp.src('./scss/app.scss')
        .pipe(sass({errLogToConsole: true}))
        .pipe(gulp.dest('./css/'))
        .pipe(reload({stream: true}))
        .pipe(minifyCss({
            keepSpecialComments: 0
        }))
        .pipe(rename({extname: '.min.css'}))
        .pipe(gulp.dest('./css/'))
        .on('end', done);
});

gulp.task('watch', function () {
    gulp.watch(paths.sass, ['sass']);
});

gulp.task('install', ['git-check'], function () {
    return bower.commands.install()
        .on('log', function (data) {
            gutil.log('bower', gutil.colors.cyan(data.id), data.message);
        });
});

gulp.task('git-check', function (done) {
    if (!sh.which('git')) {
        console.log(
            '  ' + gutil.colors.red('Git is not installed.'),
            '\n  Git, the version control system, is required to download Ionic.',
            '\n  Download git here:', gutil.colors.cyan('http://git-scm.com/downloads') + '.',
            '\n  Once git is installed, run \'' + gutil.colors.cyan('gulp install') + '\' again.'
        );
        process.exit(1);
    }
    done();
});

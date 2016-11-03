const gulp = require('gulp');
const babel = require('gulp-babel');
const less = require('gulp-less');
const del = require('del');
const exec = require('child_process').exec;

const paths = {
    allJsFiles: '_js/**/*.js',
    jsDir: 'public/assets/js',
    allLessFiles: '_less/*.less',
    cssDir: 'public/assets/css',
};

gulp.task('clean-css', () => {
    return del(paths.cssDir);
});

gulp.task('clean-js', ['clean-css'], () => {
    return del(paths.jsDir);
});

gulp.task('build-less', ['clean-js'], () => {
    return gulp.src(paths.allLessFiles)
        .pipe(less())
        .pipe(gulp.dest(paths.cssDir));
});

gulp.task('build-js', ['build-less'], () => {
    return gulp.src(paths.allJsFiles)
        .pipe(babel())
        .pipe(gulp.dest(paths.jsDir));
});

gulp.task('build', ['build-js'], (callback) => {
    exec(`node ${paths.jsDir}`, (error, stdout) => {
        console.log(stdout);
        return callback(error);
    });
});

gulp.task('default', ['build'])

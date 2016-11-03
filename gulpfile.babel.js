/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-console */
/* eslint-disable indent */

import gulp from 'gulp';
import babel from 'gulp-babel';
import less from 'gulp-less';
import eslint from 'gulp-eslint';
import del from 'del';
// import { exec } from 'child_process';

const paths = {
    allJsFiles: '_js/**/*.js',
    jsDir: 'dist/assets/js',
    allLessFiles: '_less/*.less',
    cssDir: 'dist/assets/css',
    gulpFile: 'gulpfile.babel.js',
};

// gulp.task('clean-css', () => del(paths.cssDir));

gulp.task('clean', () => del([paths.jsDir, paths.cssDir]));

gulp.task('build-less', ['clean'], () =>
    gulp.src(paths.allLessFiles)
        .pipe(less())
        .pipe(gulp.dest(paths.cssDir))
);

gulp.task('build-js', ['build-less'], () =>
    gulp.src(paths.allJsFiles)
        .pipe(babel())
        .pipe(gulp.dest(paths.jsDir))
);

gulp.task('lint', () =>
    gulp.src([
        paths.allJsFiles,
        paths.gulpFile,
    ])
        .pipe(eslint())
        .pipe(eslint.format())
        .pipe(eslint.failAfterError())
);

gulp.task('build', ['build-js'], (callback) => {
    /*
    exec(`node ${paths.jsDir}`, (error, stdout) => {
        console.log(stdout);
        return callback(error);
    });
    */
    console.log('starting...');
    return callback();
});

gulp.task('default', ['build', 'lint']);

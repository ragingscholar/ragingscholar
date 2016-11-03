/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-console */
/* eslint-disable indent */

import gulp from 'gulp';
import babel from 'gulp-babel';
import less from 'gulp-less';
import eslint from 'gulp-eslint';
import del from 'del';
// import { exec } from 'child_process';
import webpack from 'webpack-stream';
import webpackConfig from './webpack.config.babel';

const paths = {
    allJsFiles: '_js/**/*.js?(x)',
    serverJsFiles: '_js/server/**/*.js?(x)',
    sharedJsFiles: '_js/shared/**/*.js?(x)',
    clientEntryPoint: '_js/client/app.jsx',
    jsDir: 'dist/assets/js',
    allLessFiles: '_less/*.less',
    cssDir: 'dist/assets/css',
    gulpFile: 'gulpfile.babel.js',
    webpackFile: 'webpack.config.babel.js',
};

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

gulp.task('build', ['build-js'], (callback) => {
    gulp.src(paths.clientEntryPoint)
        .pipe(webpack(webpackConfig))
        .pipe(gulp.dest(paths.jsDir));

    return callback();
});

gulp.task('lint', () =>
    gulp.src([
        paths.allJsFiles,
        paths.gulpFile,
        paths.webpackFile,
    ])
        .pipe(eslint())
        .pipe(eslint.format())
        .pipe(eslint.failAfterError())
);

gulp.task('default', ['lint', 'build']);

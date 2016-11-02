const gulp = require('gulp');
const babel = require('gulp-babel');
const less = require('gulp-less');
const del = require('del');
const exec = require('child_process').exec;

const paths = {
    allSrcJs: 'src/**/*.js',
    libDir: 'lib',
    allLessFiles: '_less/*.less',
    cssDir: 'public/assets/css',
};

gulp.task('clean', () => {
    return del(paths.libDir);
});

gulp.task('build', ['clean'], () => {
    return gulp.src(paths.allSrcJs)
        .pipe(babel())
        .pipe(gulp.dest(paths.libDir));
});

gulp.task('main', ['build'], (callback) => {
    exec(`node ${paths.libDir}`, (error, stdout) => {
        console.log(stdout);
        return callback(error);
    });
});

gulp.task('watch', () => {
    gulp.watch(paths.allSrcJs, ['main']);
});

gulp.task('default', ['watch', 'main']);


gulp.task('build-less', function(){
    return gulp.src(paths.allLessFiles)
        .pipe(less())
        .pipe(gulp.dest(paths.cssDir));
});

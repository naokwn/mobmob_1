var gulp = require('gulp');
var sass = require('gulp-sass');
var browsersync = require('browser-sync');

// sassのビルド
gulp.task('sass', function () {
    gulp.src('src/styles/main.scss')
    .pipe(sass())
    .pipe(gulp.dest('dist/css'))
    .pipe(browsersync.reload({stream: true}));
});

//ブラウザシンク
gulp.task('serve', function () {
    browsersync.init({
        server: {
            baseDir: "./dist/"
        }
    })
    gulp.watch("./src/styles/*", ['sass']);
    gulp.watch("./dist/*.html").on('change', browsersync.reload);
});

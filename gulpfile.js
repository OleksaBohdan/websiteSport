const gulp = require('gulp');
const browserSync = require('browser-sync').create();

gulp.task('browser-sync', function () {
  browserSync.init({
    server: {
      baseDir: 'src',
    },
  });
});

gulp.task('watch', function () {
  gulp.watch('src/*.html').on('change', browserSync.reload);
});

gulp.task('default', gulp.parallel('watch', 'browser-sync'));

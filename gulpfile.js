var gulp = require('gulp'),
    del = require('del');

gulp.task('clean', function(cb) {
  del(['build', 'dist'], cb);
});

//gulp.task('all', [ 'clean', 'hint', 'lint', 'test']);
gulp.task('all', [ 'clean']);

gulp.task('default', [ 'all' ]);

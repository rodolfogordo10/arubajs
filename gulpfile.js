var SRC_CODE = ['./src/**/*.js'];

var gulp = require('gulp'),
	del = require('del'),
	jshint = require('gulp-jshint'),
	jslint = require('gulp-jslint'),
	karma = require('karma').server,
	concat = require('gulp-concat'),
	uglify = require('gulp-uglify'),
	sourcemaps = require('gulp-sourcemaps');

// CLEANING UP OLD FILES
gulp.task('clean', function(cb) {
	del(['build', 'dist'], cb);
});


// JSHINT BEST PRACTICES VERIFICATION
gulp.task('hint', function() {
	return gulp.src(SRC_CODE)
	.pipe(jshint())
	.pipe(jshint.reporter('jshint-stylish'))
	.pipe(jshint.reporter('fail'));
});


// JSLINT PATTERN VERIFICATION
gulp.task('lint', function() {
	return gulp.src(SRC_CODE)
	.pipe(jslint({
		// these directives can
		// be found in the official
		// JSLint documentation.
		node: false,
		evil: true,
		nomen: true,
		// you can also set global
		// declarations for all source
		// files like so:
		global: [],
		predef: [],
		// both ways will achieve the
		// same result; predef will be
		// given priority because it is
		// promoted by JSLint
		// pass in your prefered
		// reporter like so:
		reporter: 'default',
		// ^ there's no need to tell gulp-jslint
		// to use the default reporter. If there is
		// no reporter specified, gulp-jslint will use
		// its own.
		// specify whether or not
		// to show 'PASS' messages
		// for built-in reporter
		errorsOnly: false
		}))
		// error handling:
		// to handle on error, simply
		// bind yourself to the error event
		// of the stream, and use the only
		// argument as the error object
		// (error instanceof Error)
		.on('error', function(error) {
			console.error(String(error));
			});
		});

		gulp.task('test', [ 'test:unit', 'hint', 'lint' ]);

		gulp.task('test:unit', function(cb) {
			karma.start({
	        configFile: __dirname + '/test/conf/karma.conf.js',
	        singleRun: true
	    }, cb);
		});

		gulp.task('build', ['build:bundle', 'build:min']);

		gulp.task('build:bundle',  function () {
			return gulp.src(SRC_CODE)
				.pipe(concat('aruba.js'))
				.pipe(gulp.dest('./dist/'));
		});

		gulp.task('build:min', function () {
			return gulp.src(SRC_CODE)
				.pipe(sourcemaps.init())
				.pipe(concat('aruba.min.js'))
				.pipe(uglify({
					compress: {
						negate_iife: false
						}
					}))
				.pipe(sourcemaps.write('./'))
				.pipe(gulp.dest('./dist/'));
		});

		// task chain definidtions
		gulp.task('all', ['clean', 'test', 'build']);
		gulp.task('default', ['all']);

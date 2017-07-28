var gulp = require('gulp');

gulp.task('default', function() {
    console.log("this is default");
});

gulp.task('hello', function() {
	gulp.src(['./*.js']).pipe(gulp.dest('destination'));
    	console.log("hello");
});



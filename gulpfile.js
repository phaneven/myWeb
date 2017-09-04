const build = require('./global.js').build;
const runSequence = require('run-sequence');
const gulp = require('gulp');
const ts = require('gulp-typescript');
const clean = require('gulp-clean')
let tsProject = ts.createProject('tsconfig.json');


build.serverDirectories.tasks.forEach((task) => {
	let file = task.file ? task.file : build.serverDirectories.file;
	let src = [];
	if (!(task.fileName instanceof Array)) task.fileName = [task.fileName];
	task.fileName.forEach((name) => {
		src.push("./" + task.dir + (task.subDir ? '/**/' : '/') + name + '.' + file);
	});
	gulp.task(task.taskName, () => {
		let runner = gulp.src(src);
		if (file === 'ts') //compile .ts file to .js file
			runner = runner.pipe(ts.createProject('tsconfig.json')());
		if (task.dest == undefined)
			return runner.pipe(gulp.dest(`./build/${task.dir}`));
		else 
			return runner.pipe(gulp.dest(`./build/${task.dest}`));
	})
});

gulp.task('build', (callback)=>{
	runSequence(
		build.serverDirectories.tasks.map((item)=>{return item.taskName}),
		callback
	);
})

gulp.task('clean', ()=> {
    return gulp.src('./build', {read: false})
        .pipe(clean());
})




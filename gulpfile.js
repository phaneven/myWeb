const build = require('./global.js').build;
const runSequence = require('run-sequence');
var gulp = require('gulp');

build.serverDirectories.tasks.forEach((task) => {
	console.log(task);
	let file = task.file ? task.file : build.serverDirectories.file;
	let src = [];
	if (!(task.fileName instanceof Array)) task.fileName = [task.fileName];
	task.fileName.forEach((name) => {
		console.log(name);
		src.push("./" + task.dir + (task.subDir ? '/**/' : '/') + name + '.' + file);
	});
	console.log(task.taskName);
	gulp.task(task.taskName, () => {
		let runner = gulp.src(src);
		console.log(src);
		if (task.dest == undefined)
			return runner.pipe(gulp.dest(`./build/${task.dir}`));
	})
});

gulp.task('build', (callback)=>{
	runSequence(
		build.serverDirectories.tasks.map((item)=>{return item.taskName}),
		callback
	);
})




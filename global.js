const path = require("path");
const gulp = require('gulp');
const clientPath = path.join(__dirname, 'build/client');
const serverPath = path.join(__dirname, 'build/server');

exports.variables = {
    rootPath: __dirname,
    clientPath: clientPath,
    serverPath: serverPath
}

exports.variables = {
    rootPath: __dirname,
    clientPath: clientPath,
    serverPath: serverPath
}

exports.build = {
    serverDirectories: {
        file: 'ts',
        tasks : [
        {
            taskName: 'app-start',
            dir: 'server',
            subDir: false,
            fileName: 'app',
        }, 
        {
            taskName: 'www',
            dir: 'server/bin',
            subDir: false,
            fileName: 'www'
        },
        {
            taskName: 'utils',
            dir: 'server/utils',
            subDir: false,
            fileName: '*'
        }
        ]
    },
    // clientDirectories: {
    //     tasks: [
    //         {
    //             taskName: 'template',
    //             dir: 'client/templates',
    //             subDir: false,
    //             pipe: (task) => {
    //                 return task.pipe(gulp.dest('./build/client/templates'))
    //             } 
    //         }
    //     ]
    // }
}
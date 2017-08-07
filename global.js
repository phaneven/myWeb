const path = require("path");
const clientPath = path.join(__dirname, 'build/public');
const serverPath = path.join(__dirname, 'build/server');


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
        }
        ]
    }
}
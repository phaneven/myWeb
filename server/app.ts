import * as path from 'path';
import * as express from "express";
import * as logger from "morgan";

const pathInfo = require('../../global').variables;


class App {
    public express: express.Application;
    constructor() {
        this.express = express();
        this.setViewEngine();
        this.middleware();
        this.routes();
    }

    private setViewEngine():void {
        // this.express.set('views', path.join(pathInfo.clientPath, 'templates'));
        // this.express.set('view engine', 'ejs')
        this.express.set('view engine', "ejs");
        // this.express.engine("html", require('ejs').renderFile);
    }

    private middleware():void {
        this.express.use(express.static(path.join(pathInfo.rootPath, "client/myapp/dist")));
        this.express.get('/', function(req, res) {
            res.sendFile(pathInfo.rootPath + "client/myapp/dist/" + "index.html")
        });
    }

    private routes():void {
        let router = express.Router();
        router.get('/', (req, res, next) => {
            // res.send(
            //     'Hello World!'
            // );
            res.render('index', { title: 'The index page!' });
        });
        this.express.use('/', router);
    }
}

export default new App().express;
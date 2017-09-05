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
        this.express.set('views', path.join(pathInfo.clientPath, 'templates'));
        this.express.set('view engine', 'ejs')
    }

    private middleware():void {
        // this.express.use(logger('dev'));
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
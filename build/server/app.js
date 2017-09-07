"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const path = require("path");
const express = require("express");
const pathInfo = require('../../global').variables;
class App {
    constructor() {
        this.express = express();
        this.setViewEngine();
        this.middleware();
        this.routes();
    }
    setViewEngine() {
        // this.express.set('views', path.join(pathInfo.clientPath, 'templates'));
        // this.express.set('view engine', 'ejs')
        this.express.set('view engine', "ejs");
        this.express.engine("html", require('ejs').renderFile);
    }
    middleware() {
        // this.express.use(logger('dev'));
        this.express.use(express.static(path.join(pathInfo.rootPath, "client/myapp/dist")));
        this.express.get('/', function (req, res) {
            res.sendFile(pathInfo.rootPath + "client/myapp/dist/" + "index.html");
        });
    }
    routes() {
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
exports.default = new App().express;

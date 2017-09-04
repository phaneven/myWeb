"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
class App {
    constructor() {
        this.express = express();
        this.middleware();
        this.routes();
    }
    middleware() {
        // this.express.use(logger('dev'));
    }
    routes() {
        let router = express.Router();
        router.get('/', (req, res, next) => {
            res.send('Hello World!');
        });
        this.express.use('/', router);
    }
}
exports.default = new App().express;

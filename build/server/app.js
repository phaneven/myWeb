"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const path = require("path");
const express = require("express");
const ejs = require("ejs");
const user_1 = require("./routes/middlewares/user");
const article_1 = require("./routes/middlewares/article");
const bodyParser = require('body-parser');
var history = require('connect-history-api-fallback'); // make browser could refresh
// database
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
var db = mongoose.connection;
db.on('error', console.error);
db.once('open', function () {
    console.log("db is open");
});
mongoose.connect('mongodb://localhost/mydb', { useMongoClient: true });
const pathInfo = require('../../global').variables;
class App {
    constructor() {
        this.express = express();
        this.express.use(bodyParser.json());
        this.express.use(bodyParser.urlencoded({ extended: false }));
        this.setViewEngine();
        this.middleware();
        this.routes();
    }
    setViewEngine() {
        this.express.set('views', path.join(pathInfo.rootPath, "client/myapp/dist"));
        this.express.set('view engine', 'ejs');
        this.express.engine('html', ejs.renderFile);
    }
    middleware() {
        this.express.use(history());
        // set static folder
        this.express.use(express.static(path.join(pathInfo.rootPath, "client/myapp/dist")));
        this.express.use(user_1.default[0].Path, user_1.default[0].Router); //registration
        this.express.use(user_1.default[1].Path, user_1.default[1].Router); //login
        this.express.use(article_1.default[0].Path, article_1.default[0].Router); //add article
        this.express.use(article_1.default[1].Path, article_1.default[1].Router);
    }
    routes() {
        let router = express.Router();
        router.post('/registration', (req, res, next) => {
            console.log(req.body);
            console.log('received');
        });
        this.express.use('/blog', router);
    }
}
exports.default = new App().express;

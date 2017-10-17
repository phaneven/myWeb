import * as path from 'path';
import * as express from "express";
import * as logger from "morgan";
import * as ejs from 'ejs';
import ServerRequestRouter from './routes/middlewares/user';
import ServerArticleRouter from './routes/middlewares/article'; 
const bodyParser = require('body-parser');
var history = require('connect-history-api-fallback'); // make browser could refresh

// database
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
var db = mongoose.connection;
db.on('error', console.error);
db.once('open', function(){
    console.log("db is open");
})
mongoose.connect('mongodb://localhost/mydb', { useMongoClient: true});

const pathInfo = require('../../global').variables;

class App {
    public express: express.Application;
    constructor() {
        this.express = express();
        this.express.use(bodyParser.json());
        this.express.use(bodyParser.urlencoded({ extended: false }));
        this.setViewEngine();
        this.middleware();
        this.routes();
    }

    private setViewEngine():void {
        this.express.set('views', path.join(pathInfo.rootPath, "client/myapp/dist"));
        this.express.set('view engine', 'ejs');
        this.express.engine('html', ejs.renderFile);
    }

    private middleware():void {
        this.express.use(history());
        // set static folder
        this.express.use(express.static(path.join(pathInfo.rootPath, "client/myapp/dist")));
        this.express.use(ServerRequestRouter[0].Path, ServerRequestRouter[0].Router); //registration
        this.express.use(ServerRequestRouter[1].Path, ServerRequestRouter[1].Router); //login

        this.express.use(ServerArticleRouter[0].Path, ServerArticleRouter[0].Router); //add article
        this.express.use(ServerArticleRouter[1].Path, ServerArticleRouter[1].Router); //post articles
        this.express.use(ServerArticleRouter[2].Path, ServerArticleRouter[2].Router); //find article
    }

    private routes():void {
        let router = express.Router();
        router.post('/registration', (req, res, next) => {
            console.log(req.body);
            console.log('received');
        });
        this.express.use('/blog', router);
    }
}

export default new App().express;
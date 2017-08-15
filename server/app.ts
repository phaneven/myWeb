import * as express from "express";
import * as logger from "morgan";

// let app = express();
// app.use();
// app.get('/', function(req, res, next) {
//   console.log('hi ');
//   next();
// })
// app.get('/', function(req, res, next){
//   res.send('hello world!');
// });
// export default app;

class App {
    public express: express.Application;
    constructor() {
        this.express = express();
        this.middleware();
        this.routes();
    }

    private middleware():void {
        this.express.use(logger('dev'));
    }

    private routes():void {
        let router = express.Router();
        router.get('/', (req, res, next) => {
            res.send(
                'Hello World!'
            );
        });
        this.express.use('/', router);
    }
}

export default new App().express;
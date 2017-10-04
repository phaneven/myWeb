import {Express, Router, Request, Response, NextFunction, RequestHandler, ErrorRequestHandler} from 'express';
import * as express from 'express';

export enum METHOD {
    GET = 'get',
    POST = 'post',
    PUT = 'put',
    DELETE = 'delete'
}

// export 
// type ResponseCallback = (body: any, statusCode?: number, responseMethod?: 'json'|'jsonp'|'send'|'redirect') => void;
// type RequestProcessor = (req: Request, res:Response, cb:ResponseCallback) => any;
// type PlainRequestProcessor = (req: Request, cb: ResponseCallback) => any;

// export class ServerRequest {
//     private _req : RequestProcessor | PlainRequestProcessor;
//     private _res : boolean;

//     constructor() {
//         this._req = null;
//         this._res = false;
//     }
    
//     public doRequest(rp : RequestProcessor) {
//         this._req = rp;
//         this._res = true;
//         return this;
//     }

//     public doPlainRequest(prp : PlainRequestProcessor) {
//         this._req = prp;
//         if(this._req) console.log('doplainRequest called')
//         return this;
//     }

//     public doResponse() : RequestHandler{
//         if(this._req) return (req, res, next) => {
//             console.log('a');
//         }    
//     }
// }

export class ServerMethod {
    private _middlewares : Array<RequestHandler>;
    // private _request : ServerRequest;
    
    constructor (
        private _method : METHOD,
        private _url : string,
        middlewares? : Array<RequestHandler> | RequestHandler,
        // end_method?: ServerRequest 
    ) {
        if (middlewares) {
            middlewares instanceof Array ? this._middlewares = middlewares : this._middlewares = [middlewares];
        } else {
            this._middlewares = [];
        }
        // this._request = end_method ? end_method : null;
    }

    public addMiddleWares(middlewares: RequestHandler | Array<RequestHandler>): ServerMethod {
        this._middlewares = this._middlewares.concat(middlewares);
        return this;
    }

    // public end(end_request: ServerRequest): ServerMethod {
    //     this._request = end_request;
    //     return this;
    // }
    public end(end_requesthandler: RequestHandler): ServerMethod {
        this._middlewares.push(end_requesthandler);
        return this;
    }
 
    public get MiddleWares(): Array<RequestHandler> {
        return this._middlewares;
    }

    public get MethodName(): METHOD {
        return this._method;
    }

    public get Url(): string {
        return this._url;
    }


    public get EndMethod(): RequestHandler {
        return this._middlewares[this._middlewares.length-1];
    }
    
}

interface IMethodAttributor {
    type: METHOD,
    url: string,
    middlewares: Array<RequestHandler>,
}

export class ServerRouter {
    private _router: Router;
    private _methods: Array<IMethodAttributor>;

    constructor(
        private _name : string
    ){
        this._router = express.Router();
        this._methods = [];
    }

    // public addMethods

    public addMethod(method: ServerMethod): ServerRouter {
        this._methods.push({
            type: method.MethodName,
            url: method.Url,
            middlewares: [...method.MiddleWares, method.EndMethod]
        })
        return this;
    }

    public get Path(): string {
        return this._name;
    }

    public get Router(): Router {
        for (let method of this._methods) {
            switch (method.type) {
                case METHOD.GET: this._router.get(method.url, method.middlewares); break;
                case METHOD.POST: this._router.post(method.url, method.middlewares); break;
                case METHOD.PUT: this._router.put(method.url, method.middlewares); break;
                case METHOD.DELETE: this._router.delete(method.url, method.middlewares); break;
            }
        }
        return this._router;
    }

}
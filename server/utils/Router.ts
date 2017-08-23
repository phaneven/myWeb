import {Express, Router, Request, Response, NextFunction, RequestHandler, ErrorRequestHandler} from 'express';
import * as express from 'express';

export enum METHOD {
    GET = 'get',
    POST = 'post',
    PUT = 'put',
    DELETE = 'delete'
}

export 
type ProcessorCallback = (body: any, statusCode?: number, responseMethod?: 'json'|'jsonp'|'send'|'redirect') => void;
type RequestProcessor = (req: Request, res:Response, cb:ProcessorCallback) => any;
type PlainRequestProcessor = (req: Request, cb: ProcessorCallback) => any;

export class ServerRequest {
    private _req : RequestProcessor | PlainRequestProcessor;
    private _res : boolean;

    constructor() {
        this._req = null;
        this._res = false;
    }
    
    public doRequest(rp : RequestProcessor) {
        this._req = rp;
        this._res = true;
        return this;
    }

    public doPlainRequest(prp : PlainRequestProcessor) {
        this._req = prp;
        return this;
    }

    public doResponse() : RequestHandler{
        if (this._req) {
            return (req : Request, res : Response, next : NextFunction) => {
                if (this._res) {// request
                    this._req = this._req as RequestProcessor;
                    this._req(req, res, (body : any, statusCode : number = 200, responseMethod : 'json'|'jsonp'|'send'|'redirect') => {
                        res.status(statusCode);
                        switch(responseMethod) {
                            case 'json' : res.json(body);
                            break;
                            case 'jsonp' : res.jsonp(body);
                            break;
                            case 'redirect' : res.redirect(body);
                            break;
                            case 'send': default : res.send(body);
                            break;
                        };
                    });
                } else { // plain request
                    this._req = this._req as PlainRequestProcessor;
                    this._req(req, (body : any, statusCode : number = 200, responseMethod : 'json'|'jsonp'|'send'|'redirect') => {
                        res.status(statusCode);
                        switch(responseMethod) { // used for debug e.g. inform front end received
                            case 'json' : res.json(body);
                            break;
                            case 'jsonp' : res.jsonp(body);
                            break;
                            case 'redirect' : res.redirect(body);
                            break;
                            case 'send': default : res.send(body);
                            break;
                        };
                    });
                }
            }
        }  
        else {
            return (req : Request, res : Response) => {
                res.status(501).send({
                    err : 'There is no request handler for the request!'
                });
            };
        } 
    }  
}

export class ServerMethod {
    private _middlewares : Array<RequestHandler>;
    private _request : ServerRequest;
    
    constructor (
        private _method : METHOD,
        private _url : string,
        middlewares? : Array<RequestHandler> | RequestHandler 
    ) {
        if (middlewares) {
            middlewares instanceof Array ? this._middlewares = middlewares : this._middlewares = [middlewares];
        } else {
            this._middlewares = [];
        }
    }

    public addMiddleWares(middlewares: RequestHandler | Array<RequestHandler>): ServerMethod {
        this._middlewares = this._middlewares.concat(middlewares);
        return this;
    }

    public get MiddleWares(): Array<RequestHandler> {
        return this._middlewares;
    }

    public get MethdoName(): METHOD {
        return this._method;
    }

    public get Url(): string {
        return this._url;
    }
}

interface IMethodAttributor {
    type: METHOD,
    url: string,
    middlewares: Array<RequestHandler>,
    originalRequest: ServerRequest;
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
}
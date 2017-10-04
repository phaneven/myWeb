"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
var METHOD;
(function (METHOD) {
    METHOD["GET"] = "get";
    METHOD["POST"] = "post";
    METHOD["PUT"] = "put";
    METHOD["DELETE"] = "delete";
})(METHOD = exports.METHOD || (exports.METHOD = {}));
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
class ServerMethod {
    // private _request : ServerRequest;
    constructor(_method, _url, middlewares) {
        this._method = _method;
        this._url = _url;
        if (middlewares) {
            middlewares instanceof Array ? this._middlewares = middlewares : this._middlewares = [middlewares];
        }
        else {
            this._middlewares = [];
        }
        // this._request = end_method ? end_method : null;
    }
    addMiddleWares(middlewares) {
        this._middlewares = this._middlewares.concat(middlewares);
        return this;
    }
    // public end(end_request: ServerRequest): ServerMethod {
    //     this._request = end_request;
    //     return this;
    // }
    end(end_requesthandler) {
        this._middlewares.push(end_requesthandler);
        return this;
    }
    get MiddleWares() {
        return this._middlewares;
    }
    get MethodName() {
        return this._method;
    }
    get Url() {
        return this._url;
    }
    get EndMethod() {
        return this._middlewares[this._middlewares.length - 1];
    }
}
exports.ServerMethod = ServerMethod;
class ServerRouter {
    constructor(_name) {
        this._name = _name;
        this._router = express.Router();
        this._methods = [];
    }
    // public addMethods
    addMethod(method) {
        this._methods.push({
            type: method.MethodName,
            url: method.Url,
            middlewares: [...method.MiddleWares, method.EndMethod]
        });
        return this;
    }
    get Path() {
        return this._name;
    }
    get Router() {
        for (let method of this._methods) {
            switch (method.type) {
                case METHOD.GET:
                    this._router.get(method.url, method.middlewares);
                    break;
                case METHOD.POST:
                    this._router.post(method.url, method.middlewares);
                    break;
                case METHOD.PUT:
                    this._router.put(method.url, method.middlewares);
                    break;
                case METHOD.DELETE:
                    this._router.delete(method.url, method.middlewares);
                    break;
            }
        }
        return this._router;
    }
}
exports.ServerRouter = ServerRouter;

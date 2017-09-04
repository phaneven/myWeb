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
class ServerRequest {
    constructor() {
        this._req = null;
        this._res = false;
    }
    doRequest(rp) {
        this._req = rp;
        this._res = true;
        return this;
    }
    doPlainRequest(prp) {
        this._req = prp;
        return this;
    }
    doResponse() {
        if (this._req) {
            return (req, res, next) => {
                if (this._res) {
                    this._req = this._req;
                    this._req(req, res, (body, statusCode = 200, responseMethod) => {
                        res.status(statusCode);
                        switch (responseMethod) {
                            case 'json':
                                res.json(body);
                                break;
                            case 'jsonp':
                                res.jsonp(body);
                                break;
                            case 'redirect':
                                res.redirect(body);
                                break;
                            case 'send':
                            default:
                                res.send(body);
                                break;
                        }
                        ;
                    });
                }
                else {
                    this._req = this._req;
                    this._req(req, (body, statusCode = 200, responseMethod) => {
                        res.status(statusCode);
                        switch (responseMethod) {
                            case 'json':
                                res.json(body);
                                break;
                            case 'jsonp':
                                res.jsonp(body);
                                break;
                            case 'redirect':
                                res.redirect(body);
                                break;
                            case 'send':
                            default:
                                res.send(body);
                                break;
                        }
                        ;
                    });
                }
            };
        }
        else {
            return (req, res) => {
                res.status(501).send({
                    err: 'There is no request handler for the request!'
                });
            };
        }
    }
}
exports.ServerRequest = ServerRequest;
class ServerMethod {
    constructor(_method, _url, middlewares) {
        this._method = _method;
        this._url = _url;
        if (middlewares) {
            middlewares instanceof Array ? this._middlewares = middlewares : this._middlewares = [middlewares];
        }
        else {
            this._middlewares = [];
        }
    }
    addMiddleWares(middlewares) {
        this._middlewares = this._middlewares.concat(middlewares);
        return this;
    }
    get MiddleWares() {
        return this._middlewares;
    }
    get MethdoName() {
        return this._method;
    }
    get Url() {
        return this._url;
    }
}
exports.ServerMethod = ServerMethod;
class ServerRouter {
    constructor(_name) {
        this._name = _name;
        this._router = express.Router();
        this._methods = [];
    }
}
exports.ServerRouter = ServerRouter;

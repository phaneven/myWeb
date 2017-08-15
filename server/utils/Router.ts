enum METHOD {
    GET = 'get',
    POST = 'post',
    PUT = 'put',
    DELETE = 'delete'
}

class ServerMethod {
    private middlewares; // array
    private end_callback; // 
    private method;
    private url;
    constructor (method, url, middlewares?, end_method?) {
        this.method = method;
        this.url = url;
        if (middlewares) {
            middlewares instanceof Array? this.middlewares = middlewares : this.middlewares = [middlewares];
        } else {
            this.middlewares = [];
        }
    }

    public addMiddleWare(middleware) {
        this.middlewares.push(middleware);
        return this;
    }

    public addMiddleWares(middlewares) {
        this.middlewares = this.middlewares.concat(middlewares);
        return this;
    }

    public end(end_callback) {
        this.end_callback = end_callback;
    }
    public get MiddleWares() {
        return this.middlewares;
    }

    public get Url() {
        return this.url;
    }

    public get MethodName() {
        return this.method;
    }
}
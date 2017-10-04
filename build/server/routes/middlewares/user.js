"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const Database_1 = require("../../utils/Database");
const Router_1 = require("../../utils/Router");
let login = (req, res) => __awaiter(this, void 0, void 0, function* () {
    let username = req.body.username;
    let password = req.body.password;
    let connector = yield Database_1.User.findOne({
        username: username,
        password: password
    });
    let user = connector.value();
    let err = connector.error();
    if (user) {
        res.send({ Message: 'login' });
    }
    else {
        res.send({ Message: 'user cannot find' });
    }
});
let registration = (req, res) => __awaiter(this, void 0, void 0, function* () {
    let username = req.body.username;
    let password = req.body.password;
    let connector = yield Database_1.User.findOne({
        username: username
    });
    let user = connector.value();
    let err = connector.error();
    if (user) {
        // send({err: 'The username has been registered'}, 501);
        console.log('The username has been registered');
    }
    else {
        Database_1.User.create({
            username: username,
            password: password,
            admin: true
        }).save((err) => {
            if (err) {
                res.status(400)
                    .send({ err: err });
            }
            else {
                res.status(200)
                    .send({ message: 'OK' });
            }
        });
    }
});
exports.default = [
    new Router_1.ServerRouter('/blog').addMethod(new Router_1.ServerMethod(Router_1.METHOD.POST, '/registration').end(registration)),
    new Router_1.ServerRouter('/blog').addMethod(new Router_1.ServerMethod(Router_1.METHOD.POST, '/login').end(login))
];

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
let checkArticle = (req, res) => __awaiter(this, void 0, void 0, function* () {
    let content = req.body.content;
    let connector = yield Database_1.Article.findOne({
        content: content
    });
    let article = connector.value();
    let err = connector.error();
    if (article) {
        res.send({ Message: 'login', status: 'verified' });
    }
    else {
        res.send({ Message: 'user cannot find' });
    }
});
let addArticle = (req, res) => __awaiter(this, void 0, void 0, function* () {
    let title = req.body.title;
    let overview = req.body.overview;
    let content = req.body.content;
    let date = req.body.date;
    let anchor = req.body.title.replace(/ /g, '-').toLowerCase();
    let connector = yield Database_1.Article.findOne({
        title: title
    });
    let article = connector.value();
    let err = connector.error();
    // if (article) {
    //     // send({err: 'The username has been registered'}, 501);
    //     console.log('The username has been registered');
    // } else {
    //     Article.create(
    //         {
    //             title: title,
    //             content: content,
    //             date: date
    //         }
    //     ).save((err)=> {
    //         if (err) {
    //             res.status(400)
    //                .send({err: err});
    //         }else {
    //             console.log("new article: " + date);
    //             res.status(200)
    //                .send({message: 'OK'});
    //         }
    //     })
    // }  
    Database_1.Article.create({
        title: title,
        overview: overview,
        content: content,
        date: date,
        anchor: anchor
    }).save((err) => {
        if (err) {
            res.status(400)
                .send({ err: err });
        }
        else {
            console.log("new article: " + date);
            res.status(200)
                .send({ message: 'OK' });
        }
    });
});
let postArticle = (req, res) => __awaiter(this, void 0, void 0, function* () {
    let connector = yield Database_1.Article.find({}, '-date');
    let articles = connector.value();
    let err = connector.error();
    if (articles) {
        res.status(200).send({ articles: articles });
    }
    else {
        res.status(404).send({ err: err });
    }
});
let findArticle = (req, res) => __awaiter(this, void 0, void 0, function* () {
    // let date = new Date(req.body.date);
    let anchor = req.body.anchor.toLowerCase();
    console.log(anchor);
    let connector = yield Database_1.Article.findOne({ anchor: anchor });
    let article = connector.value();
    let err = connector.error();
    if (article) {
        res.status(200).send({ article: article });
    }
    else {
        res.status(404).send({ err: err });
    }
});
exports.default = [
    new Router_1.ServerRouter('/blog').addMethod(new Router_1.ServerMethod(Router_1.METHOD.POST, '/addArticle').end(addArticle)),
    new Router_1.ServerRouter('/blog').addMethod(new Router_1.ServerMethod(Router_1.METHOD.GET, '/postArticle').end(postArticle)),
    new Router_1.ServerRouter('/blog').addMethod(new Router_1.ServerMethod(Router_1.METHOD.POST, '/findArticle').end(findArticle)),
];

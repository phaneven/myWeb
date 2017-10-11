import { Response, Request, NextFunction } from 'express';
import { Article, IArticle, DatabaseHandler} from '../../utils/Database';
import { ServerMethod, ServerRouter, METHOD } from '../../utils/Router';

let checkArticle = async (req, res) => {
    let content = req.body.content;

    let connector: DatabaseHandler<IArticle> = await Article.findOne({
        content: content
    });

    let article = connector.value();
    let err = connector.error();

    if (article) {
        res.send({Message: 'login', status: 'verified'});
    } else {
        res.send({Message: 'user cannot find'});
    }
}


let addArticle = async (req, res) => {
    let content = req.body.content
    
    let connector: DatabaseHandler<IArticle>= await Article.findOne({
        content: content
    });

    let article = connector.value();
    let err = connector.error();
    
    if (article) {
        // send({err: 'The username has been registered'}, 501);
        console.log('The username has been registered');
    } else {
        Article.create(
            {
                content: content
            }
        ).save((err)=> {
            if (err) {
                res.status(400)
                   .send({err: err});
            }else {
                res.status(200)
                   .send({message: 'OK'});
            }
        })
    }  
};

let postArticle = async (req, res) => {
    let connector: DatabaseHandler<Array<IArticle>>= await Article.find({});
    let articles = connector.value();
    let err = connector.error();

    if (articles) {
        res.status(200).send({articles: articles})
    } else {
        res.status(404).send({err: err})
    }
}

export default [
    new ServerRouter('/blog').addMethod(new ServerMethod(METHOD.POST, '/addArticle').end(addArticle)),
    new ServerRouter('/blog').addMethod(new ServerMethod(METHOD.GET, '/postArticle').end(postArticle)),
]


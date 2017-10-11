import { Schema, Types, Model, Document } from 'mongoose';

import { IUserModel, IUser, UserModel } from '../core/dbs/user';
import { IArticleModel, IArticle, ArticleModel } from '../core/dbs/article';

interface DatabaseError {

}

interface DatabaseHandler<T> {
    value(): T;
    error(): DatabaseError;
}

class DatabaseModel<T extends Document, U> {
    constructor(private _model:Model<T>) {}

    private createDatabaseHandler<T>(err: DatabaseError, res: T=null,): DatabaseHandler<T> {
        let handler: DatabaseHandler<T> = {
            value(): T {return res; },
            error(): DatabaseError {return err}
        };
        return handler;
    }

    findOne(query: Object, select?: String) {
        return new Promise<DatabaseHandler<T>>((resolve, reject) => {
            this._model.findOne(query, select, (err, res) => {
                resolve(this.createDatabaseHandler<T>(err, res));
            })
        });
    }

    find(query: Object, select?: String) {
        return new Promise<DatabaseHandler<Array<T>>>((resolve, reject) => {
            this._model.find(query, select, (err, res) => {
                resolve(this.createDatabaseHandler<Array<T>>(err, res));
            })
        });
    }
    
    create(document: U): T{
        return new this._model(document);
    }
}

export const User = new DatabaseModel<IUser, IUserModel>(UserModel);
export const Article = new DatabaseModel<IArticle, IArticleModel>(ArticleModel);
export {
    Types,
    Schema, 
    IUser,
    IArticle, 
    DatabaseHandler
};
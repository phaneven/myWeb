"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
exports.Schema = mongoose_1.Schema;
exports.Types = mongoose_1.Types;
const user_1 = require("../core/dbs/user");
class DatabaseModel {
    constructor(_model) {
        this._model = _model;
    }
    createDatabaseHandler(err, res = null) {
        let handler = {
            value() { return res; },
            error() { return err; }
        };
        return handler;
    }
    findOne(query, select) {
        return new Promise((resolve, reject) => {
            this._model.findOne(query, select, (err, res) => {
                resolve(this.createDatabaseHandler(err, res));
            });
        });
    }
    create(document) {
        return new this._model(document);
    }
}
exports.User = new DatabaseModel(user_1.UserModel);

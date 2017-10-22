"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
let ArticleSchema = new mongoose_1.Schema({
    title: String,
    overview: String,
    content: String,
    date: Date,
    anchor: String
});
const ArticleModel = mongoose_1.model('Article', ArticleSchema);
exports.ArticleModel = ArticleModel;

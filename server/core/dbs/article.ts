import { Document, model, Model, Schema } from 'mongoose';

let ArticleSchema: Schema = new Schema({
    title: String,
    overview: String,
    content: String,
    date: Date,
})

export interface IArticleModel {
    title: {type: String, required: true},
    overview: String,
    content: {type: String},
    date: Date,
}

export interface IArticle extends Document, IArticleModel {}


const ArticleModel: Model<IArticle> = model<IArticle>('Article', ArticleSchema);
export { ArticleModel };
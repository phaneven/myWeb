import { Document, model, Model, Schema } from 'mongoose';

let ArticleSchema: Schema = new Schema({
    content: {type: String},
})

export interface IArticleModel {
    content: {type: String, required: true},
}

export interface IArticle extends Document, IArticleModel {}


const ArticleModel: Model<IArticle> = model<IArticle>('Article', ArticleSchema);
export { ArticleModel };
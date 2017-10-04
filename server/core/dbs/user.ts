import { Document, model, Model, Schema } from 'mongoose';

let UserSchema: Schema = new Schema({
    username: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    admin: {type: Boolean},
})

export interface IUserModel {
    username: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    admin: Boolean,
}

export interface IUser extends Document, IUserModel {}


const UserModel: Model<IUser> = model<IUser>('User', UserSchema);
export { UserModel };
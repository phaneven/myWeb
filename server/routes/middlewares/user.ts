import { Response, Request, NextFunction } from 'express';
import { User, IUser, DatabaseHandler} from '../../utils/Database';
import { ServerMethod, ServerRouter, METHOD } from '../../utils/Router';

let login = async (req, res) => {
    let username = req.body.username;
    let password = req.body.password;

    let connector: DatabaseHandler<IUser> = await User.findOne({
        username: username,
        password: password
    });

    let user = connector.value();
    let err = connector.error();

    if (user) {
        res.send({Message: 'login', status: 'verified'});
    } else {
        res.send({Message: 'user cannot find'});
    }
}


let registration = async (req, res) => {
    let username = req.body.username;
    let password = req.body.password;
    
    let connector: DatabaseHandler<IUser>= await User.findOne({
        username: username
    });

    let user = connector.value();
    let err = connector.error();
    
    if (user) {
        // send({err: 'The username has been registered'}, 501);
        console.log('The username has been registered');
    } else {
        User.create(
            {
                username: username,
                password: password,
                admin: true
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

export default [
    new ServerRouter('/blog').addMethod(new ServerMethod(METHOD.POST, '/registration').end(registration)),
    new ServerRouter('/blog').addMethod(new ServerMethod(METHOD.POST, '/login').end(login))
]


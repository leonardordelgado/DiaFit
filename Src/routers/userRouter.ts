import * as express from 'express';

class userRouter{
    public _router: express.Router
    constructor(){
        this._router = express.Router()
    }
    userRouters(){
        console.log('teste')
    }

}
export default new userRouter
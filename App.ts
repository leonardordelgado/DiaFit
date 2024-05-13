import * as express from 'express';
import DbUser from './Src/databases/DbUser';


class AppStart{
    public app: express.Application;
    public _db: DbUser;
    ClI: any;
    constructor(){
        this.app = express();
        this._db = new DbUser();
        this._db.getSequelize();
    }


}
export default new AppStart;
import * as express from 'express';
import DbUser from './Src/databases/DbUser';
import sinconizadorDb from './Src/databases/models/index'
import routers from './Src/routers';

class AppStart{
    public app: express.Application;
    public _db: DbUser;
    public sinc: any
    private router: any
    constructor(){
        this.app = express();
        this._db = new DbUser();
        this._db.getSequelize();
        this.sinc = sinconizadorDb;
        this.router = routers.router(this.app);
    }

    
}
export default new AppStart;

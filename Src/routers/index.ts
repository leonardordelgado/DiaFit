import * as bodyParser from 'body-parser';
import userRouter from './userRouter';
class routers {
    router(App){
        App.use(bodyParser.json());
        App.use(bodyParser.urlencoded({extended:false}))
        userRouter.userRouters()
    }
}
export default new routers
import {Sequelize} from 'sequelize';
import  configDB from './config/ConfigDb'
class DbUser {
    static instance: DbUser;
    sequelize: Sequelize;

    constructor(){
        if(!DbUser.instance){
            this.sequelize = new Sequelize(configDB);
            DbUser.instance = this;
        }
        return DbUser.instance;
    }

    getSequelize(){
        return this.sequelize;
    }

    async TestDb(): Promise<void> {
        try{
            await this.sequelize.authenticate();
            console.log('Connection has been established successfully.');
        }catch (error){
            console.error('Unable to connect to the database:', error);
        };
    }
}

export default  DbUser;
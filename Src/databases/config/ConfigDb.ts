import 'dotenv/config';
import {Options} from 'sequelize'
const { DATABASE, DATABASE_USER, DATABASE_PASSWORD} = process.env;

const configDB: Options = {
    database: DATABASE,
    username: DATABASE_USER,
    password: DATABASE_PASSWORD,
    host: 'localhost',
    dialect: 'mysql', 
    port: 3001
};
export default configDB

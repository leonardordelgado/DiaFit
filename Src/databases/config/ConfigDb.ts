import 'dotenv/config';
import {Options} from 'sequelize'
const { DATABASE, DATABASE_USER, DATABASE_PASSWORD} = process.env;

const configDB: Options = {
    database: DATABASE,
    username: DATABASE_USER,
    password: DATABASE_PASSWORD,
    host: '26.170.75.15',
    dialect: 'mysql', 
    port: 3001
};
export default configDB

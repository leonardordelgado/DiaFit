import { Sequelize } from "sequelize";
import configDB from '../config/ConfigDb'

export default new Sequelize(configDB)
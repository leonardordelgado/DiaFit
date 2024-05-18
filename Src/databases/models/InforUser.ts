import {Sequelize, DataTypes } from 'sequelize';
import DbUser from '../DbUser';
import User from './users';

const _db = new DbUser().getSequelize();

const InfoUser = _db.define('inforUser', {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER // Deve ser INTEGER para autoIncrement
    },
    Apelido: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    Genero: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    Altura: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    Peso: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    Idade: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    userId: {
        type: DataTypes.INTEGER,
        allowNull: false,}
},{
    timestamps:false
});

export default InfoUser;

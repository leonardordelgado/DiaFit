import * as sequelize from 'sequelize';
import db from './index'
class user extends sequelize.Model {
    declare id: number
    declare Nome: string
    declare SobreNome: string
    declare Senha: string
    declare Email: string
    declare InfoUserId: number
}

user.init({
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: sequelize.STRING
      },
      Nome: {
        type: sequelize.STRING,
        allowNull: false,
      },
     SobreNome:{
        type: sequelize.STRING,
        allowNull: false,
      },
      Senha:{
        type: sequelize.STRING,
        allowNull: false,
      },
      Email:{
        type: sequelize.STRING,
        allowNull: false,
      },
      InfoUserId: {
        type: sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'InfoUser',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      }
}, {
    sequelize: db,
    tableName: 'user',
    timestamps: false
}
)
InforUser.hasMany
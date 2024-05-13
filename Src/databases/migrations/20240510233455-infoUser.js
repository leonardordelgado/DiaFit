'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('InfoUser',{
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      Apelido: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      Genero:{
        type: Sequelize.STRING,
        allowNull: false,
      },
      Altura:{
        type: Sequelize.STRING,
        allowNull: false,
      },
      Peso:{
        type: Sequelize.STRING,
        allowNull: false,
      },
      Idade:{
        type: Sequelize.STRING,
        allowNull: false,
      }
    })
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};

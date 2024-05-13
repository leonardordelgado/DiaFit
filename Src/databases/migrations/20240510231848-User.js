'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('Users',{
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      Nome: {
        type: Sequelize.STRING,
        allowNull: false,
      },
     SobreNome:{
        type: Sequelize.STRING,
        allowNull: false,
      },
      Senha:{
        type: Sequelize.STRING,
        allowNull: false,
      },
      Email:{
        type: Sequelize.STRING,
        allowNull: false,
      },
      InfoUserId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'InfoUser',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
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

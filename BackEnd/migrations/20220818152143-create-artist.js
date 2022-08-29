'use strict';

const { DataTypes } = require("sequelize");

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Artists', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      firstName: {
        type: DataTypes.STRING,
        min:3,
        max:30,
        allowNull:false
      },
      lastName: {
        type: DataTypes.STRING,
        min:3,
        max:30,
        allowNull:false
      },
      links: {
        type: DataTypes.ARRAY(DataTypes.STRING)
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Artists');
  }
};
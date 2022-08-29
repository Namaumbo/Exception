const connection = require("../dbConnection");
const DataTypes = require("sequelize");

const User = connection.define(
  "User",
  {
    // Model attributes are defined here

    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV1,
      primaryKey: true,
    },

    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING,
      // allowNull defaults to true
    },
    phoneNumber: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    genre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = User;

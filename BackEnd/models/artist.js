
const Connection = require("../dbconnection");
const { DataTypes } = require("sequelize");

const Artist = Connection.define(
  "Artist",
  {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    firstName: {
      type: DataTypes.STRING,
    },
    lastName: {
      type: DataTypes.STRING,
    },
    links: {
      type: DataTypes.ARRAY(DataTypes.STRING),
    },
  },

  {
    timestamps: true,
  }
);


module.exports = Artist;

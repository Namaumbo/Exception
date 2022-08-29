const connection = require("../dbconnection");
const { DataTypes } = require("sequelize");
const Artist = require("./artist.js");
const Track = connection.define(
  "Track",
  {
    // Model attributes are defined here
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    genre: {
      type: DataTypes.STRING,
    },
    artwork: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    url: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    album: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    releaseDate: {
      type: DataTypes.DATEONLY,
      allowNull: true,
    },
  },
  {
    timestamps: true,
  }
);

Artist.hasMany(Track, {
  as: "tracks",
  foreignKey: "artist_id",
});
Track.belongsTo(Artist, { foreignKey: "artist_id" });

module.exports = Track;

const { Sequelize } = require("sequelize");

const connection = new Sequelize(
  process.env.DB_NAME,
  "postgres",
  process.env.DB_PASSWORD,
  {
    host: "localhost",
    dialect: "postgres",
    pool: {
      idle: 10000,
      max: 5,
      min: 1,
      acquire: 30000,
    },
  }
);

connection.sync({ force: true });
module.exports = connection;

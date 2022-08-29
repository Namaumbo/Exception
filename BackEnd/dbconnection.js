

require("dotenv").config();
const Sequelize = require('sequelize');

const connection = new Sequelize(
  process.env.DB_NAME,
  "postgres",
  "spikker6!",
  {
    host: "localhost",
    dialect: "postgres",
 
    pool: {
      idle: 10000,
      max: 15,
      min: 1,
      acquire: 30000,
    },
  }
);

// connection.sync({force:true})
module.exports = connection;

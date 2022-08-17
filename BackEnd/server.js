require("dotenv").config();

const express = require("express");
const app = express();
// const bodyParser = require("body-parser");
const cors = require("cors");
const logger = require("morgan");
// const { sequelize } = require("./models");
const helmet = require("helmet");

app.use(logger("common"));
app.use(express.json());

app.use(helmet());

app.use(cors());


// Admin routes   
app.use('/admin',require('./Admin/Routes.js'))


const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log("listening on port " + PORT)
});
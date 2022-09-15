require("dotenv").config();

const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const logger = require("morgan");
const { sequelize } = require("./models");
const helmet = require("helmet");
const connection = require("./dbconnection");

app.use(logger("combined"));
app.use(express.json());

app.use(helmet());

app.use(cors());

// Admin routes
app.use("/api/admin", require("./Admin/Routes.js"));
// track routes
app.use("/api/songs", require("./Track/trackRoutes"));

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log("app is listening on", PORT);
});

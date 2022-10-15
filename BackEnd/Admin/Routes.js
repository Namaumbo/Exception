const express = require("express");

const AdminController = require ("../Admin/AdminController")

const router = express.Router();


router.post("/add-track", AdminController.uploadFile);



module.exports = router;

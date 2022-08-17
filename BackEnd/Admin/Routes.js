const express = require("express");

const AdminController = require ("../Admin/AdminController")

const router = express.Router();
// router.get("/", student.getAllStudents);

router.get("/add-track", AdminController.uploadFile);

module.exports = router;

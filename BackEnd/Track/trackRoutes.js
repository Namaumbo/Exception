const express = require("express");
const router = express.Router();
const songsController = require("./TrackController");

router.get("/get-tracks", songsController.listFiles);
module.exports = router;

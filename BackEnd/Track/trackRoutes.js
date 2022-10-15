const express = require("express");
const router = express.Router();
const songsController = require("./TrackController");

router.get("/get-tracks", songsController.listFiles);
router.get('/get-track/:title',songsController.findTrack)
module.exports = router;

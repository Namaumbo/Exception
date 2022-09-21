const Track = require("../models/track");

exports.listFiles = async (req, res) => {
  const {offsetValue} = req.params
  const allSongs = Track.findAndCountAll({
    limit: 4,
    offset: offsetValue,
    attributes: ["title", "releaseDate", "url"],
  });
  if ((await allSongs).length == 0) {
    res.status(401).json([]);
    return;
  }

  allSongs
    .then((response) => {
      if (response) {
        res.status(200).json({
          message: "the list of songs",
          details: response,
        });
      } else {
        res.status(400).json([]);
      }
    })
    .catch((err) => {
      res.status(500).json({
        message: err.message,
      });
    });
};

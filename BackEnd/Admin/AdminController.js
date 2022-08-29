const Track = require("../models/track");

exports.uploadFile = async (req, res) => {
  // reading from request
  const { genre, url, album, releaseDate, title } = req.body;

  const trackAvailable = await Track.findOne({
    where: {
      title,
      url,
    },
  });
  if (trackAvailable) {
    res.status(409).json({
      message: "song available",
      song: trackAvailable,
    });
  } else {
    await Track.create(req.body);
    res.status(201).json({
      success: 1,
      message: "Track saved succesfully",
    });
  }
};

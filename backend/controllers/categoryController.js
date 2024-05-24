const MusicModel = require('../models/musicModel');

const getSongs = async (req, res) => {
  try {
    const songs = await MusicModel.getSongs(req.params.id);
    if (!songs.length) {
      return res.status(404).send("No songs found with the given ID");
    }
    res.json(songs);
  } catch (error) {
    console.error("Error in getSongs controller:", error);
    res.status(500).send("Internal Server Error");
  }
};

module.exports = {
  getSongs
};

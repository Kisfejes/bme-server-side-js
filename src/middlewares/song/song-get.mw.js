const { SongService } = require('../../services');

// Get song based on song-id
const songGet = async (req, res, next) => {
  const { songid } = req.params;

  const song = await SongService.getSong(songid);
  res.locals.song = song;
  next();
};

module.exports = songGet;

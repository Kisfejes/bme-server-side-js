const { SongService } = require('../../services');

// Get song based on song-id
const songGet = (req, res, next) => {
  const songid = parseInt(req.params.songid, 10);

  const currentSong = SongService.getSong(songid);
  res.locals.song = currentSong;
  next();
};

module.exports = songGet;

const { SongService } = require('../../services');

// List songs
const songList = (req, res, next) => {
  const songs = SongService.getSongs();

  res.locals.songs = songs;
  next();
};

module.exports = songList;

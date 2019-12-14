const { SongService } = require('../../services');

// List songs
const songList = async (req, res, next) => {
  const songs = await SongService.getSongs();

  res.locals.songs = songs;
  next();
};

module.exports = songList;

const { SongService } = require('../../services');

// Check request body, and delete song
const songDelete = async (req, res) => {
  const { songid } = req.params;
  await SongService.deleteSong(songid);

  res.redirect('/songs');
};

module.exports = songDelete;

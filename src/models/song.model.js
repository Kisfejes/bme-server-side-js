const mongoose = require('mongoose');

const SongModel = mongoose.model('Song', {
  name: String,
  artist: String,
  youtubeLink: String,
});

module.exports = SongModel;

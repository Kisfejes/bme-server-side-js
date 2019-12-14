const mongoose = require('mongoose');

const SongModel = mongoose.model('Song', {
  title: String,
  artist: String,
  youtubeLink: String,
});

module.exports = SongModel;
